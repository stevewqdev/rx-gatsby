import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import "../../layouts/pages/projects/base.css"
import RelatedProjects from "../../components/relatedProjects/index"

class Base extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf

    return (
      <Layout>
        <div className="project__template base">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content={pageData.yoast_meta.yoast_wpseo_metadesc}
            />
            <title>{pageData.yoast_meta.yoast_wpseo_title}</title>
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
            theme={`${pageAcf.project_background} awake`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <div className="single__project" id="single__one">
              <div className="container container__custom">
                <div className="row one">
                  <div className="col-lg-12 copy no__padding">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.sone_copy }}
                    />
                  </div>
                  {pageAcf.base_sone_gallery.map((image, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="450"
                      className={`
                                image__from__gallery
                                no__padding
                                col-xs-12
                                col-sm-12
                                ${index === 0 ? "col-md-12 col-lg-12" : ""}
                                ${index === 1 ? "col-md-6 col-lg-6" : ""}
                                ${index === 2 ? "col-md-6 col-lg-6" : ""}
                                ${index === 3 ? "col-md-6 col-lg-6" : ""}
                                ${index === 4 ? "col-md-6 col-lg-6" : ""}
                                `}
                    >
                      <img src={image} alt="Illustration from Base project" />
                    </div>
                  ))}
                  <div className="col-lg-3 copy no__padding"></div>
                  {pageAcf.base_stwo_gallery.map((image, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="450"
                      className={`
                                image__from__gallery
                                no__padding
                                col-xs-12
                                col-sm-12
                                ${
                                  index === 0
                                    ? "col-md-9 col-lg-9 mix-multiply"
                                    : ""
                                }
                                ${index === 1 ? "col-md-12 col-lg-12" : ""}
                                `}
                    >
                      <img src={image} alt="Illustration from Base project" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="single__project includes__separator"
              id="single__two"
            >
              <div className="container container__custom">
                <div className="row section__three__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding about">
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
                        dangerouslySetInnerHTML={{
                          __html: pageAcf.base_stwo_about,
                        }}
                      />
                    </div>
                  </div>
                  {pageAcf.base_sthree_gallery.map((image, index) => (
                    <>
                      {index === 1 ? (
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
                      ) : (
                        ""
                      )}
                      <div
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        data-aos-offset="450"
                        className={`
                                        image__from__gallery
                                        no__padding
                                        col-xs-12
                                        col-sm-12
                                        ${
                                          index === 0
                                            ? "col-md-12 col-lg-12 mix-multiply"
                                            : ""
                                        }
                                        ${
                                          index === 1 ? "col-md-6 col-lg-6" : ""
                                        }
                                        ${
                                          index === 2
                                            ? "col-md-12 col-lg-12"
                                            : ""
                                        }
                                        ${
                                          index === 3 ? "col-md-6 col-lg-6" : ""
                                        }
                                        ${
                                          index === 4 ? "col-md-6 col-lg-6" : ""
                                        }
                                        ${
                                          index === 5
                                            ? "col-md-12 col-lg-12 mix-multiply"
                                            : ""
                                        }
                                        `}
                      >
                        <img src={image} alt="Illustration from Base project" />
                      </div>
                    </>
                  ))}
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
export default Base

export const pageQuery = graphql`
  query BasePageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 948 } }) {
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
            base_sone_copy
            base_sone_gallery
            base_stwo_gallery
            base_stwo_about
            base_sthree_gallery
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
