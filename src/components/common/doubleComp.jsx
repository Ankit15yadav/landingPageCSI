import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const DoubleComp = ({ active, text1, text2, image }) => {
    // Motion values for x and y coordinates
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Transform x and y values to control the image position
    const xTransform = useTransform(x, [0, 1], ['0px', '20px']);
    const yTransform = useTransform(y, [0, 1], ['0px', '20px']);

    // Handle mouse movement
    const handleMouseMove = (event) => {
        const { clientX: mouseX, clientY: mouseY } = event;
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate normalized coordinates
        const deltaX = (mouseX - centerX) / width;
        const deltaY = (mouseY - centerY) / height;

        x.set(deltaX);
        y.set(deltaY);
    };

    return (
        <div className={`flex ${active ? 'flex-row' : 'flex-row-reverse'} justify-center items-center w-11/12 mx-auto gap-x-28 mt-40`}>
            <div className='flex flex-col w-[40%] gap-y-3'>
                <p className='bg-gradient-to-r from-teal-300 to-slate-800 bg-clip-text text-transparent text-3xl font-bold'>
                    {text1}
                </p>
                <p className='text-sm text-gray-400'>{text2}</p>
                <button className='flex justify-start text-xl bg-gradient-to-t px-3 py-2 from-teal-300 to-slate-600 w-fit rounded-md'>
                    Learn More
                </button>
            </div>

            <motion.div
                className='flex w-[30%]'
                onMouseMove={handleMouseMove}
                style={{ x: xTransform, y: yTransform }} // Apply the transformed values
            >
                <img
                    src={image}
                    alt="content"
                    className="object-cover w-full h-full rounded-lg"
                />
            </motion.div>
        </div>
    );
}

export default DoubleComp;
