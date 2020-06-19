import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/fkh.css"
import RelatedProjects from "../../components/relatedProjects/index"

class FKH extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf

    return (
      <Layout>
        <div className="project__template fkh">
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
            theme={`${pageAcf.project_background} fkh`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                {pageAcf.fkh_main_grid.map((element, index) => (
                  <div className={`row row-${index}`} key={index}>
                    <div
                      className="col-xs-12 col-sm-12 col-md-12 col-lg-9"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                    >
                      <Img
                        fluid={element.image.localFile.childImageSharp.fluid}
                        alt={`Illustration from First Key Homes project`}
                        tabIndex={-1}
                      />
                    </div>
                    <div
                      className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`170`}
                      data-aos-duration="1200"
                    >
                      <div
                        className="simple__copy sm__font reg__font"
                        dangerouslySetInnerHTML={{ __html: element.copy }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="includes__separator fkh" id="section__two">
              <div className="container container__custom">
                <div className="row section__two__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image ">
                    <div className="separator --black"></div>
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="400"
                    >
                      <h1
                        className="xxl__font"
                        dangerouslySetInnerHTML={{ __html: pageAcf.fkh_about }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="section__three " className="uneven__grid">
              `{" "}
              <div className="container container__custom">
                <div className="row main">
                  <div
                    className="floating col-xs-12 col-sm-12 col-md-12 col-lg-12"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`150`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={
                        pageAcf.fkh_about_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from First Key Homes project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
                <div className="row one">
                  {pageAcf.fkh_stwo_grid_one.map((element, index) => (
                    <>
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 image no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 100}`}
                        data-aos-duration="1200"
                      >
                        <Img
                          fluid={element.image.localFile.childImageSharp.fluid}
                          alt={`Illustration from First Key Homes project`}
                          tabIndex={-1}
                        />
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 copy no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 130}`}
                        data-aos-duration="1200"
                      >
                        <div
                          className="simple__copy sm__font reg__font"
                          dangerouslySetInnerHTML={{ __html: element.copy }}
                        />
                      </div>
                    </>
                  ))}
                </div>
                <div className="row two">
                  {pageAcf.fkh_stwo_grid_two.map((element, index) => (
                    <>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 image no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 100}`}
                        data-aos-duration="1200"
                      >
                        <Img
                          fluid={element.image.localFile.childImageSharp.fluid}
                          alt={`Illustration from First Key Homes project`}
                          tabIndex={-1}
                        />
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 copy no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 130}`}
                        data-aos-duration="1200"
                      >
                        <div
                          className="simple__copy sm__font reg__font"
                          dangerouslySetInnerHTML={{ __html: element.copy }}
                        />
                      </div>
                    </>
                  ))}
                </div>
                <div className="row three">
                  {pageAcf.fkh_stwo_grid_three.map((element, index) => (
                    <>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 image no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 100}`}
                        data-aos-duration="1200"
                      >
                        <Img
                          fluid={element.image.localFile.childImageSharp.fluid}
                          alt={`Illustration from First Key Homes project`}
                          tabIndex={-1}
                        />
                      </div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-3 copy no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 130}`}
                        data-aos-duration="1200"
                      >
                        <div
                          className="simple__copy sm__font reg__font"
                          dangerouslySetInnerHTML={{ __html: element.copy }}
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </section>
            `
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
export default FKH

export const pageQuery = graphql`
  query FKHPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 681 } }) {
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
            fkh_main_grid {
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
              copy
            }
            fkh_about
            fkh_about_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            fkh_stwo_grid_one {
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
              copy
            }
            fkh_stwo_grid_two {
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
              copy
            }
            fkh_stwo_grid_three {
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
