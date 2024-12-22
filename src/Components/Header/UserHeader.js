import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons'
import logo from '../Logo.svg'
import "../Custom.css"
import Modal from '../Modal'
import Cart from '../Cart'
import NavModal from '../NavModal'

const UserHeader = () => {
    const[openModal, setOpenModal] = useState(false)
    const[openCart, setOpenCart] = useState(false)
    const[openNav, setOpenNav] = useState(false)

    return(
        <header id="header" className="d-flex align-items-center mt-5">
            <div className="container d-flex justify-content-between navbar-expand-lg">
                <div id="logo">
                    <Link to="/"> <img src={logo} alt="Logo"/></Link>
                </div>

                <div>
                    <button 
                        class="navbar-toggler" 
                        type="button" 
                        onClick={() =>setOpenNav(true)}
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent"         
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <div class="navbar-toggler-icon"><i class="fas fa-bars"></i></div>
                    </button>
                    <nav 
                    // className='navbar' 
                    className="collapse navbar-collapse" id='navbarSupportedContent'>
                        <ul className='navbar-nav align-items-center'>
                            <>
                                <li className='nav-item'><Link className="test-link nav-link scrollto border-right" to="/order"> Our Tests</Link></li>
                                <li><Link 
                                className="test-link nav-link scrollto border-right" 
                                onClick={() => {setOpenModal(true);
                                }}
                                to="#"> Our Locations</Link></li>
                                <li><a href='#' target="_blank" className="test-link nav-link" rel="noreferrer"> Contact Us</a></li>
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
                            onClick={() => {setOpenCart(true);
                            }}
                            to="#">My Cart <i class="fas fa-shopping-cart"></i><span className='cart'><sup>2</sup></span></Link></li>
                        </ul>
                    </nav>
                </div>
                {openModal && <Modal closeModal={setOpenModal} openLocationModal={setOpenModal}/>}
                {openCart && <Cart closeCart={setOpenCart} /> }
                {openNav && <NavModal closeNav={setOpenNav}/>}
            </div>
        </header>
    )
}

export default UserHeader