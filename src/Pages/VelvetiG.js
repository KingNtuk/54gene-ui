import React, {useState} from "react";
import "../App.css"
import Button from "../Components/Buttons";
import VelvetiGold from '../assests/images/velveti-gold.jpg'
import Contact from "../Components/Contact";
import Steps from "../Components/3steps";
import PaymentModal from "../Components/PaymentModal";

const StiGold = () => {
  const [openPayModal, setOpenPayModal] = useState(false)
  return (
    <div className="container testdetails">
      <div className="gs_wrapper wrapper row">
        <div className="gs_card">
          <section className="row started-row">
            <div className="col-md-12">
              <div className="row test-details-block">
                <h1 className="testdetails-h1 mt-5">
                    Velveti™ Gold
                </h1>
                <div className="col-md-6 testdetails-right">
                  <h4 className="testdetails-h4">
                    Clear all doubts
                  </h4>
                  <p className="testdetails-p">
                  This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure. In addition to this, the health check will screen for syphilis, gonorrhea, herpes and other causative organisms for STIs. It is suited for pre-marital or pre-employment screening.
                  </p>

                  <div className="test-card">
                    <h5 className="testdetails testlist-amount px-3">NGN30,200</h5>
                    <Button 
                    title='Buy Now' 
                    onClick={() => {setOpenPayModal(true)}}
                    bgColor='#F2E14F'/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="test-card">
                    <div className="row">
                      <div className="col-md-12 test-card-img-holder">
                        <img
                          src={VelvetiGold}
                          className="img-responsive test-details-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="test-wrapper">
        <div className="home-test-list">
          <h3 className="testlist-header">Tests included in this health check</h3>

          <div className="row">
            <div className="col-md-6">
              <ul className="test-details-down-ul">
                <li className="test-details-down-li">
                  <b>Screening for Bacteria: </b> Chlamydia trachomatis, Haemophilus ducreyi, Mycoplasma genitalium, Mycoplasma hominis, Neisseria gonorrhoeae, Treponema pallidum and Ureaplasma.
                </li>
                <li className="test-details-down-li">
                  <b>Screening for Viruses:</b> Herpes simplex
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="test-details-down-ul">
                <li className="test-details-down-li">
                  <b>Screening for Parasite: </b> Trichomonas vaginalis
                </li>
                <li className="test-details-down-li">
                  <b>Complete HIV Screening:</b> HIV I & II Antibody Plus
                </li>
                <li className="test-details-down-li">
                  <b>Hepatitis B Antigen test</b>
                </li>
                <li className="test-details-down-li">
                  <b>Hepatitis C Detection test</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container testdetails-left pb-2">
               <b>Preparation: </b> You can come for this test at any time of the day.
            </div>
          </div>
        </div>
        <div className="test-requirements home-test-list pt-5">
          <div className="row">
            <div className="col-md-3">
              <h3 className="requirements-header">Sample type</h3>
              <p className="requirements-p">Blood and Urine</p>
            </div>
            <div className="col-md-4">
              <h3 className="requirements-header">Collection Method</h3>
              <p className="requirements-p">Visit the 7RiverLabs Lounge</p>
            </div>
            <div className="col-md-4 req-second-col">
              <h3 className="requirements-header">Who is this health check for?</h3>
              <p className="requirements-p">18+</p>
            </div>
          </div>
        </div>
        <div className="row test-down-row align-items-center">
          <div className="col-md-6">
            <div className="testdetails-left">
              {/* <img src={Extra} className="img-responsive test-details-img"/> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="testdetails-right">
              <h2 className="testdetails-right-header">
                Why should I consider this health check?
              </h2>
              <ul className="test-down-ul">
                <li className="test-down-li">
                  <b>Exposure:</b> More than One million STIs are acquired everyday all over the world.
                </li>
                <li className="test-down-li">
                  <b>Sexually active Men:</b> : Regular STI screening, can detect infections before they present with symptoms, giving an opportunity to reduce the risk of transmitting to other individuals and negative outcomes of STIs, including infertility.
                </li>
                <li className="test-down-li">
                  <b>Sexually active Women:</b> Detecting infections before they present with symptoms, helps to reduce the risk of transmitting to other individuals especially to unborn babies during pregnancy.
                </li>
                <li className="test-down-li">
                  <b> Discretion:</b> While your sexual health status is important, we are also aware that discretion matters more so we have configured our portal in a secure manner to ensure that you have the discretion you desire.
                </li>
                <li className="test-down-li">
                  <b> Quick turnaround time:</b> Usually these tests take a number of days to run but we get it done in a fraction of that time due to use of the latest technology in-country.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Steps />
      <Contact />
      {openPayModal && <PaymentModal closePayModal={setOpenPayModal}/>}
    </div>
  );
};

export default StiGold;
