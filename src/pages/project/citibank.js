import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/citibank.css"
import RelatedProjects from "../../components/relatedProjects/index"

class CitiBank extends Component {
   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;

    return ( 
      <Layout>
        <div className="project__template citibank">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
            <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
            <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
          </Helmet>

          <ProjectHero 
            title={pageAcf.frontend_title}
            clientName={pageAcf.client}
            projectInfo={pageData.content}
            projectFocus={pageAcf.project_focus}
            projectThumbnail={pageAcf.featured_image}
            theme={`${pageAcf.project_background} `}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <div className="single__project" id="single__one">
                <div className="container container__custom">
                    <div className={`row `} >
                    {
                        pageAcf.citibank_section_one_content.map((element, index) => 
                            <>
                                {
                                   index === 0
                                   ?
                                    <>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding  d-flex align-items-start" key={index}
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image no__padding " key={index}
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </>
                                   :""
                                }
                                {
                                   index === 1
                                   ?
                                    <>
                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image no__padding " key={index}
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </>
                                   :""
                                }
                            </>
                        )
                    }
                    </div>
                    {

                        pageAcf.citibank_section_one_content.map((element, index) => 
                            <>
                                {
                                   index === 2
                                   ?
                                   <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                   :""
                                }
                                {
                                   index === 3
                                   ?
                                   <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding d-flex align-items-center"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                   :""
                                }
                                {
                                   index === 4
                                   ?
                                   <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding d-flex align-items-end justify-content-end"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                   :""
                                }
                                {
                                   index === 5
                                   ?
                                   <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding d-flex align-items-center"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                   :""
                                }
                                {
                                   index === 6
                                   ?
                                   <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                   :""
                                }
                                {
                                   index === 7
                                   ?
                                   <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding d-flex align-items-center"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Citibank project`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                   :""
                                }
                            </>
                        )
                    }
                </div>
            </div> 

            <RelatedProjects 
                relatedcopy={pageAcf.related_extra_copy}
                relatedproject={pageAcf.related_project}
                relatedthumbnail={pageAcf.related_project_thumbnail}
                relatedprojectlink={pageAcf.related_project_url}
            ></RelatedProjects>
          </div>


        </div>
      </Layout>
    )
  }
}
export default CitiBank

export const pageQuery = graphql`
query CitiBankPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 1070}}) {
      edges {
        node {
          id
          title
          content
          acf {
            related_extra_copy
            related_project
            related_project_thumbnail {
                localFile{
                  childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  url
                }
            }
            related_project_url
            frontend_title
            client
            project_focus
            featured_image {
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }           
            project_background
            citibank_section_one_content{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 1300, quality: 80) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                        url
                    }  
                }
                copy
            }
          }
          
          yoast_meta {
            yoast_wpseo_canonical
            yoast_wpseo_metadesc
            yoast_wpseo_title
          }
        }
      }
    }
  }
`
