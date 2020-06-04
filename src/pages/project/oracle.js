import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/oracle.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class Oracle extends Component {

   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;
    return ( 
      <Layout>
        <div className="project__template oracle">
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
                    <div className={`row`} >
                        {
                            pageAcf.oracle_section_one_content.map((element, index) => 
                                <>
                                {
                                    index === 0
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding col-one-${index}`}
                                    
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
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-one-${index} image no__padding`} key={index}
                                    
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                {
                                    index === 1
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-one-${index} image no__padding`} key={index}
                                                                        data-aos="fade-up"
                                                                        data-aos-easing="ease-in-back"
                                                                        data-aos-delay={`120`}
                                                                        data-aos-duration="1200"
                                                                        data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                {
                                    index === 2
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-one-${index} image no__padding`} key={index}
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 copy d-flex  align-items-center col-one-${index}`}
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
                                    </>
                                    :""
                                }
                                {
                                    index === 3
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-one-${index} no__padding image`} key={index}
                                                                        data-aos="fade-up"
                                                                        data-aos-easing="ease-in-back"
                                                                        data-aos-delay={`120`}
                                                                        data-aos-duration="1200"
                                                                        data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                {
                                    index === 4
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex  align-items-center copy col-one-${index}`}
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
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-one-${index} no__padding image`} key={index}
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                {
                                    index === 5
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-one-${index} image `} key={index}
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex  align-items-center copy col-one-${index}`}
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
                                    </>
                                    :""
                                }
                                {
                                    index === 6
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex  align-items-center copy no__padding col-one-${index}`}
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
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-one-${index} image no__padding`} key={index}
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                {
                                    index === 7
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-one-${index} image no__padding`} key={index}
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex align-items-center copy  col-one-${index}`}
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
                                    </>
                                    :""
                                }
                                {
                                    index === 8
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 d-flex align-items-center copy no__padding col-one-${index}`}
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
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9 col-one-${index} image no__padding`} key={index}
                                                                        data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                </>
                            )
                        }
                    </div>
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
export default Oracle

export const pageQuery = graphql`
query OraclePageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 1076}}) {
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
                    fluid(maxWidth: 2000, quality: 100) {
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
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }           
            project_background
            oracle_section_one_content{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
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
