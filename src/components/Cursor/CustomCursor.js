import {useEffect, useState} from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const updateCursorType = () => {
            const target = document.elementFromPoint(position.x, position.y);
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        window.addEventListener('mousemove', (e) => {
            updatePosition(e);
            updateCursorType();
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, [position.x, position.y]);

    return (
        <div style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}>
            <img
                src="/assets/cursors/cursor-default.png"
                style={{
                    position: 'absolute',
                    left: `${position.x - 16}px`,
                    top: `${position.y - 16}px`,
                    width: '60px',
                    height: 'auto',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    filter: 'saturate(2)',
                    opacity: isPointer ? 0 : 1,
                    transition: 'opacity 0.1s',
                }}
                alt="Custom cursor"
            />
            <img
                src="/assets/cursors/cursor-pointer.png"
                style={{
                    position: 'absolute',
                    left: `${position.x - 16}px`,
                    top: `${position.y - 16}px`,
                    width: '60px',
                    height: 'auto',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    filter: 'saturate(2)',
                    opacity: isPointer ? 1 : 0,
                    transition: 'opacity 0.1s',
                }}
                alt="Pointer cursor"
            />
        </div>
    );
};

export default CustomCursor;