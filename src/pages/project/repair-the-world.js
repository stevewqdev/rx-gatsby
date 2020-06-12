import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/rtw.css"
import RelatedProjects from "../../components/relatedProjects/index"

class MinaAndJack extends Component {
   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;


    return ( 
      <Layout>
        <div className="project__template ">
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
            theme={`${pageAcf.project_background} rtw`}
          ></ProjectHero>

          <div className="main__section__wrapper rtw">

            <section id="section__one">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 image no__padding"
                  
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay={`120`}
                  data-aos-duration="1200"
                  >
                    <Img fluid={pageAcf.sone_image.localFile.childImageSharp.fluid} alt={`RTW illustration`} tabIndex={-1}/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 copy "
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay={`160`}
                  data-aos-duration="1200"
                  
                  >
                    <div
                    className="simple__copy sm__font reg__font"
                    dangerouslySetInnerHTML={{ __html: pageAcf.sone_copy }}
                    />
                  </div>
                </div>
                <div className="row gallery">
                  {
                    pageAcf.sone_gallery.map((element, index) =>
                      <>
                      {
                        index === 0 || index === 1
                        ?
                        <>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding"  key={index}
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          
                          >
                            <img src={element} alt="RTW illustration"/>
                          </div>
                        </>
                        :""
                      }
                      {
                        index === 2
                        ?
                        <>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding image__3"  key={index}
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          >
                            <img src={element} alt="RTW illustration"/>
                          </div>
                        </>
                        :""
                      }
                      </>
                    )
                  }
                </div>
              </div>
            </section>
            
            <section className="includes__separator rtw__about" id="section__two">
                <div className="container container__custom">
                <div className="row section__three__about">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding">
                    <div className="separator --black"></div>
                    <div
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        
                    >
                        <h1

                            className="xxl__font"
                            dangerouslySetInnerHTML={{ __html: pageAcf.about }}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section> 

            <section id="section__three" className="rtw">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-lg-12 no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                    
                  >
                    {
                      pageAcf.rtwsthree_gallery.map((element, index) =>
                        <img  key={index} src={element} alt="RTW illustration"/>
                      )
                    }
                  </div>
                </div>
                <div className="row">
                  {
                    pageAcf.sthree_grid.map((element, index) => 
                      <>
                      {
                        index % 2 === 0  
                        ?
                        <>
                          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 image no__padding" key={index}
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`120`}
                          data-aos-duration="1200"
                          
                          >
                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`RTW illustration`} tabIndex={-1}/>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image"
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`160`}
                          data-aos-duration="1200"
                          
                          >
                            <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                        </>
                        : 
                        <>
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image"
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`120`}
                          data-aos-duration="1200"
                          
                          >
                            <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 image no__padding"  key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`160`}
                            data-aos-duration="1200"
                            
                          
                          >
                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`RTW illustration`} tabIndex={-1}/>
                          </div>
                        </>
                      }
                      </>
                    )
                  }
                </div>
              </div>
            </section>

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
export default MinaAndJack

export const pageQuery = graphql`
query RTWPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 599}}) {
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
            sone_image{
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }
            sone_copy
            sone_gallery
            about
            rtwsthree_gallery
            sthree_grid{
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
