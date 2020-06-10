import React, { useState, useEffect } from "react"
import Img from 'gatsby-image'

import "./index.css"

const Hero = props => {


  function parallaxContainer() {
    if (window.innerWidth > 768) {
      window.addEventListener(
        "scroll",
        function() {
          var top =
            (window.pageYOffset || document.scrollTop) -
            (document.clientTop || 0)
          var finalX = top / -7
          if (document.getElementById("hero__component") !== null) {
            document.getElementById(
              "hero__component"
            ).style.transform = `translateY(${finalX}px)`
          }
        },
        { passive: true }
      )
    }
  }


  useEffect(() => {
    setTimeout(function() {
      document
        .querySelectorAll(".hero__component .separator")[0]
        .classList.add("full")
    }, 1500)
    
    

    if(props.classes !== "internal__post"){
      parallaxContainer() 
    }
  })
  return (
    <section
      className={`hero__component ${props.theme} ${props.classes} `}
      id="hero__component"
    >
      {
        props.image !== "" && props.isPost
        ?
        <>
          <Img className={'header__hero__full'} fluid={props.image.childImageSharp.fluid} />
        </>
        : ""
      }
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 hero__title no__padding">
            <div className="separator --black "></div>
            {
              props.template === "template__default"
              ?
              <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 "></div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 hero__title">
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                  className="bold__font md__font"
                >
                  News
                </p>
                {props.category ? (
                  <p
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="800"
                    data-aos-duration="1200"
                    className="reg__font sm__font"
                  >
                    {props.category}
                  </p>
                ) : (
                  ""
                )}
                </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 hero__title">
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                  className="bold__font md__font"
                >
                  Date
                </p>
                {props.firstSubtitle ? (
                  <p
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="800"
                    data-aos-duration="1200"
                    className="reg__font sm__font"
                  >
                    {props.firstSubtitle}
                  </p>
                ) : (
                  ""
                )}
              </div>
              </div>
              : ""
            }
            {props.title ? (
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-duration="1200"
                className="xxl__font"
                dangerouslySetInnerHTML={{ __html: props.title }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row bottom__info">
          <div className="col-xs-6 col-sm-4 col-md-2 col-lg-2 hero__subtitle hero__first__subtitle no__padding">
            {props.firstSubtitle ? (
              <p
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="800"
                data-aos-duration="1200"
                className="bold__font md__font"
              >
                {props.firstSubtitle}
              </p>
            ) : (
              ""
            )}
            {props.category ? (
              <p
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="800"
                data-aos-duration="1200"
                className="bold__font md__font"
              >
                {props.category}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col-xs-2 col-sm-2 col-md-1 col-lg-1 no__padding"></div>
          <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 hero__subtitle hero__second__subtitle no__padding">
            {props.secondSubtitle ? (
              <p
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="900"
                data-aos-duration="1200"
                className="bold__font md__font"
              >
                {props.secondSubtitle}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 no__padding"></div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 no__padding"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 no__padding"></div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 no__padding"></div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hero__extra__info no__padding">
            {props.extraInfo ? (
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="700"
                data-aos-duration="1200"
                className="sm__font reg__font"
                dangerouslySetInnerHTML={{ __html: props.extraInfo }}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 no__padding"></div>
        </div>
      </div>
    </section>
  )
}
export default Hero
