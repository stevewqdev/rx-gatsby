import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import addToMailchimp from 'gatsby-plugin-mailchimp';

import "./index.css"

const GetInTouch = props => {
  const data = useStaticQuery(graphql`
    query GetInTouchQuery {
      wordpressAcfOptions {
        options {
          get_in_touch_copy
        }
      }
    }
  `)

  const [email, setEmail, SetStatus, SetMessage] = useState('');

  function submitForm(e){
    handleSubmit(e); 
  }

  function handleSubmit(e){
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email && email.length > 0){
      if(email.match(mailformat)){
        addToMailchimp(email)
          .then((data) => {
            document.querySelectorAll(".form__success")[0].style.display="block";
            document.querySelectorAll(".form__email__wrong")[0].style.display="none";
            document.querySelectorAll(".form__error")[0].style.display="none";
            document.querySelectorAll(".email__input")[0].value = "";
          })
          .catch((error) => {
            document.querySelectorAll(".form__success")[0].style.display="none";
            document.querySelectorAll(".form__email__wrong")[0].style.display="none";
            document.querySelectorAll(".form__error")[0].style.display="block";
        });
      }else{
        document.querySelectorAll(".form__success")[0].style.display="none";
        document.querySelectorAll(".form__email__wrong")[0].style.display="block";
        document.querySelectorAll(".form__error")[0].style.display="none";
      }

    }

  }
  function handleEmailChange(e){
    setEmail(e.currentTarget.value);
  }

  let inTouchCopy = false

  if (data.wordpressAcfOptions) {
    inTouchCopy = data.wordpressAcfOptions.options.get_in_touch_copy
  }

  return (
    <div className="get__in__touch__wrapper">   
    <div className="container container__custom get_in_touch" id="get_in_touch">
      <div className="row">
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 no__padding get__wrapper">
          <div 
          className="" dangerouslySetInnerHTML={{ __html: inTouchCopy }} />

          <form onSubmit={handleSubmit}>
            <input type="email" className="lg__font dark__font bold__font email__input" name="email" placeholder="Email Address" onChange={handleEmailChange} />
            <div className="form__messages">
              <div className="form__success form__message sm__font bold__font">
                <p>We added your email succesfully</p>
              </div>
              <div className="form__email__wrong form__message sm__font bold__font">
                <p>Please, add a valid email address</p>
              </div>
              <div className="form__error form__message sm__font bold__font">
                <p>We could not add your email to our list, try again later</p>
              </div>
            </div>
            <p className="dark__font md__font reg__font getintouch__subtitle submit__form" onClick={submitForm}>
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" width="24.768" height="17.04" viewBox="0 0 24.768 17.04">
                <g id="Grupo_194" data-name="Grupo 194" transform="translate(-975.103 -3648.156)">
                  <line id="Línea_6" data-name="Línea 6" x2="23.443" transform="translate(975.103 3656.726)" fill="none" stroke="#4c4c4c" strokeWidth="2"></line>
                  <path id="Trazado_93" data-name="Trazado 93" d="M0,6.835,7.864,0l7.864,6.835" transform="translate(998.546 3648.812) rotate(90)" fill="none" stroke="#4c4c4c" strokeWidth="2"></path>
                </g>
              </svg>
            </p>

          </form>

        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 side__column d-flex justify-content-center align-items-center no__padding">
          <div className="up__arrow black__arrow"
>
            <AnchorLink offset='100' href="#top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="53"
                viewBox="0 0 33 53"
              >
                <g
                  id="_"
                  data-name=" "
                  transform="translate(-1557.229 -5946.296)"
                >
                  <text
                    id="_2"
                    data-name="↑"
                    transform="translate(1557.229 5990.296)"
                  >
                    <tspan x="0" y="0">
                      ↑
                    </tspan>
                  </text>
                </g>
              </svg>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default GetInTouch
