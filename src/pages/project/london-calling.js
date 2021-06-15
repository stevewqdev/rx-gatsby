import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/london-calling.css"
import Vimeo from "@u-wave/react-vimeo"
import RelatedProjects from "../../components/relatedProjects/index"

class MinaAndJack extends Component {
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

  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf
    const { paused, volume } = this.state

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
                  <div
                    className=" col-lg-12"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                    data-aos-offset="350"
                  >
                    <Img
                      fluid={pageAcf.sone_image.localFile.childImageSharp.fluid}
                      alt={`Illustration from London Calling project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="section__two">
              <div className="container container__custom">
                <div className="row">
                  <div
                    className=" col-lg-12 video__wrapper"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                    <Vimeo
                      video={pageAcf.vimeo_id}
                      volume={volume}
                      paused={paused}
                      onPause={this.handlePlayerPause}
                      onPlay={this.handlePlayerPlay}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="section__three">
              <div className="container container__custom">
                <div className="row">
                  <div
                    className=" col-xs-12 col-sm-12 col-md-12 col-lg-3 copy"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.stwo_copy }}
                    />
                  </div>
                  {pageAcf.stwo_images.map((image, index) => (
                    <div
                      className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 section__three__image-${index}`}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <Img
                        fluid={image.image.localFile.childImageSharp.fluid}
                        alt={`Illustration from London Calling project`}
                        tabIndex={-1}
                      />
                    </div>
                  ))}
                </div>
                <div className="row gallery">
                  {pageAcf.stwo_gallery.map((image, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                      className={`col-xs-12 col-sm-12 
                                ${
                                  index === 0 || index === 1
                                    ? "col-md-6 col-lg-6"
                                    : ""
                                } 
                                ${index >= 2 ? "col-md-12 col-lg-12" : ""}
                                section__three__image-${index}
                            
                            `}
                    >
                      <img
                        src={image}
                        alt="London Calling Project illustration"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="section-four">
              <div className="container container__custom">
                <row>
                  <div
                    className="no__padding col-lg-12 copy"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.sthree_copy }}
                    />
                  </div>
                </row>
                <div className="row gallery">
                  {pageAcf.sthree_images.map((image, index) => (
                    <div
                      className=" col-lg-12 "
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <Img
                        fluid={image.images.localFile.childImageSharp.fluid}
                        alt={`Illustration from London Calling project`}
                        tabIndex={-1}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="includes__separator" id="section__five">
              <div className="container container__custom">
                <div className="row section__three__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image ">
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
                          __html: pageAcf.sfour_about,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section__six">
              <div className="container container__custom">
                <div className="row gallery">
                  {pageAcf.sfive_gallery.map((image, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                      className={`no__padding col-xs-12 col-sm-12 
                                ${
                                  index === 1 || index === 2
                                    ? "col-md-6 col-lg-6"
                                    : ""
                                } 
                                section__three__image-${index}
                            
                            `}
                    >
                      <img
                        src={image}
                        alt="London Calling Project illustration"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="section__seven">
              <div className="container container__custom">
                <div className="row two__columns">
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-6 image no__padding "
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                    data-aos-offset="350"
                  >
                    <Img
                      fluid={pageAcf.ssix_image.localFile.childImageSharp.fluid}
                      alt={`Illustration from London Calling project`}
                      tabIndex={-1}
                    />
                  </div>
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-6 copy no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`160`}
                    data-aos-duration="1200"
                  >
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.ssix_copy }}
                    />
                  </div>
                </div>
                <div className="row end__image">
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-12  no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`200`}
                    data-aos-duration="1200"
                    data-aos-offset="350"
                  >
                    <Img
                      fluid={pageAcf.ssix_image.localFile.childImageSharp.fluid}
                      alt={`Illustration from London Calling project`}
                      tabIndex={-1}
                    />
                  </div>
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
  query LondonCallingPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 61 } }) {
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
            sone_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            vimeo_id
            stwo_copy
            stwo_images {
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
            stwo_gallery
            sthree_copy
            sthree_images {
              images {
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
            sfour_about
            sfive_gallery
            ssix_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            ssix_copy
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
