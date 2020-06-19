import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import "../../layouts/pages/projects/pluto-tv.css"
import RelatedProjects from "../../components/relatedProjects/index"

class PlutoTv extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf

    return (
      <Layout>
        <div className="project__template pluto-tv">
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
                  {pageAcf.plutotv_sone_gallery.map((image, index) => (
                    <>
                      {index === 3 ? (
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
                      ) : (
                        ""
                      )}
                      {index === 5 ? (
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                      ) : (
                        ""
                      )}
                      {index === 6 ? (
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
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
                                    image-${index}
                                    ${
                                      index === 0
                                        ? "col-md-12 col-lg-12 mix-multiply"
                                        : ""
                                    }
                                    ${index === 1 ? "col-md-12 col-lg-12 " : ""}

                                    `}
                      >
                        <img
                          src={image}
                          alt="Illustration from Pluto project"
                        />
                      </div>
                    </>
                  ))}
                  {pageAcf.plutotv_stwo_gallery.map((image, index) => (
                    <>
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
                                    image-${index}
                                    ${
                                      index === 0
                                        ? "col-md-12 col-lg-12 mix-multiply"
                                        : ""
                                    }

                                    `}
                      >
                        <img
                          src={image}
                          alt="Illustration from Pluto project"
                        />
                      </div>
                    </>
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
                          __html: pageAcf.plutotv_stwo_about,
                        }}
                      />
                    </div>
                  </div>
                  {pageAcf.plutotv_sthree_gallery.map((image, index) => (
                    <>
                      {index === 1 ? (
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                      ) : (
                        ""
                      )}
                      {index === 2 ? (
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
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
                                        image-${index}
                                        ${
                                          index === 0
                                            ? "col-md-12 col-lg-12 mix-multiply"
                                            : ""
                                        }
                                        ${
                                          index === 1
                                            ? "col-md-12 col-lg-12 mix-multiply"
                                            : ""
                                        }

                                        `}
                      >
                        <img
                          src={image}
                          alt="Illustration from Pluto project"
                        />
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
export default PlutoTv

export const pageQuery = graphql`
  query PlutoTvPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 1052 } }) {
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
            plutotv_sone_gallery
            plutotv_stwo_gallery
            plutotv_stwo_about
            plutotv_sthree_gallery
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
