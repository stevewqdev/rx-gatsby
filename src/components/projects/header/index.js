import React from "react"
import Img from "gatsby-image"
import "./index.css"

const ProjectHero = props => {
  return (
    <section className={`project__header__component c-${props.theme.replace('#','')}`} >
        <div className="container container__custom">
            <div className="row">
                <div className="col-lg-12 hero__title no__padding">
                    {
                        props.title
                        ?  <h1
                                className="xxl__font"
                                dangerouslySetInnerHTML={{ __html: props.title }}
                            />
                        :""
                    }
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 project__info no__padding">
                    <p className="md__font bold__font reg__font project__client">
                        Client
                    </p>
                    <p className="xsm__font reg__font">
                        {props.clientName}
                    </p>

                    <p className="md__font bold__font reg__font project__info__content">
                        Project Info
                    </p>
                    <div
                        className="sm__font reg__font"
                        dangerouslySetInnerHTML={{ __html: props.projectInfo }}
                    />

                    <p className="md__font bold__font reg__font project__focus">
                        Project Focus
                    </p>
                    <div
                        className="xsm__font reg__font project__focus__content"
                        dangerouslySetInnerHTML={{ __html: props.projectFocus }}
                    />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 project__featured__image no__padding">
                    <Img fluid={props.projectThumbnail.localFile.childImageSharp.fluid} alt={`${props.clientName} featured image`} tabIndex={-1}/>
                </div>
                
            </div>
        </div>
    </section>
  )
}
export default ProjectHero
