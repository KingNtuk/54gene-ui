import React from 'react';
import '../Components/Custom.css'
import Steps from '../Components/3steps';
import Contact from '../Components/Contact';
import AllTest from '../Components/AllTest';

const TopHead = () => {
    return (
        <div>
            <div className='container'>
                <div className=''>
                    <h2 className='text-sub px-3 pt-3 pb-1'> Our Health Check</h2>
                </div>
                    <AllTest/>  
            </div>
        </div>
    )
}

export default TopHead;