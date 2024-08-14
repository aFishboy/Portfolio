import React, { useEffect, useState } from 'react';

// Define a type for the cursor position
type Position = {
    x: number;
    y: number;
};

const Cursor: React.FC = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        // Define the type for the mouse event
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
    className="fixed rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
    style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: '0 0 250px 200px rgba(50, 100, 255, 0.1)', 
    }}
/>
    );
};

export default Cursor;
