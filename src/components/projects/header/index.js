import React from "react"
import Img from "gatsby-image"
import "./index.css"

const ProjectHero = props => {
  return ( 
    <section className={`project__header__component contrast_02 c-${props.theme.replace('#','')}`} >
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
                        className="sm__font reg__font project__info__content__data"
                        dangerouslySetInnerHTML={{ __html: props.projectInfo }}
                    />

                    <p className="md__font bold__font reg__font project__focus">
                        Project Focus
                    </p>
                    <div
                        className="xsm__font reg__font project__focus__content"
                        dangerouslySetInnerHTML={{ __html: props.projectFocus }}
                    />
                    <br/><br/>
                    <div className="share__project">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.73" height="19.72" viewBox="0 0 19.73 19.72">
                        <g id="Grupo_229" data-name="Grupo 229" transform="translate(-336 -3038.156)">
                            <g id="Grupo_75" data-name="Grupo 75">
                            <g id="Grupo_74" data-name="Grupo 74">
                                <g id="Grupo_73" data-name="Grupo 73">
                                <path id="Trazado_39" data-name="Trazado 39" d="M355.73,3054.586a3.29,3.29,0,1,1-6.58,0,3.063,3.063,0,0,1,.15-.96l-7.35-3.68a3.29,3.29,0,1,1,0-3.86l7.35-3.68a3.126,3.126,0,0,1-.15-.97,3.284,3.284,0,1,1,.63,1.94l-7.35,3.67a3.212,3.212,0,0,1,0,1.94l7.35,3.67a3.287,3.287,0,0,1,5.95,1.93Z" fill="#f4f4f4"/>
                                </g>
                            </g>
                            </g>
                        </g>
                        </svg>
                    </div>
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
