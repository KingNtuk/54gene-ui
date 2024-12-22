import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../Components/Custom.css'
import VelvetiGold from '../assests/images/velveti-gold.jpg'
import XtraM from '../assests/images/xtra-man.jpg'
import XtraW from '../assests/images/xtra-woman.jpg'
import VelvetiE from '../assests/images/velveti-essential.jpg'
import SimpleWell from '../assests/images/simplywell.jpg'
import Respicare from '../assests/images/respicare.jpg'
import Button from './Buttons';

const AllTest = () => {
  const [active, setActive] = useState("All Test");
  const [all, setAll] = useState(true);
  const [resp, setresp] = useState(false);
  const [general, setGeneral] = useState(false);
  const [sexual, setSextual] = useState(false);
  const testItems = [
    "All Health Checks",
    "General Wellness",
    "Sexually Transmitted Infections",
    "Respiratory Infections",
  ];

  const handleActiveMenu = (item) => {
    if (item === testItems[1]) {
      setSextual(true);
      setAll(false);
      setGeneral(false);
      setresp(false);
    } else if (item === testItems[2]) {
      setGeneral(true);
      setSextual(false);
      setresp(false);
      setAll(false);
    } else if (item === testItems[3]) {
      setGeneral(false);
      setSextual(false);
      setresp(true);
      setAll(false);
    } else {
      setAll(true);
    }
    setActive(item);
  };

  const activeStyle = { borderBottom: "3px solid #F2E14F", paddingLeft: "0px" };

  return (
    <div className="row all-test">
      <header id="test-nav" className="d-flex align-items-center test-filters">
        <div className="container d-flex justify-content-between">
          <nav id="navbar" className='navbar navbar-expand-lg pt-3 pb-5'>
            <ul className="navbar-nav align-items-center">
              {testItems.map((item, i) => {
                return (
                  <li key={i} className='nav-item'>
                    <Link
                      className="test-link nav-link scrollto px-4"
                      to="#"
                      style={active === item ? activeStyle : {}}
                      onClick={() => handleActiveMenu(item)}
                    >
                      {" "}
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      {all ? (
          <>
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={VelvetiGold}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{  height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/simplywell">
                            SimplyWell™
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that measure the overall health of your blood,cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism.
                            <Link to="/simplywell">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/simplywell">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={XtraM}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/xtramen">
                            XtraWell™ For Men
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that measure triglycerides, cholesterol, kidney and liver function, average blood glucose (HbA1c) levels, to assess your risk of developing heart diseases, diabetes, stroke and kidney.
                            <Link to="/xtramen">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/xtramen">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>   
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={XtraW}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/xtrawomen">
                            XtraWell™ For Women
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that measure triglycerides, cholesterol, kidney and liver function, average blood glucose (HbA1c) levels, to assess your risk of developing heart diseases, diabetes, stroke and kidney.
                            <Link to="/xtrawomen">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/xtrawomen">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>   
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={VelvetiE}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/velvetiE">
                            Velveti™ Essential
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure.
                            <Link to="/velvetiE">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/velvetiE">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>   
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={SimpleWell}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/velvetiG">
                            Velveti™ Gold
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure. In addition to this, the.
                            <Link to="/velvetiG">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/velvetiG">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>   
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={Respicare  }
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/respicare">
                            RespiCare™
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        Many microorganisms are known to infect the respiratory tract giving similar signs and symptoms in most cases but
                        requiring different types of treatment. Therefore it isimportant to make an accurate diagnosis and identify the.
                            <Link to="/respicare">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/respicare">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>  

            <div className="d-flex justify-content-center mb-5">
                <Link to="/">
                    <Button title='View More' bgColor='#fff0000'/>
                </Link>
            </div> 
        </>
      ) : sexual ? (
        <>
              <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={VelvetiE}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/velvetiE">
                            Velveti™ Essential
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure.
                            <Link to="/velvetiE">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/velvetiE">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>   
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={SimpleWell}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/velvetiG">
                            Velveti™ Gold
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure. In addition to this, the.
                            <Link to="/velvetiG">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/velvetiG">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div> 
        </>
      ) : general ? (
        <>
                    <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={VelvetiGold}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/simplywell">
                            SimplyWell™
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that measure the overall health of your blood,cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism.
                            <Link to="/simplywell">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/simplywell">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={XtraM}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/xtramen">
                            XtraWell™ For Men
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that measure triglycerides, cholesterol, kidney and liver function, average blood glucose (HbA1c) levels, to assess your risk of developing heart diseases, diabetes, stroke and kidney.
                            <Link to="/xtramen">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/xtramen">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>   
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={XtraW}
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/xtrawomen">
                            XtraWell™ For Women
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        This health check is made up of several tests that measure triglycerides, cholesterol, kidney and liver function, average blood glucose (HbA1c) levels, to assess your risk of developing heart diseases, diabetes, stroke and kidney.
                            <Link to="/xtrawomen">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/xtrawomen">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
      ) : resp ? (
        <>
            <div className="col-md-4 mb-5">
                <div className="test-list-block">
                    <div className="testlist-img-block">
                        <img
                            src={Respicare  }
                            className="img-responsive testlist-img"
                            alt='images'
                            style={{ height: 279 }}
                        />
                    </div>
                    <div className="container p-5">
                        <Link className="test-link" to="/respicare">
                            RespiCare™
                        </Link>
                        <h5 className="testlist-amount">NGN30,000</h5>
                        <p className="testlist-description pt-3">
                        Many microorganisms are known to infect the respiratory tract giving similar signs and symptoms in most cases but
                        requiring different types of treatment. Therefore it isimportant to make an accurate diagnosis and identify the.
                            <Link to="/respicare">
                                <small className="pt-3">Read more</small>
                            </Link>
                        </p>
                        <Link to="/respicare">
                            <Button title='Buy Now' bgColor='#F2E14F'/>
                        </Link>
                    </div>
                </div>
            </div>  
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default AllTest;