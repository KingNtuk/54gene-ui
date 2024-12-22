import React from 'react';
import { Link } from 'react-router-dom';
import AllTest from '../Components/AllTest';
import '../Components/Custom.css'


const Order = () => {
    return (
        <div>
            <div className='container'>
                <div className='mt-5 mb-5'>
                    <h1 className='text-sub'>Buy Test</h1>
                </div>
                <AllTest/>
            </div>
        </div>
    )
}

export default Order;