import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./index.css"

const Newsletter = props => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  function submitForm(e) {
    handleSubmit(e)
  }

  function handleSubmit(e) {
    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email.length === 0) {
      setStatus("invalid")
      setMessage("Please, add a valid email address")
    } else {
      setStatus("invalid")
      setMessage("")
    }

    if (email && email.length > 0) {
      if (email.match(mailformat)) {
        addToMailchimp(
          email,
          "https://raxo.us18.list-manage.com/subscribe/post?u=0a73a5fcd4be545fba0c4bac9&amp;id=d80e65e5f2&SIGNUP=Blogsite"
        )
          .then(data => {
            setStatus(data.result)
            setMessage(data.msg)
            setEmail("")
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

  return (
    <div className="newsletterWrapper">
      <div className="container newsletterContainer" id="newsletter">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 getWrapper">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: "none" }}></label>
              <div className="email__wrapper">
                <input
                  type="email"
                  className="inputText"
                  name="email"
                  placeholder="Enter your email"
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

              <a
                className="dark__font md__font reg__font getintouch__subtitle submit__form"
                onClick={submitForm}
              >
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.6585 9.01514H0V10.9856H33.6585V9.01514Z"
                    fill="#222220"
                  />
                  <path
                    d="M26.0983 20L24.7324 18.6207L33.269 10L24.7324 1.37931L26.0983 0L36.0007 10L26.0983 20Z"
                    fill="#222220"
                  />
                </svg>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
