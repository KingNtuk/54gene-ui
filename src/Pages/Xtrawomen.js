import React, {useState} from "react";
import "../App.css"
import XtraW from '../assests/images/xtra-woman.jpg'
import Button from "../Components/Buttons";
import Contact from "../Components/Contact";
import Steps from "../Components/3steps";
import PaymentModal from "../Components/PaymentModal";

const XtraWellWomen = () => {
  const [openPayModal, setOpenPayModal] = useState(false)
  return (
    <div className="container testdetails">
      <div className="gs_wrapper wrapper row">
        <div className="gs_card">
          <section className="row started-row">
            <div className="col-md-12">
              <div className="row test-details-block">
                <h1 className="testdetails-h1 mt-5">
                    XtraWell™ For Women
                </h1>
                <div className="col-md-6 testdetails-right">
                  <h4 className="testdetails-h4">
                    Giving you so much more for better health outcomes
                  </h4>
                  <p className="testdetails-p">
                    This health check is made up of several tests that measure triglycerides, cholesterol, kidney and liver function, average blood glucose (HbA1c) levels, to assess your risk of developing heart diseases, diabetes, stroke and kidney disease. It is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general well being.
                  </p>

                  <div className="test-card">
                    <h5 className="testdetails testlist-amount px-3">NGN45,000</h5>
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
                          src={XtraW}
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
                  <b>Lipid profile (LDL, HDL, Triglycerides, Total cholesterol): </b> This test quantifies the
                  level of cholesterol and other fats in your blood. Abnormal levels could make your blood vessels
                  unhealthy thereby increasing the risk of heart disease or stroke.
                </li>
                <li className="test-details-down-li">
                  <b>Renal Function (Sodium, Potassium, Chloride, Urea, Creatinine): </b> This test is done to
                  assess the function of your kidneys. The kidneys play an important role in ridding your blood
                  of waste through urine, thereby acting as a “filter”. Abnormalities in kidney function could
                  lead to a build up of harmful substances in your blood which may be toxic to your organs.
                </li>
                <li className="test-details-down-li">
                  <b>Liver Function:</b> The liver plays a key role in your body’s metabolism among other functions
                   and this test quantifies the levels of proteins and enzymes produced by the liver to assess its function.
                </li>
                <li className="test-details-down-li">
                  <b>Diabetic Profile (FBS & Hb1Ac):</b> While sugar plays a vital role in the normal functioning of
                   our cells,providing us with energy, abnormally high levels have a detrimental effect on our long term
                    health. Diabetes Mellitus is a disease that results from a dysfunction of our blood glucose regulation
                     and this test panel which includes- Fasting Blood Sugar(FBS) and Glycated Haemoglobin (Hb1Ac)
                      assess blood glucose with a view to diagnose disease or monitor treatment.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="test-details-down-ul">
              <li className="test-details-down-li">
                  <b>Complete Blood Count:</b> This panel assesses the quality and quantity of blood cells in our body. Abnormality in any of the parameters could be indicative of an ongoing anaemia, infection, inflammation, cancer,or bleeding disorders
                </li>
                <li className="test-details-down-li">
                  <b>Erythrocyte Sedimentation Rate:</b> In this test, erythrocytes (also known and red blood cells)
                   are analyzed to determine if there is an ongoing inflammatory process which may be seen in autoimmune
                    diseases like Rheumatoid Arthritis.
                </li>
                <li className="test-details-down-li">
                  <b>Urinalysis:</b> Urine is a product of the filtration that has been carried out by the kidneys.
                   This test is used to evaluate the quality of urine which could indicate high blood levels of substances
                    like sugar and protein among other things. This could serve as a pointer towards an conditions
                     like an ongoing infection or Diabetes Mellitus.
                </li>
                <li className="test-details-down-li">
                  <b>Cervical Health Markers (HPV Panel): </b>
                    High Risk Human Papillomavirus (HrHPV) DNA tests are screening tools to assess the risk of developing cervical cancer. Abnormal findings which may or may not mean an increased risk for cervical cancer would require further investigation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="test-requirements home-test-list pt-5">
          <div className="row">
            <div className="col-md-3">
              <h3 className="requirements-header">Sample type</h3>
              <p className="requirements-p text-align-center">Blood, Urine and Cervical swab</p>
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
        <div className="row test-down-row">
          <div className="col-md-6">
            <div className="testdetails-left">
            <ul className="test-down-ul">
                <li className="test-down-li">
                  <b>Preparation: </b>For Fasting Lipid Profile and Fasting Glucose, it is preferable to come fasting (except in the case of Random glucose testing). Fasting takes a minimum of 8 hours (this means no food, coffee or drinks except water) before sample collection. For example, if you intend to visit the laboratory for this test by 9am the next day, you are required to have had your dinner on or before 11pm the previous evening. If you are hypertensive and are on medication, you are allowed to take your medication (while still fasting).
                </li>
                <li className="test-down-li">
                  <b>For Urinalysis: </b>  Early morning mid-stream urine is preferrable (We will be providing the sample bottle for this test))This means that you allow the first bit of urine to flow out before you start collecting while avoiding the last bit of urine. Collecting mid-stream urine prevents contaminants from other sources getting into the urine.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="testdetails-right">
              <h2 className="testdetails-right-header">
                Why should I consider this health check?
              </h2>
              <ul className="test-down-ul">
                <li className="test-down-li">
                  <b>Prevalence data: </b> About 3 out of every 10 adults have non-communicable diseases like heart diseases, hypertension, diabetes or obesity
                </li>
                <li className="test-down-li">
                  <b>Lifestyle is important: </b>Knowing your health status helps you make better decisions about your lifestyle that can improve your quality of life overall and delay onset to susceptible diseases.
                </li>
                <li className="test-down-li">
                  <b>Quick turnaround time: </b> Usually these tests take a number of days to run but we get it done in a fraction of that time due to use of the latest technology in-country.
                </li>
                <li className="test-down-li">
                  <b>Unnoticed symptoms: </b> Many heart and kidney symptoms go unnoticed till later stages when they have caused irreparable damage. Testing regularly helps catch these symptoms earlier than otherwise.
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

export default XtraWellWomen;
