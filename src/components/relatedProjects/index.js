import React from "react"
import Img from "gatsby-image"
import "./index.css"
import { Link } from "gatsby"

const RelatedProjects = props => {
  return (
    <div className="related__projects includes__separator">
      <div className="container container__custom related__mobile">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__section__title no__padding">
            <div className="separator --white "></div>
          </div>
        </div>
      </div>
      <div className="container container__custom related__desktop">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__section__title no__padding">
            <h3
              className="xxl__font bold__font"
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay={`100`}
              data-aos-duration="1200"
            >
              Next Project
            </h3>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 related__project__title no__padding"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay={`150`}
            data-aos-duration="1200"
          >
            <Link
              to={`/project/${props.relatedprojectlink
                .split("project/")
                .pop()}`}
            >
              <p
                className="bold__font md__font"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`200`}
                data-aos-duration="1200"
              >
                Project
              </p>
              <p
                className="reg__font xsm__font"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`200`}
                data-aos-duration="1200"
              >
                {props.relatedproject}
              </p>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 related__project__copy no__padding">
            <div className="internal__info">
              <p
                className="bold__font md__font"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`200`}
                data-aos-duration="1200"
              >
                Focus
              </p>
              <p
                className="reg__font xsm__font hidden__mobile"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`240`}
                data-aos-duration="1200"
              >
                {props.relatedcopy}
              </p>
            </div>
            <Link
              to={`/project/${props.relatedprojectlink
                .split("project/")
                .pop()}`}
            >
              {props.relatedthumbnail.localFile.childImageSharp !== null ? (
                <Img
                  fluid={props.relatedthumbnail.localFile.childImageSharp.fluid}
                  alt={`${props.relatedproject} project`}
                  tabIndex={-1}
                />
              ) : (
                <img
                  src={props.relatedthumbnail.localFile.url}
                  alt={`${props.relatedproject} project`}
                  tabIndex={-1}
                />
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="container container__custom related__mobile">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__section__title no__padding">
            <h3
              className="xxl__font bold__font"
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-delay={`100`}
              data-aos-duration="1200"
            >
              Next Project
            </h3>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__project__title no__padding"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay={`150`}
            data-aos-duration="1200"
          >
            <Link
              to={`/project/${props.relatedprojectlink
                .split("project/")
                .pop()}`}
            >
              {props.relatedthumbnail.localFile.childImageSharp !== null ? (
                <Img
                  fluid={props.relatedthumbnail.localFile.childImageSharp.fluid}
                  alt={`${props.relatedproject} project`}
                  tabIndex={-1}
                />
              ) : (
                <img
                  src={props.relatedthumbnail.localFile.url}
                  alt={`${props.relatedproject} project`}
                  tabIndex={-1}
                />
              )}
            </Link>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__project__title no__padding"
            data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay={`150`}
            data-aos-duration="1200"
          >
            <Link
              to={`/project/${props.relatedprojectlink
                .split("project/")
                .pop()}`}
            >
              <p
                className="bold__font md__font"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`200`}
                data-aos-duration="1200"
              >
                Project
              </p>
              <p
                className="reg__font xsm__font"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`200`}
                data-aos-duration="1200"
              >
                {props.relatedproject}
              </p>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__project__copy no__padding">
            <div className="internal__info">
              <p
                className="bold__font md__font"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`200`}
                data-aos-duration="1200"
              >
                Focus
              </p>
              <p
                className="reg__font xsm__font hidden__mobile"
                data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay={`240`}
                data-aos-duration="1200"
              >
                {props.relatedcopy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RelatedProjects
