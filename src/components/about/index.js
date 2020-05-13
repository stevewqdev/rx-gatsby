import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import "./index.css"

const About = props => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      wordpressAcfOptions {
        options {
          about_copy
          about_areas {
            title
          }
        }
      }
    }
  `)

  let aboutItems = false

  if (data.wordpressAcfOptions) {
    aboutItems = data.wordpressAcfOptions.options
  }
  
  if(props.customData){
    aboutItems = [...props.customData];
  }


  return (
    <section id="about">
      <div className="container container__custom about__wrapper">
        <div className="row ">
          <div className="col-lg-12 no__padding">
            {
              props.customData
              ? <div className="separator --white "></div>
              : <div className="separator --black "></div>
            }
        
          </div>

          {
            props.customData
            ?
              <>
              {
              aboutItems.map((item, index) => (
                <div
                  className="col-xs-3 col-sm-3 col-md-3 work__areas__area no__padding"
                  key={index}

                >
                  <p 
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="top"
                  className="bold__font md__font">{item.title}</p>
                </div>
              ))
              }
              </>
            :
              <>
              {
              aboutItems.about_areas.map((item, index) => (
                <div
                  className="col-xs-3 col-sm-3 col-md-3 work__areas__area no__padding"
                  key={index}
                >
                  <p 
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-anchor-placement="top"
                  className="bold__font md__font">{item.title}</p>
                </div>
              ))
              }
              </>
          }

          <div className="col-xs-3 col-sm-3 col-md-3 work__areas__area"></div>
        </div>
        {
          props.agreementCopy
          ? <div className="row about__rx ">
              <h2
                data-aos="fade-up"
                data-aos-delay={`300`}
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                
                className="bold__font lg__font"
                dangerouslySetInnerHTML={{ __html: props.agreementCopy }}
              />
            </div>

          : <div
              data-aos="fade-up"
              data-aos-delay={`300`}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              
              className="row about__rx bold__font "
              dangerouslySetInnerHTML={{ __html: aboutItems.about_copy }}
            />
        }

      </div>
    </section>
  )
}
export default About
