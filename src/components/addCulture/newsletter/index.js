import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./index.css"

const Newsletter = props => {
  // const data = useStaticQuery(graphql`
  //   query GetInTouchQuery {
  //     wordpressAcfOptions {
  //       options {
  //         get_in_touch_copy
  //       }
  //     }
  //   }
  // `)

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  // const [nameStatus, setNameStatus] = useState("")
  // const [nameMessage, setNameMessage] = useState("")

  function submitForm(e) {
    handleSubmit(e)
  }

  function getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  function handleSubmit(e) {
    // var SharpSpringTracking = getCookie("__ss_tk")

    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.length === 0) {
      setStatus("invalid")
      setMessage("Please, add a valid email address")
    } else {
      setStatus("invalid")
      setMessage("")
    }

    // if (name.length === 0 && name.length < 4) {
    //   setNameStatus("invalid")
    //   setNameMessage("Please, add a your name and lastname")
    // }else{
    //   setNameStatus("invalid")
    //   setNameMessage("")
    // }
    if (email && email.length > 0 && name && name.length) {
      if (email.match(mailformat)) {
        var fields = {
          // FNAME: `${name.split(" ")[0]}`,
          // LNAME: `${name.split(" ")[1]}`,
          "group[7812]": "1",
        }

        // Add Lead to SharpSpring
        // var xhr = new XMLHttpRequest()
        // xhr.open(
        //   "POST",
        //   `https://app-3qnmlpda8k.marketingautomation.services/webforms/receivePostback/MzawMLEwMjQ0AgA/f5912f45-8e1c-4154-8046-9f834913f89c/jsonp/?firstName=${
        //     name.split(" ")[0]
        //   }&LastName=${
        //     name.split(" ")[1]
        //   }&email=${email}&trackingid__sb=${SharpSpringTracking}`
        // )
        // xhr.send()

        addToMailchimp(
          email,
          fields,
          "https://raxo.us18.list-manage.com/subscribe/post?u=0a73a5fcd4be545fba0c4bac9&amp;id=d80e65e5f2&SIGNUP=Blogsite"
        )
          .then(data => {
            console.log(data)
            setStatus(data.result)
            setMessage(data.msg)
            setName("")
            setEmail("")
          })
          .catch(error => {
            setStatus(error.result)
            setMessage(error.msg)
          })
      } else {
        setStatus("invalid")
        setMessage("Please, add a valid email address")

        // setNameStatus("invalid")
        // setNameMessage("Please, add a your name and lastname")
      }
    }
  }
  function handleEmailChange(e) {
    setEmail(e.currentTarget.value)
  }
  // function handleNameChange(e) {
  //   setName(e.currentTarget.value)
  // }
  let inTouchCopy = false

  // if (data.wordpressAcfOptions) {
  //   inTouchCopy = data.wordpressAcfOptions.options.get_in_touch_copy
  // }

  return (
    <div className="newsletterWrapper">
      <div className="container newsletterContainer" id="newsletter">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 getWrapper">
            {/* <div
              className=""
              dangerouslySetInnerHTML={{ __html: inTouchCopy }}
            /> */}

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

              <p
                className="dark__font md__font reg__font getintouch__subtitle submit__form"
                onClick={submitForm}
              >
                <svg
                  width="36"
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
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
