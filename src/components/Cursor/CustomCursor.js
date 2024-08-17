import {useEffect, useState} from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <img
            src="/assets/cursors/cursor-default.png"
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '32px',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
            alt="Custom cursor"
        />
    );
};

export default CustomCursor;