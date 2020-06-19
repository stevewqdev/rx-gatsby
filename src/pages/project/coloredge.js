import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/coloredge.css"
import RelatedProjects from "../../components/relatedProjects/index"

class Coloredge extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf
    return (
      <Layout>
        <div className="project__template coloredge">
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
            theme={`${pageAcf.project_background} coloredge`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                <div className="row one">
                  <div className="col-lg-12 copy no__padding">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.ce_sone_copy }}
                    />
                  </div>
                  <div className="col-lg-12 image no__padding">
                    <Img
                      fluid={
                        pageAcf.ce_sone_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Coloredge project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
                <div className="row two">
                  <div className="col-lg-12 copy no__padding">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.ce_stwo_copy }}
                    />
                  </div>
                  <div className="col-lg-12 image no__padding">
                    <Img
                      fluid={
                        pageAcf.ce_stwo_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Coloredge project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
                <div className="row three">
                  <div className="col-lg-12 copy no__padding d-flex justify-content-end">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{
                        __html: pageAcf.ce_stwo_copy_two,
                      }}
                    />
                  </div>
                  <div className="col-lg-12 image no__padding">
                    <Img
                      fluid={
                        pageAcf.ce_stwo_image_two.localFile.childImageSharp
                          .fluid
                      }
                      alt={`Illustration from Coloredge project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              className="includes__separator coloredge"
              id="section__two"
            >
              <div className="container container__custom">
                <div className="row section__two__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image ">
                    <div className="separator --black"></div>
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="450"
                    >
                      <h1
                        className="xxl__font"
                        dangerouslySetInnerHTML={{ __html: pageAcf.ce_about }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row about__grid">
                  {pageAcf.ce_sthree_grid.map((element, index) => (
                    <>
                      {index % 2 === 0 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                        </>
                      ) : (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      )}
                    </>
                  ))}
                </div>
                <div className="row floating__image">
                  <div className="col-lg-12 image no__padding">
                    <Img
                      fluid={
                        pageAcf.ce_sthree_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Coloredge project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
                <div className="row three">
                  <div className="col-sm-12  col-md-12 col-lg-6 image no__padding"></div>
                  <div className="col-sm-12 col-md-12 col-lg-6 copy no__padding d-flex justify-content-end no__end">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{
                        __html: pageAcf.ce_sfour_copy,
                      }}
                    />
                  </div>

                  <div className="col-lg-12 image no__padding">
                    <Img
                      fluid={
                        pageAcf.ce_sfour_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Coloredge project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="section__three">
              <div className="container container__custom">
                <div className="row">
                  {pageAcf.ce_sfour_grid.map((element, index) => (
                    <>
                      {index === 0 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy d-flex align-items-center"
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
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 1 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                        </>
                      ) : (
                        ""
                      )}
                      {index === 2 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 3 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                        </>
                      ) : (
                        ""
                      )}
                      {index === 4 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding "
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 5 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy d-flex align-items-center"
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
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 6 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                        </>
                      ) : (
                        ""
                      )}
                      {index === 7 ? (
                        <>
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy d-flex align-items-center"
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
                          <div
                            className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Illustration from Coloredge project`}
                              tabIndex={-1}
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
export default Coloredge

export const pageQuery = graphql`
  query ColoredgePageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 58 } }) {
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
            ce_sone_copy
            ce_sone_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            ce_stwo_copy
            ce_stwo_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            ce_stwo_copy_two
            ce_stwo_image_two {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            ce_about
            ce_sthree_grid {
              copy
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  url
                }
              }
            }
            ce_sthree_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            ce_sfour_copy
            ce_sfour_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            ce_sfour_grid {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
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
