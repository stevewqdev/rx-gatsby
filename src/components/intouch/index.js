import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
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
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  function submitForm(e) {
    handleSubmit(e)
  }

  function handleSubmit(e) {
    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.length === 0){
      setStatus("invalid")
      setMessage("Please, add a valid email address")
    }
    if (email && email.length > 0) {
      if (email.match(mailformat)) {
        addToMailchimp(email)
          .then(data => {
            setStatus(data.result)
            setMessage(data.msg)
          })
          .catch(error => {
            setStatus(error.result)
            setMessage(error.msg)
          })
      } else {
        setStatus("invalid")
        setMessage("Please, add a valid email address")
      }
    }
  }
  function handleEmailChange(e) {
    setEmail(e.currentTarget.value)
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
              <input
                type="email"
                className="lg__font dark__font bold__font email__input"
                name="email"
                placeholder="Email Address"
                onChange={handleEmailChange}
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
              <p
                className="dark__font md__font reg__font getintouch__subtitle submit__form"
                onClick={submitForm}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="49.737" height="39.268" viewBox="0 0 49.737 39.268">
                <g id="Email_Adress" data-name="Email Adress" transform="translate(-373.559 -466.435)">
                  <g id="Grupo_87" data-name="Grupo 87" >
                    <path id="Trazado_96" data-name="Trazado 96" d="M402.657,482.634c2.64,0,4.949,0,8.52.27-2.85-2.34-5.34-4.74-7.92-7.29l-4.409-4.349,4.829-4.83L423.3,486.054,403.677,505.7l-4.829-4.83,4.409-4.38c2.58-2.519,5.07-4.949,7.92-7.26-3.571.241-5.88.241-8.52.241h-29.1v-6.84Z" fill="#606060"/>
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
