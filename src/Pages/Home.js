import React from 'react';
import TopHeader from '../Components/TopHeader';
import '../Components/Custom.css'
import Steps from '../Components/3steps';
import Contact from '../Components/Contact';
import AllTest from '../Components/AllTest';

const TopHead = () => {
    return (
        <div>
            <div>
                <TopHeader />
            </div>
            <div className='container'>
                <div className='p'>
                    <h1 className='text-header text-sub px-3 pt-4 pb-3'> Our Health Check</h1>
                    <AllTest/>
                </div>

                <div>
                    <Steps />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default TopHead;