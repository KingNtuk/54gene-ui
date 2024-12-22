import React from "react";
import '../Components/Custom.css'



const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-info">
                <a href="https://7riverlabs.com" className="footer-brand hidden-xs">
                  <svg
                    width="47"
                    height="64"
                    viewBox="0 0 47 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.8123 40.6839H34.922L37.8123 42.9869L38.7901 43.7675L45.7041 49.2888L38.7901 54.8057H38.7853L37.8123 54.0251L37.0792 53.4364L32.5671 49.8395L32.5344 49.8095L31.8761 49.2841L30.7104 48.3539L29.2584 47.1935H29.2537V64H20.0789V44.9038L17.4088 47.0369L17.3619 47.076L14.6311 49.2517L9.18854 53.591L9.16961 53.6082L7.68449 54.7944L0.8178 49.3114L0.742985 49.247L9.18897 42.5056L11.4777 40.6839L12.2766 40.0438L12.7655 39.664H12.7513C12.7595 39.6556 12.7691 39.6483 12.7797 39.6425L12.7891 39.6343C13.9501 38.7041 15.1205 37.774 16.2814 36.8481C16.643 36.5577 17.0003 36.272 17.3623 35.9863C17.3765 35.9734 17.395 35.9605 17.4092 35.9472C17.3937 34.7471 17.3781 33.5467 17.3623 32.346H9.18897L0 32.3417V24.0003L9.18897 24.0046H17.3623V22.9847H17.4088V0H26.5599C26.5645 5.74334 26.5708 11.4879 26.5788 17.2335L29.2533 15.1047L29.8122 14.6566L36.7593 9.11386L37.0788 9.36562L37.8119 9.95112L40.3311 11.9606L40.3406 11.9734L43.8986 14.8108C41.8731 16.4322 39.8442 18.0508 37.8119 19.6665C36.4257 20.7714 35.0391 21.8773 33.6523 22.9843L32.374 24.0042L29.2533 26.4961L26.5599 28.6465L26.5457 32.3456H37.811L47 32.3499V40.6874L37.8123 40.6839Z"
                      fill="#1B249E"
                    ></path>
                  </svg>
                </a>
                <p className="copyright">
                  © 2022 by 54gene. All rights reserved.
                </p>
                <ul className="navbar-nav footer-social d-flex">
                  <li className="nav-item">
                    <a
                      href="https://www.instagram.com/7riverlabs/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://7riverlabs.com/wp-content/uploads/2022/02/instagram.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.facebook.com/7RiverLabs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://7riverlabs.com/wp-content/uploads/2022/02/facebook.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://twitter.com/weare54gene"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://7riverlabs.com/wp-content/uploads/2022/02/twitter.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="row">
                <div className="col-md-3">
                  <h6 className="footer-title">Legal</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="https://7riverlabs.com/privacy-notice/" target="_blank"
                      rel="noreferrer">
                        Privacy notice
                      </a>
                    </li>
                    <li>
                      <a href="/legal-requirements" target="_blank"
                      rel="noreferrer">
                        7rl Terms of Use
                      </a>
                    </li>
                    <li>
                      <a href="https://7riverlabs.com/cookie-policy/" target="_blank"
                      rel="noreferrer">
                        Cookie policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-title">Company</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="https://7riverlabs.com#section-what-we-do" data-scroll-anchor="true" target="_blank"
                      rel="noreferrer">
                        What we do
                      </a>
                    </li>
                    <li>
                      <a href="https://7riverlabs.com#section-who-we-are" data-scroll-anchor="true" target="_blank"
                      rel="noreferrer">
                        Who we are
                      </a>
                    </li>
                    <li>
                      <a href="https://7riverlabs.com/careers/" target="_blank"
                      rel="noreferrer">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-title">Contact</h6>
                  <ul className="footer-links">
                    <li>
                      <a
                        href="https://7riverlabs.com/contact/"
                        className="btn btn-link btn-arrow"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get in touch{" "}
                        <svg
                          width="24"
                          height="16"
                          viewBox="0 0 24 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_206:75)">
                            <path
                              d="M2.66663 8H21.3333"
                              stroke="#1B249E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M16 13.3333L21.3333 8"
                              stroke="#1B249E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M16 2.66667L21.3333 8.00001"
                              stroke="#1B249E"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_206:75">
                              <rect width="24" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href="mailto:customersupport@7riverlabs.com" className="footer-link">customersupport@7riverlabs.com</a>
                      <a href="tel:012296553" className="footer-link">Phone: 012296553</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h6 className="footer-title">Location</h6>
                  <ul className="footer-links">
                    <li>
                      <a href="#">
                        <svg
                          className="flag"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_122:28828)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.4995 23.3171C21.1599 21.6696 24.4988 17.2248 24.4988 12.0001C24.4988 6.77542 21.1599 2.33059 16.4995 0.683105V23.3171V23.3171Z"
                              fill="#1AAF5D"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.49951 0.682735V23.3173C9.75052 23.7594 11.0967 24 12.4991 24C13.9018 24 15.2483 23.7593 16.4995 23.317V0.682996C15.2483 0.24068 13.9018 0 12.4991 0C11.0967 0 9.75052 0.240585 8.49951 0.682736V0.682735Z"
                              fill="white"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.5 11.9055V12.0955C0.540198 17.2794 3.86733 21.6807 8.5 23.3179V0.683105C3.86733 2.32029 0.540198 6.72157 0.5 11.9055Z"
                              fill="#1AAF5D"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_122:28828">
                              <rect
                                width="23.9989"
                                height="24"
                                fill="white"
                                transform="translate(0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        Nigeria
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://covid.7riverlabs.com/"
                        target="_blank"
                        className="btn btn-secondary"
                        rel="noreferrer"
                      >
                        Order a COVID Test
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row accreditations">
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <img
                srcSet="https://7riverlabs.com/wp-content/uploads/2022/02/ISO-9001@2x.png 245w, https://7riverlabs.com/wp-content/uploads/2022/02/ISO-9001@2x.png 490w"
                sizes="(max-width: 767px) 245px, 490px"
                width="245"
                height="80"
                src="https://7riverlabs.com/wp-content/uploads/2022/02/ISO-9001@2x.png"
                alt="ISO 9001"
              />
            </div>
            <div className="col-md-2">
              <img
                srcSet="https://7riverlabs.com/wp-content/uploads/2022/02/ISO-27001@2x.png 245w, https://7riverlabs.com/wp-content/uploads/2022/02/ISO-27001@2x.png 490w"
                sizes="(max-width: 767px) 245px, 490px"
                width="245"
                height="80"
                src="https://7riverlabs.com/wp-content/uploads/2022/02/ISO-27001@2x.png"
                alt="ISO 9001"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
