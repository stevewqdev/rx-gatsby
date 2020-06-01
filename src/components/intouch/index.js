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
    if (email && email.length > 0) {
      if (email.match(mailformat)) {
        addToMailchimp(email)
          .then(data => {
            console.log(data)
            setStatus(data.result)
            setMessage(data.msg)
          })
          .catch(error => {
            console.log(error)
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
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.768"
                  height="17.04"
                  viewBox="0 0 24.768 17.04"
                >
                  <g
                    id="Grupo_194"
                    data-name="Grupo 194"
                    transform="translate(-975.103 -3648.156)"
                  >
                    <line
                      id="Línea_6"
                      data-name="Línea 6"
                      x2="23.443"
                      transform="translate(975.103 3656.726)"
                      fill="none"
                      stroke="#4c4c4c"
                      strokeWidth="2"
                    ></line>
                    <path
                      id="Trazado_93"
                      data-name="Trazado 93"
                      d="M0,6.835,7.864,0l7.864,6.835"
                      transform="translate(998.546 3648.812) rotate(90)"
                      fill="none"
                      stroke="#4c4c4c"
                      strokeWidth="2"
                    ></path>
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
