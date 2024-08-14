import React, { createContext, useState, useContext, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn'; // Update with the correct path to your utils.js file

// Create a context for managing mouse enter state
const MouseEnterContext = createContext(undefined);

// CardContainer Component
export const CardContainer = ({ children, className, containerClassName }) => {
    const containerRef = useRef(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    // Handle mouse movement
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        // Reduced sensitivity of rotation
        const x = (e.clientX - left - width / 2) / 50;
        const y = (e.clientY - top - height / 2) / 50;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    // Handle mouse enter
    const handleMouseEnter = () => {
        setIsMouseEntered(true);
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn('py-10 flex items-center justify-center', containerClassName)} // Adjusted py-20 to py-10
                style={{
                    perspective: '1500px',
                    marginTop: 0, // Added to remove any extra margin
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        'flex items-center justify-center relative transition-transform duration-300 ease-in-out',
                        className
                    )}
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

// CardBody Component
export const CardBody = ({ children, className }) => {
    return (
        <div
            className={cn(
                'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
                className
            )}
            style={{ marginTop: 0 }} // Added to remove any extra margin
        >
            {children}
        </div>
    );
};

// CardItem Component
export const CardItem = ({
    as: Tag = 'div',
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}) => {
    const ref = useRef(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        handleAnimations();
    }, [isMouseEntered]);

    // Handle animations based on mouse enter state
    const handleAnimations = () => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX * 0.5}px) translateY(${translateY * 0.5}px) translateZ(${translateZ * 0.5}px) rotateX(${rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg) rotateZ(${rotateZ * 0.5}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };

    return (
        <Tag
            ref={ref}
            className={cn('w-fit transition-transform duration-300 ease-in-out', className)}
            {...rest}
            style={{ marginTop: 0 }} // Added to remove any extra margin
        >
            {children}
        </Tag>
    );
};

// Hook to use the mouse enter context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error('useMouseEnter must be used within a MouseEnterProvider');
    }
    return context;
};
