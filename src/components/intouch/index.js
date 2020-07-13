import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

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

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [nameStatus, setNameStatus] = useState("")
  const [nameMessage, setNameMessage] = useState("")

  function submitForm(e) {
    handleSubmit(e)
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        	c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
	}
    return "";
  }

  function handleSubmit(e) {
    var SharpSpringTracking = getCookie('__ss_tk')

    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if (email.length === 0) {
      setStatus("invalid")
      setMessage("Please, add a valid email address")
    }else{
      setStatus("invalid")
      setMessage("")
    }

    if (name.length === 0 && name.length < 4) {
      setNameStatus("invalid")
      setNameMessage("Please, add a your name and lastname")
    }else{
      setNameStatus("invalid")
      setNameMessage("")
    }
    if (email && email.length > 0 && name && name.length) {
      
      if (email.match(mailformat)) {
        var fields = { 
          FNAME: `${name.split(" ")[0]}`,
          LNAME: `${name.split(" ")[1]}`
        }

        // Add Lead to SharpSpring
        var xhr = new XMLHttpRequest()
        xhr.open('POST', `https://app-3qnmlpda8k.marketingautomation.services/webforms/receivePostback/MzawMLEwMjQ0AgA/f5912f45-8e1c-4154-8046-9f834913f89c/jsonp/?firstName=${name.split(" ")[0]}&LastName=${name.split(" ")[1]}&email=${email}&trackingid__sb=${SharpSpringTracking}`);
        xhr.send()

        addToMailchimp(email, fields)
          .then(data => {
            setStatus(data.result)
            setMessage(data.msg) 
            setName("");
            setEmail("");
          })
          .catch(error => {
            setStatus(error.result)
            setMessage(error.msg)
          })
        } else {
          setStatus("invalid")
          setMessage("Please, add a valid email address")

          setNameStatus("invalid")
          setNameMessage("Please, add a your name and lastname")
        }
    }
  }
  function handleEmailChange(e) {
    setEmail(e.currentTarget.value)
  }
  function handleNameChange(e) {
    setName(e.currentTarget.value)
  }
  let inTouchCopy = false

  if (data.wordpressAcfOptions) {
    inTouchCopy = data.wordpressAcfOptions.options.get_in_touch_copy
  }

  return (
    <div className="get__in__touch__wrapper">
      <div
        className="container container__custom get_in_touch"
        id="get_in_touch"
      >
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding get__wrapper">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: inTouchCopy }}
            />
            <p className="bold__font md__font roboto__font">
              Always stay updated
            </p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "none" }}></label>
              <div className="name__wrapper">
                <input
                  type="text"
                  className="ab__font dark__font bold__font name__input"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleNameChange}
                  value={name}
                />
                <div className="form__messages">

                  {nameStatus === "error" ? (
                    <div
                      className={`form__${status} form__message sm__font bold__font`}
                      dangerouslySetInnerHTML={{ __html: nameMessage }}
                    />
                  ) : (
                    ""
                  )}
                  {nameStatus === "invalid" ? (
                    <div
                      className={`form__email__wrong form__message sm__font bold__font`}
                    >
                      {nameMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="email__wrapper">
                <input
                  type="email"
                  className="ab__font dark__font bold__font email__input"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleEmailChange}
                  value={email}
                />

                <div className="form__messages">
                  {status === "success" ? (
                    <div
                      className={`form__${status} form__message sm__font bold__font form__is__sent`}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  ) : (
                    ""
                  )}
                  {status === "error" ? (
                    <div
                      className={`form__${status} form__message sm__font bold__font`}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  ) : (
                    ""
                  )}
                  {status === "invalid" ? (
                    <div
                      className={`form__email__wrong form__message sm__font bold__font`}
                    >
                      {message}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              
              <p
                className="dark__font md__font reg__font getintouch__subtitle submit__form"
                onClick={submitForm}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.737"
                  height="39.268"
                  viewBox="0 0 49.737 39.268"
                >
                  <g
                    id="Email_Adress"
                    data-name="Email Adress"
                    transform="translate(-373.559 -466.435)"
                  >
                    <g id="Grupo_87" data-name="Grupo 87">
                      <path
                        id="Trazado_96"
                        data-name="Trazado 96"
                        d="M402.657,482.634c2.64,0,4.949,0,8.52.27-2.85-2.34-5.34-4.74-7.92-7.29l-4.409-4.349,4.829-4.83L423.3,486.054,403.677,505.7l-4.829-4.83,4.409-4.38c2.58-2.519,5.07-4.949,7.92-7.26-3.571.241-5.88.241-8.52.241h-29.1v-6.84Z"
                        fill="#606060"
                      />
                    </g>
                  </g>
                </svg>
              </p>
            
              
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
export default GetInTouch
