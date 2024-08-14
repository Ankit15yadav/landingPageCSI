import React from 'react';
import { paras } from '../Data/homePageData';
import DoubleComp from '../components/common/doubleComp';

const ParaPages = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            {
                paras.map((para) => (
                    <div key={para.id}>
                        {/* Directly pass the correct value for the active prop */}
                        <DoubleComp
                            active={para.id % 2 === 0}
                            text1={para.text1}
                            text2={para.text2}
                            image={para.image}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default ParaPages;
