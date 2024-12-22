import React from 'react'
import Topimg from '../assests/images/people.jpeg'
import '../Components/Custom.css'

const TopHeader = () => {
    return (
        <section className='tophead container wrapper mt-5'>
            <div className='subhead container row align-items-center pt-5'>
                <div className='col-md-6'>
                    <h1 className='text-title'>Affordable, key health checks are just a click away</h1>
                    <p className='pt-5 text-p'>
                        Begin the journey to a healthier you by taking a 7RiverLabs health check today. Each health check is seasoned with important parameters per required need that would confirm your health status, provide insights for making informed lifestyle decisions as well as guide you and/ or your physician towards better treatment options.
                    </p>
                </div>
                <div className='col-md-6'>
                    <img src={Topimg} className="img-responsive hero-img" alt='people' style={{ width:500, height:400 }}/>
                </div>
            </div>
        </section>
    )
}

export default TopHeader;