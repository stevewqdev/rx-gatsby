import React from 'react';
import FooterArrow from '../../../images/addCulture/footerArrow.svg';
import FooterScratch from '../../../images/addCulture/footerScratch.svg';
import './index.css';


export default class AddCultureFooter extends React.Component {
  render() {
    return(
      <>
        <div className="adcFooterWrapper">
          <FooterScratch tabIndex="0" alt="Scratch" />
          <div className="contentWrapper">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <p className="footerGreeting">HELLO, </p>
                <h1 className="join">JOIN OUR NEWSLETTER <br/> TO STAY UP TO DATE</h1>
                <FooterArrow tabIndex="0" alt="Arrow" />
              </div>
              <div className="col-lg-6 col-sm-12">

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}