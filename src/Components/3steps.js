import React from 'react'
import laptop from '../assests/images/laptop.svg'
import tube from '../assests/images/tube.svg'

const Steps = () => {
    return (
        <section className='step p-5'>
            <h2 className='step-header'>How to get these tests in 3 steps</h2>
            <div className='row'>
                <div className='col-md-4 mt-5 pt-5'>
                    <img src={laptop} className='step-image' style={{ width:100 , heigth:100 }} alt="icons"/>
                    <h4 className='step'>1. Purchase the Test</h4>
                    <p className='contactstep-p'>
                    Choose this or any other test from our list and pay online. If you do not have a doctor our in-house medical team can guide or refer you to an appropriate physician/clinic/center and a physician will help review your results.
                    </p>
                </div>
                <div className='col-md-4 mt-5 pt-5'>
                    <img src={tube} className='step-image' style={{ width:100 , heigth:100 }} alt="icons"/>
                    <h4 className='step'>2. Provide your Samples</h4>
                    <p className='contactstep-p'>
                    Go to a 7RiverLabs lounge and provide the ID we sent to you via email. Present it at the 7RiverLabs lounge for sample collection.
                    </p>
                </div>
                <div className='col-md-4 mt-5 pt-5'>
                    <img src={laptop} className='step-image' style={{ width:100 , heigth:100 }} alt="icons"/>
                    <h4 className='step'>3. Get your Results Online</h4>
                    <p className='contactstep-p'>
                    Securely view your easy-to-understand results and test history in your 7RiverLabs Consumer portal account.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Steps;