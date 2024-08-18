import React, { useEffect, useState, useCallback, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isPointer, setIsPointer] = useState(false);

    const isClickableElement = useCallback((element) => {
        if (!element) return false;

        const clickableElements = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];

        let currentElement = element;
        while (currentElement) {
            if (clickableElements.includes(currentElement.tagName)) {
                return true;
            }

            if (currentElement.hasAttribute('onclick') ||
                currentElement.getAttribute('role') === 'button' ||
                currentElement.classList.contains('clickable')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }, []);

    const updateCursorType = useCallback((x, y) => {
        const target = document.elementFromPoint(x, y);
        setIsPointer(isClickableElement(target));
    }, [isClickableElement]);

    useEffect(() => {
        let animationFrameId;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const animate = () => {
            currentX = lerp(currentX, targetX, 1);
            currentY = lerp(currentY, targetY, 1);

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const onMouseMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            updateCursorType(targetX, targetY);
        };

        window.addEventListener('mousemove', onMouseMove);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [updateCursorType]);

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                width: '8.5vh',
                height: '7.5vh',
                marginLeft: '-30px',
                marginTop: '-30px',
            }}
        >
            <img
                src="/assets/cursors/cursor-default.png"
                style={{
                    position: 'absolute',
                    width: '4.3vh',
                    height: '5.5vh',
                    opacity: isPointer ? 0 : 1,
                    transition: 'opacity 0.1s',
                }}
                alt="Custom cursor"
            />
            <img
                src="/assets/cursors/cursor-pointer.png"
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    filter: 'saturate(2)',
                    opacity: isPointer ? 1 : 0,
                    transition: 'opacity 0.1s',
                }}
                alt="Pointer cursor"
            />
        </div>
    );
};

export default React.memo(CustomCursor);