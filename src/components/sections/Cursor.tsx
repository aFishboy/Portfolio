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
            className="fixed bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
            style={{
                width: '40px', // Large cursor size
                height: '40px', // Large cursor size
                left: `${position.x}px`,
                top: `${position.y}px`,
                boxShadow: '0 0 80px rgba(255, 255, 255, 1)', // Large white glow
                transition: 'box-shadow 0.3s',
            }}
        />
    );
};

export default Cursor;
