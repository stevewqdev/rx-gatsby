import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/jatp.css"
import Vimeo from "@u-wave/react-vimeo"
import RelatedProjects from "../../components/relatedProjects/index"

class JATP extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoIndex: 0,
      volume: 1,
      paused: false,
    }

    this.handlePause = this.handlePause.bind(this)
    this.handlePlayerPause = this.handlePlayerPause.bind(this)
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this)
    this.handleVolume = this.handleVolume.bind(this)
  }

  selectVideo(index) {
    this.setState({ videoIndex: index })
  }

  handlePause(event) {
    this.setState({
      paused: event.target.checked,
    })
  }

  handlePlayerPause() {
    this.setState({ paused: true })
  }

  handlePlayerPlay() {
    this.setState({ paused: false })
  }

  handleVolume(event) {
    this.setState({
      volume: parseFloat(event.target.value),
    })
  }

  componentDidMount() {
    //document.querySelectorAll(".floating__web__info")[1].classList.add("mix__blend__screen");
  }

  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf
    const { paused, volume } = this.state

    return (
      <Layout>
        <div className="project__template jatp">
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
            theme={`${pageAcf.project_background} jatp`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                <div className="row one">
                  <div className="col-lg-12 copy no__padding">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{
                        __html: pageAcf.jatp_sone_copy,
                      }}
                    />
                  </div>
                  <div className="col-lg-12 image no__padding">
                    <Img
                      fluid={
                        pageAcf.jatp_sone_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from jatp project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="includes__separator jatp" id="section__two">
              <div className="container container__custom">
                <div className="row section__two__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image ">
                    <div className="separator --black"></div>
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="300"
                    >
                      <h1
                        className="xxl__font"
                        dangerouslySetInnerHTML={{
                          __html: pageAcf.jatp_sone_about,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section__three">
              <div className="container container__custom">
                <div className="row">
                  {pageAcf.jatp_stwo_grid.map((element, index) => (
                    <>
                      
                      {index !== 0 && index % 2 === 0 ? (
                        <>
                        <div
                          className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 copy hidden-${index}`}
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        <div
                          className={`col-xs-12 col-sm-12 col-md-12 col-lg-9 image hidden-${index} no__padding`}
                        >
                          <Img
                            fluid={
                              element.main_image.localFile.childImageSharp
                                .fluid
                            }
                            alt={`Illustration from jatp project`}
                            tabIndex={-1}
                          />
                        </div>
                        
                        <div
                          className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`}
                        >
                          {element.vimeo_id ? (
                              <a href={element.vimeo_id } target="_BLANK">
                                  <div
                                      className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 image hidden-${index} no__padding`}
                                  >
                                      <Img
                                      fluid={
                                          element.video_image.localFile.childImageSharp
                                          .fluid
                                      }
                                      alt={`Illustration from jatp project`}
                                      tabIndex={-1}
                                      />
                                  </div>
                              </a>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 end__image no__padding">
                          {element.end_image ? (
                            <Img
                              fluid={
                                element.end_image.localFile.childImageSharp
                                  .fluid
                              }
                              alt={`Illustration from jatp project`}
                              tabIndex={-1}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </>
                      ) : (
                        <>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-9 image hidden-${index} no__padding`}
                          >
                            <Img
                              fluid={
                                element.main_image.localFile.childImageSharp
                                  .fluid
                              }
                              alt={`Illustration from jatp project`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 copy hidden-${index}`}
                          >
                            <div
                              className="simple__copy sm__font reg__font"
                              dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`}
                          >
                            {element.vimeo_id ? (
                                <a href={element.vimeo_id } target="_BLANK">
                                    <div
                                        className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 image hidden-${index} no__padding`}
                                    >
                                        <Img
                                        fluid={
                                            element.video_image.localFile.childImageSharp
                                            .fluid
                                        }
                                        alt={`Illustration from jatp project`}
                                        tabIndex={-1}
                                        />
                                    </div>
                                </a>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 end__image no__padding">
                            {element.end_image ? (
                              <Img
                                fluid={
                                  element.end_image.localFile.childImageSharp
                                    .fluid
                                }
                                alt={`Illustration from jatp project`}
                                tabIndex={-1}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </>
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
export default JATP

export const pageQuery = graphql`
  query jatpPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 1893 } }) {
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
            jatp_sone_copy
            jatp_sone_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            jatp_sone_about
            jatp_stwo_grid {
              main_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  url
                }
              }
              video_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  url
                }
              }
              end_image {
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
              vimeo_id
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