import React from "react";
import '../Components/Custom.css'
import {Link} from "react-router-dom"
import Button from "./Buttons";

const Cart = ({closeNav},{openLocationModal}) => {
  return (
    <div className='nav-container'>
      <div className="nav-content container ">
        <div>
          <div className="d-flex justify-content-end flex-end">
            <button 
            className="text-blue cart-x"
            onClick={() => {closeNav(false);}}
            >
              X
            </button>
          </div>
        </div>  
            <nav 
                class="" id='navbarSupportedContent'>
                <ul className='pt-3 navbar-nav d-flex flex-column'>
                    <>
                        <li className='nav-item'><Link className="test-link nav-link scrollto" to="/order"> Our Tests</Link></li>
                        <li onClick={() => openLocationModal(true)}
                        className="test-link nav-link scrollto">Our Locations</li>
                        <li><a href='https://7riverlabs.com/contact/' target="_blank" className="test-link nav-link" rel="noreferrer"> Contact Us</a></li>
                        <li>
                            <Link className="nav-link" to="/user/login">
                                <Button title='Login' bgColor='#FFFFFF'/>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/order">
                                <Button title='Order a Test' bgColor='#F2E14F'/>
                            </Link>
                        </li>
                    </>
                    <li><Link 
                    className="test-link nav-link scrollto border-right"
                    to="#">My Cart <i class="fas fa-shopping-cart"></i><span className='cart'><sup>2</sup></span></Link></li>
                </ul>
            </nav>
      </div>
    </div>
  );
};

export default Cart;
