import React from "react";
import '../Components/Custom.css'
import Testbox from '../assests/images/testimg2.png'
import {Link} from "react-router-dom"
import Button from "./Buttons";

const Cart = ({closeCart}) => {
  return (
    <div className='cart-container'>
      <div className="cart-content container ">
        <div>
          <div className=" cart-wrapper d-flex justify-content-between">
            <h3 className="text-blue pb-4">My Cart</h3>
            <button 
            className="text-blue cart-x"
            onClick={() => closeCart(false)}
            >
              X
            </button>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <div className="">
              <img
                src={Testbox}
                className=""
                style={{ height:80, width:80 }}
              />
            </div>
            <div>
              <h6 className="px-2">
                Standard wellness check - men
              </h6>
            </div>
          </div>
          <div className="cart-q d-flex justify-content-between align-items-center pt-3 pb-4">
            <div className="">
              <Link to="/">
                <small className="">Remove</small>
              </Link>
              <select className="mx-4 px-2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className="">
              <h6>$30,000</h6>
            </div>`
          </div>
          <div className="cart-price pt-4">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Subtotal</h5>
              <h6>$30,000</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-2">
              <h5>Shipping</h5>
              <h6>Free</h6>
            </div>
          </div>
        </div>
      </div>
        <div className="cart-button">
          <div className="d-flex justify-content-between align-items-center pt-2">
            <h6>Total</h6>
            <h6>$30,0000</h6>
          </div>
          <div className="text-center pt-3 pb-3">
            <Button title='Continue to checkout' bgColor='#F2E14F' width={ 200 }/>
          </div>
        </div>
    </div>
  );
};

export default Cart;
