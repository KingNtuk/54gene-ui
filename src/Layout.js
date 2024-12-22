import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";  
import Footer from "./Components/Footer";
import UserHeader from "./Components/Header/UserHeader";
import Home from './Pages/Home';
import RespiCare from "./Pages/Respicare";
import SimplyWell from "./Pages/SimplyWell";
import Xtramen from "./Pages/Xtramen"
import Xtrawomen from './Pages/Xtrawomen';
import VelvetiG from './Pages/VelvetiG';
import Velvet from './Pages/VelvetiE'
import Login from './Pages/Login';
import Order from "./Pages/Ordertest";



const Layout= () =>{
    return(
       <>
        <Router>
            <UserHeader />
            <section style={{
                    minHeight: 'calc(75vh - 64px)',
                }}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/simplywell" element={<SimplyWell />}/>
                    <Route path="/respicare" element={<RespiCare />}/>
                    <Route path="/velvetiG" element={<VelvetiG />}/>
                    <Route path="/velvetiE" element={<Velvet />}/>
                    <Route path="/xtramen" element={<Xtramen />}/>
                    <Route path="/xtrawomen" element={<Xtrawomen />}/>
                    <Route path="user/login" element={<Login />}/>
                    <Route path="Order" element={<Order />}/>
                    
                </Routes>
                <Footer/>
            </section>    
        </Router>
        

                
       </>
    )
}

export default Layout