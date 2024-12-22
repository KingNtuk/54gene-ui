import React from 'react'
import Button from '../Components/Buttons'
import '../Components/Custom.css'

const Contact = () => {
    return (
        <section className='contact'>
            <div className='row'>
                <div className='col-md-6 contact-right'>
                    <h3 className='contact-h3'>Do you need help choosing the right test for you?</h3>
                </div>
                <div className='col-md-6 contact-left'>
                  <p className='contact-p'>
                  Our board-certified genetic counsellors are available to provide personalized and valuable insight into what is the most appropriate test for you and what our molecular genetic test results mean for you.
                  </p>
                  <a href='https://7riverlabs.com/contact/' target="_blank" rel="noreferrer">
                    <Button title="Contact Us" bgColor="#F2E14F" />
                  </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;