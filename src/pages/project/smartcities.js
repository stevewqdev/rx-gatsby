import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import "../../layouts/pages/projects/smartcities.css"
import RelatedProjects from "../../components/relatedProjects/index"

class SmartCities extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf

    return (
      <Layout>
        <div className="project__template ">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content={pageData.yoast.metadesc}
            />
            <title>{pageData.title} - Raxo </title>
            <link
              rel="canonical"
              href={pageData.yoast_meta.yoast_wpseo_canonical}
            />
          </Helmet>

          <ProjectHero
            title={pageAcf.frontend_title}
            clientName={pageAcf.client}
            projectInfo={pageData.content}
            projectFocus={pageAcf.project_focus}
            projectThumbnail={pageAcf.featured_image}
            theme={pageAcf.project_background}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding copy">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.sone_copy }}
                    />
                  </div>
                </div>
                <div className="row gallery">
                  {pageAcf.sone_gallery.map((image, index) => (
                    <>
                      {index === 0 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`no__padding col-xs-12 col-sm-12 
                                            section__one__image-${index}
                                        
                                        `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {index === 1 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`no__padding col-xs-12 col-sm-12 
                                            section__one__image-${index}
                                        
                                        `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {index === 2 ? (
                        <>
                          <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`${(index + 1) * 100}`}
                            data-aos-duration="1200"
                            className={`no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}
                          >
                            <img
                              src={image}
                              alt="Illustration from Smartcities project"
                            />
                          </div>
                          <div className="col-xs-12 col-md-3"></div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 3 ? (
                        <>
                          <div className="col-xs-12 col-md-3"></div>
                          <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`${(index + 1) * 100}`}
                            data-aos-duration="1200"
                            className={`no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}
                          >
                            <img
                              src={image}
                              alt="Illustration from Smartcities project"
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 4 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`no__padding col-xs-12 col-sm-12 
                                            section__one__image-${index}
                                        
                                        `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {index === 5 ? (
                        <>
                          <div className="col-xs-12 col-md-3"></div>
                          <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`${(index + 1) * 100}`}
                            data-aos-duration="1200"
                            className={`no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}
                          >
                            <img
                              src={image}
                              alt="Illustration from Smartcities project"
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 6 ? (
                        <>
                          <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`${(index + 1) * 100}`}
                            data-aos-duration="1200"
                            className={`no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}
                          >
                            <img
                              src={image}
                              alt="Illustration from Smartcities project"
                            />
                          </div>
                          <div className="col-xs-12 col-md-3"></div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 7 ? (
                        <>
                          <div className="col-xs-12 col-md-3"></div>
                          <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`${(index + 1) * 100}`}
                            data-aos-duration="1200"
                            className={`no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}
                          >
                            <img
                              src={image}
                              alt="Illustration from Smartcities project"
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </div>
              </div>
            </section>

            <section
              className="includes__separator smartcities"
              id="section__two"
            >
              <div className="container container__custom">
                <div className="row section__three__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding">
                    <div className="separator --black"></div>
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="350"
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

            <section id="section__three">
              <div className="container container__custom">
                <div className="row gallery">
                  {pageAcf.stwo_gallery.map((image, index) => (
                    <>
                      {index === 0 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`smartcities no__padding col-xs-12 col-sm-12 
                                                section__three__image-${index}
                                            
                                            `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {index === 1 ? (
                        <>
                          <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`${(index + 1) * 100}`}
                            data-aos-duration="1200"
                            className={`no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                                section__three__image-${index}
                                            
                                            `}
                          >
                            <img
                              src={image}
                              alt="Illustration from Smartcities project"
                            />
                          </div>
                          <div className="col-xs-12 col-md-3"></div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 2 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`no__padding col-xs-12 col-sm-12 
                                                section__three__image-${index}
                                            
                                            `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {index === 3 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`no__padding col-xs-12 col-sm-12 
                                                section__three__image-${index}
                                            
                                            `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {index === 5 ? (
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`${(index + 1) * 100}`}
                          data-aos-duration="1200"
                          className={`no__padding col-xs-12 col-sm-12 
                                                section__three__image-${index}
                                            
                                            `}
                        >
                          <img
                            src={image}
                            alt="Illustration from Smartcities project"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
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
export default SmartCities

export const pageQuery = graphql`
  query SmartcitiesPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 461 } }) {
      edges {
        node {
          id
          title
          content
          acf {
            related_extra_copy
            related_project
            related_project_thumbnail {
              localFile {
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
            sone_copy
            sone_gallery
            about
            stwo_gallery
          }

          yoast{
 metadesc
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
