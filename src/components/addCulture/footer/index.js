import React, { Component } from "react"

import Newsletter from "../newsletter"
import Instagram from "../../../images/addCulture/socialIcons/instagram.png"
import FooterArrow from "../../../images/addCulture/footerArrow.svg"
import FooterScratch from "../../../images/addCulture/footerScratch.svg"
import "./index.css"

export default class AddCultureFooter extends Component {
  render() {
    return (
      <>
        <div className="adcFooterWrapper">
          <FooterScratch tabIndex="0" alt="Scratch" />
          <div className="contentWrapper">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <p className="footerGreeting">HELLO, </p>
                <h1 className="join">
                  JOIN OUR NEWSLETTER <br /> TO STAY UP TO DATE
                </h1>
                <FooterArrow className="footerArrow" tabIndex="0" alt="Arrow" />
              </div>
              <div className="col-lg-6 col-sm-12 d-flex align-items-center">
                <Newsletter></Newsletter>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row justify-content-between">
                <div className="col-md-6 col-sm-12 ml-auto social-container">
                  <a href="https://twitter.com/raxostudio?lang=en">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 4.30865C23.1177 4.70062 22.1681 4.9646 21.1722 5.08379C22.1889 4.47423 22.9697 3.5095 23.3368 2.35997C22.3865 2.92474 21.3314 3.33351 20.2107 3.5551C19.3123 2.59836 18.0316 2 16.6165 2C13.8975 2 11.6928 4.20465 11.6928 6.92367C11.6928 7.30924 11.7368 7.68522 11.8208 8.046C7.72829 7.84121 4.10053 5.88054 1.67189 2.90154C1.24792 3.62869 1.00553 4.47424 1.00553 5.37658C1.00553 7.08447 1.87347 8.59157 3.19579 9.47471C2.38784 9.44911 1.62949 9.22752 0.964734 8.85875V8.92034C0.964734 11.3066 2.66302 13.296 4.91407 13.7496C4.5013 13.8616 4.06613 13.9224 3.61736 13.9224C3.29978 13.9224 2.991 13.8912 2.69022 13.8336C3.31658 15.7895 5.13566 17.2134 7.28991 17.2534C5.60523 18.5733 3.48217 19.3612 1.17512 19.3612C0.776747 19.3612 0.384774 19.338 0 19.2916C2.17905 20.6884 4.76688 21.5043 7.5475 21.5043C16.6037 21.5043 21.5562 14.0016 21.5562 7.49563C21.5562 7.28204 21.5522 7.06927 21.5418 6.85888C22.5049 6.16293 23.34 5.29578 24 4.30865Z"
                        fill="#222220"
                      />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/raxo/">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a href="https://www.facebook.com/raxo.studio/">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.315 4.9578C16.6917 4.83314 15.8498 4.74 15.3204 4.74C13.8867 4.74 13.7936 5.36333 13.7936 6.36066V8.13607H17.3774L17.065 11.8137H13.7936V23H9.30632V11.8137H7V8.13607H9.30632V5.86127C9.30632 2.74533 10.7708 1 14.4477 1C15.7252 1 16.6602 1.187 17.8753 1.43633L17.315 4.9578Z"
                        fill="#222220"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/raxo">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.77475 4.28389C5.77475 5.52898 4.82671 6.5366 3.34415 6.5366C1.91935 6.5366 0.971323 5.52898 1.00066 4.28389C0.971323 2.97828 1.91933 2 3.37255 2C4.82669 2 5.74633 2.97828 5.77475 4.28389ZM1.11986 22.8191V8.31621H5.62712V22.8181H1.11986V22.8191Z"
                        fill="#222220"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.24029 12.9446C9.24029 11.1357 9.18069 9.5935 9.12109 8.31816H13.0361L13.2442 10.305H13.3331C13.9263 9.38538 15.4089 7.99268 17.8111 7.99268C20.7762 7.99268 23.0005 9.95016 23.0005 14.219V22.821H18.4932V14.7838C18.4932 12.9144 17.8413 11.6399 16.2102 11.6399C14.9642 11.6399 14.2234 12.4999 13.9273 13.3297C13.8081 13.6268 13.7494 14.0412 13.7494 14.4574V22.821H9.24211V12.9446H9.24029Z"
                        fill="#222220"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
