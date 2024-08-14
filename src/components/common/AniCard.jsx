import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AniCard = ({ info }) => {
    const [animatedCards, setAnimatedCards] = useState(new Set());

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animatedCards.has(entry.target)) {
                setAnimatedCards(prev => new Set(prev).add(entry.target));
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        const elements = document.querySelectorAll('.card');
        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, [animatedCards]);

    return (
        <div className='flex w-9/12 mx-auto mt-10 gap-x-2'>
            {
                info?.map((data) => (
                    <motion.div
                        key={data.id}
                        className='card border border-pastelBlue-100 bg-pastelBlue-900 p-4 rounded-lg mb-32 relative'
                        initial={{ opacity: 0, y: 50, filter: 'blur(3px)' }}
                        animate={{
                            opacity: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 1 : 0,
                            y: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 0 : 50,
                            filter: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 'blur(0px)' : 'blur(3px)',
                        }}
                        transition={{ duration: 0.5 }}
                        data-id={data.id}
                    >
                        <motion.p
                            key={data.id + 'title'}
                            className='text-sm mt-1 break-words max-w-xs font-semibold'
                            initial={{ opacity: 0, filter: 'blur(3px)' }}
                            animate={{
                                opacity: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 1 : 0,
                                filter: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 'blur(0px)' : 'blur(3px)',
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {data.title}
                        </motion.p>
                        <motion.p
                            key={data.id + 'desc'}
                            className='text-xs mt-1 text-gray-400 font-medium max-w-xs'
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 1 : 0,
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {data.desc}
                        </motion.p>
                        <motion.img
                            key={data.id + 'img'}
                            src={data.img}
                            loading="lazy"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 1 : 0,
                                y: animatedCards.has(document.querySelector(`.card[data-id="${data.id}"]`)) ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='w-full h-auto transform transition-transform duration-300 ease-in-out hover-3d'
                        />
                        <a href="#" className="absolute bottom-4 right-4 mt-2 bg-gradient-to-r from-green-300 via-green-400 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-400 hover:via-green-500 hover:to-green-600 transition-colors duration-300">
                            Learn More
                        </a>
                    </motion.div>
                ))
            }
        </div>
    );
};

export default AniCard;
