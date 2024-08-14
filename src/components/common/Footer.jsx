import React from 'react'

const Footer = () => {
    return (
        <div className=' flex justify-center  h-[100px] w-full bg-pastelBlue-700 mt-20 text-pastelBlue-50'>
            <div className=' text-[15px] font-bold mt-2 flex justify-center w-[24%] border-r border-r-gray-300'>
                About

            </div>
            <div className=' text-[15px] font-bold mt-2 flex justify-center w-[24%] border-r border-r-gray-300'>
                Members
            </div>
            <div className='text-[15px] font-bold mt-2 flex justify-center w-[24%] border-r border-r-gray-300'>
                Events
            </div>
            <div className='text-[15px] font-bold mt-2 flex justify-center w-[24%]'>
                Social Media
            </div>
        </div>
    )
}

export default Footer
