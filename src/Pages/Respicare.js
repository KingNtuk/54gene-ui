import React, {useState} from "react";
import "../App.css"
import Button from "../Components/Buttons";
import Respicare from '../assests/images/respicare.jpg'
import Contact from "../Components/Contact";
import Steps from "../Components/3steps";
import PaymentModal from "../Components/PaymentModal";


const RespiCare = () => {
  const [openPayModal, setOpenPayModal] = useState(false)

  return (
    <div className="container testdetails">
      <div className="gs_wrapper wrapper row">
        <div className="gs_card">
          <section className="row started-row">
            <div className="col-md-12">
              <div className="row test-details-block align-items-center">
                <h1 className="testdetails-h1 mt-5">RespiCare™</h1>
                <div className="col-md-6 testdetails-right">
                  <h4 className="testdetails-h4">
                    Because breathing symbolizes life - we want you to breathe
                    easy!
                  </h4>
                  <p className="testdetails-p">
                    Many microorganisms are known to infect the respiratory
                    tract giving similar signs and symptoms in most cases but
                    requiring different types of treatment. Therefore it is
                    important to make an accurate diagnosis and identify the
                    causative agent. This bundle is made up of several tests
                    that help to rule out or confirm an infection as well as
                    identify the causative organism with one sample and in
                    one-go so that your healthcare provider can begin treating
                    you appropriately. Broad panel testing could be life saving
                    as it saves time and brings about accuracy. More
                    specifically, screening for prolonged flu-like symptoms,
                    bacterial and viral pneumonia, bronchitis, croup, whooping
                    cough, COVID-19 and other common respiratory tract
                    infections.
                  </p>

                  <div className="test-card">
                    <h5 className="testdetails testlist-amount px-3">NGN45,250</h5>
                    <Button 
                    title='Buy Now' 
                    bgColor='#F2E14F'
                    onClick={() => {setOpenPayModal(true)}}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="test-card">
                    <div className="row">
                      <div className="col-md-12 test-card-img-holder">
                        <img
                          src={Respicare}
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
          <h3 className="testlist-header">
            Tests included in this health check
          </h3>

          <div className="row">
            <div className="col-md-12">
              <ul className="test-details-down-ul">
                <li className="test-details-down-li pb-2">
                  <b>
                    This panel screens for 20 of the commonest viruses
                    associated with RTI and 3 bacterial species
                  </b>
                </li>
                <li className="test-details-down-li pb-2">
                  <b>Viruses: </b>Influenza virus A, Influenza virus A H1N1
                  2009, Influenza virus A H3, Influenza virus B, Human
                  metapneumovirus, Respiratory syncytial virus A, Respiratory
                  syncytial virus B, Rhinovirus, Enterovirus, Human
                  parainfluenza virus type1, Human parainfluenza virus type 2,
                  Human parainfluenza virus type3, Human parainfluenza virus
                  type 4, Adenovirus Bocavirus, Human coronavirus SARS-CoV-2,
                  Human coronavirus 229E, Human coronavirus HKU1, Human
                  coronavirus OC43 and Human coronavirus NL63.
                </li>
                <li className="test-details-down-li pb-3">
                  <b>Bacteria: </b> Bordetella pertussis, Bordetella
                  parapertussis and Mycoplasma pneumoniae.
                </li>
                <li className="test-details-down-li pb-1">
                  <em>
                    While a lot of viral and bacterial tests for respiratory
                    infections often test for specific organisms with the need
                    to take multiple samples, RespiCare ™ only needs a single
                    sample to run tests for an array of viruses and bacteria
                    including the Human coronavirus SARS-CoV-2 responsible for
                    the COVID-19 pandemic.
                  </em>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container testdetails-left pb-2">
              <b>Preparation: </b>You can come for this test at any time of the
              day.
            </div>
          </div>
        </div>
        <div className="test-requirements home-test-list pt-5">
          <div className="row">
            <div className="col-md-3">
              <h3 className="requirements-header">Sample type</h3>
              <p className="requirements-p">
                Nasal or throat swabs/ <br />
                lung or respiratory fluid aspirate
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="requirements-header">Collection Method</h3>
              <p className="requirements-p">Visit the 7RiverLabs Lounge</p>
            </div>
            <div className="col-md-4 req-second-col">
              <h3 className="requirements-header">
                Who is this health check for?
              </h3>
              <p className="requirements-p">Children and Adults</p>
            </div>
          </div>
        </div>
        <div className="row test-down-row align-items-center">
          <div className="col-md-6">
            <div className="testdetails-left">
              <img
                src={Respicare}
                className="img-responsive test-details-img"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="testdetails-right">
              <h2 className="testdetails-right-header">
                Why should I consider this health check?
              </h2>
              <ul className="test-down-ul">
                <li className="test-down-li">
                  <b>Prevalence data: </b> Respiratory tract infections are the
                  biggest source of infections and the common cause of
                  hospitalisation.
                </li>
                <li className="test-down-li">
                  <b>Treatment specificity: </b> Treatment outcomes are known to
                  improve once causative organisms are identified especially
                  with broad panels in one run
                </li>
                <li className="test-down-li">
                  <b>Quick turnaround time: </b> Usually these tests take a
                  number of days to run but we get it done in a fraction of that
                  time due to use of the latest technology in-country.
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

export default RespiCare;
