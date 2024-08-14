import React from 'react';
import { CardContainer, CardBody, CardItem } from '../components/common/3d_card'; // Update path as necessary
import logo from "../assets/pexels-visit-greenland-108649-360912.jpg";

export function ThreeDCardDemo() {
    return (
        <div className='w-11/12 mx-auto'>
            <CardContainer className="inter-var">
                <CardBody className="relative w-11/12 mx-auto h-screen overflow-hidden border-none p-0 rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_10px_rgba(173,216,230,0.8)]">
                    <CardItem
                        translateZ="20"
                        className="w-[1500px] h-[600px] rounded-3xl"
                    >
                        <img
                            src={logo}
                            alt="thumbnail"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        {/* Overlaying text with 3D effect on hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
                            style={{ perspective: '1000px' }}>
                            <h1 className="text-4xl font-bold text-center transform transition-transform duration-300 hover:translate-z-[50px] hover:scale-110 hover:rotateY-6 hover:rotateX-6">
                                Computer Society of India (CSI)
                            </h1>
                            <p className="mt-4 text-lg text-center transform transition-transform duration-300 hover:translate-z-[30px] hover:scale-105 hover:rotateY-4 hover:rotateX-4">
                                Empowering tech enthusiasts with knowledge, networking, and professional growth opportunities.
                            </p>
                        </div>
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    );
}
