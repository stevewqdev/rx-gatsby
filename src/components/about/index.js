import React from "react"
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

  return (
    <section id="about">
      <div className="container container__custom about__wrapper">
        <div className="row ">
          <div className="col-lg-12 no__padding">
            <div className="separator --black "></div>
          </div>

          {aboutItems.about_areas.map((item, index) => (
            <div
              className="col-xs-4 col-sm-3 col-md-3 work__areas__area no__padding"
              key={index}
            >
              <p className="bold__font md__font">{item.title}</p>
            </div>
          ))}

          <div className="col-xs-4 col-sm-3 col-md-3 work__areas__area"></div>
        </div>
        <div
          className="row about__rx bold__font "
          dangerouslySetInnerHTML={{ __html: aboutItems.about_copy }}
        />
      </div>
    </section>
  )
}
export default About
