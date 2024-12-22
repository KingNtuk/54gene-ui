import React from "react";
import '../Components/Custom.css'
import Button from "./Buttons";

const PaymentModal = ({closePayModal}) => {

  return (
    <div className="paymentmodal-container ">
      <div className="paymentmodal-content">
        <div className="paymentmodal-wrapper container px-5 pt-3 p-3">
          <div className="paymentheader-wrapper d-flex justify-content-between pb-3">
            <h3>Provide details to complete payment</h3>
            <button 
            className="cart-x"
            onClick={() => closePayModal(false)}
            >
              X
            </button>
          </div>
            <form className="">
                <div className="form-group">
                    <label>Enter your email address</label>
                    <input
                        type= "email"
                        className='form-control mx-auto'
                        id='payment'
                        required
                    />
                </div>
                <div className="">
                    <label>Test</label>
                    <input
                        type= "text"
                        className='form-control mx-auto'
                        id='payment'
                        value='SimplyWell'
                        required
                    />
                </div>
                <div className=" d-flex flex-row">
                    <Button title='Pay Now' color='#000000' bgColor='#F2E14F' width={ 500 }/>
                </div>
            </form>  
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
