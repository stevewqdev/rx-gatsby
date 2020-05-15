import React from "react"
import Img from "gatsby-image"
import "./index.css"
import { Link } from "gatsby"

const RelatedProjects = props => {
  return ( 
    <div className="related__projects">
        <div className="container container__custom">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 related__section__title no__padding">
                    <h3 className="xxl__font bold__font"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`100`}
                        data-aos-duration="1200"
                    >
                        Related Project
                    </h3>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 related__project__title no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`150`}
                    data-aos-duration="1200"
                >
                    <Link to={props.relatedprojectlink}>
                        <p className="reg__font xsm__font"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`200`}
                        data-aos-duration="1200"
                        >{props.relatedproject}</p>
                    </Link>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 related__project__copy no__padding">
                    <p className="reg__font xsm__font"
                    
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`240`}
                    data-aos-duration="1200"
                    >{props.relatedcopy}</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 related__project__thumbnail no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`300`}
                    data-aos-duration="1200"
                >
                    <Link to={props.relatedprojectlink}>
                        <Img fluid={props.relatedthumbnail.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default RelatedProjects
