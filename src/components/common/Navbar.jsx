import React, { useEffect, useState } from 'react';
import { navItem } from '../../Data/NavbarComp';
import { BsSoundwave } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger the animation after a 1-second delay
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 1000); // 1-second delay

        return () => clearTimeout(timer); // Clean up timeout on component unmount
    }, []);

    return (
        <div className="flex items-center justify-between text-white w-11/12 mx-auto mt-6 rounded-full h-16 border-b-4 border-pastelBlue-100 ">
            <div className={`flex items-center justify-between w-full h-16 transition-transform duration-1000 ease-out ${animate ? 'transform translate-x-0 scale-100 opacity-100' : 'transform -translate-x-full scale-0 opacity-0'}`}>
                <div className='flex items-center gap-x-2'>
                    <BsSoundwave className={`w-[30px] h-[30px] ml-2 transition-transform duration-1000 ${animate ? 'transform scale-100' : 'transform scale-0'}`} />
                    <p className={`transition-transform duration-1000 ${animate ? 'transform scale-100' : 'transform scale-0'}`}>CSI</p>
                </div>
                <div>
                    <ul className='flex gap-x-6'>
                        {navItem?.map((data) => (
                            <li key={data.id} className={`flex items-center transition-transform duration-1000 ${animate ? 'transform scale-100' : 'transform scale-0'}`}>{data.title}</li>
                        ))}
                    </ul>
                </div>
                <div className='mr-4'>
                    <button className={`flex items-center gap-x-2 bg-transparent border w-fit px-6 py-2 rounded-full transition-transform duration-1000 ${animate ? 'transform scale-100' : 'transform scale-0'}`}>
                        <p>Login</p>
                        <IoIosArrowRoundForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
