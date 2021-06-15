import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import "../../layouts/pages/projects/sambazon.css"
import Vimeo from "@u-wave/react-vimeo"
import RelatedProjects from "../../components/relatedProjects/index"

class Sambazon extends Component {
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
    document
      .querySelectorAll(".video__poster")[0]
      .classList.remove("fade__out__video")
    this.setState({ paused: true })
  }

  handlePlayerPlay() {
    document
      .querySelectorAll(".video__poster")[0]
      .classList.add("fade__out__video")
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
        <div className="project__template sambazon">
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
            theme={`${pageAcf.project_background} `}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <div className="single__project" id="single__one">
              <div className="container container__custom">
                <div className={`row`}>
                  {pageAcf.sambazon_sone_gallery.map((image, index) => (
                    <img
                      src={image}
                      className="row__one__col"
                      alt="Sambazon Project Illustration"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="450"
                    />
                  ))}
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding simple__copy">
                    {pageAcf.sambazon_vimeo_id ? (
                      <div
                        className="iframe__video__wrapper"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`190`}
                        data-aos-duration="1200"
                      >
                        <div className="the__video" onClick={this.playVideo}>
                          <div
                            className="video__poster"
                            onPause={this.handlePlayerPause}
                            onPlay={this.handlePlayerPlay}
                          ></div>

                          <Vimeo
                            video={pageAcf.sambazon_vimeo_id}
                            volume={volume}
                            paused={paused}
                            onPause={this.handlePlayerPause}
                            onPlay={this.handlePlayerPlay}
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
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
                          __html: pageAcf.sambazon_about,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row second__gallery">
                  {pageAcf.sambazon_stwo_gallery.map((image, index) => (
                    <>
                      {index === 0 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-6 col-lg-6`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
                      {index === 1 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-6 col-lg-6`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
                      {index === 2 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-12 col-lg-12`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
                      {index === 3 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-12 col-lg-12`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
                      {index === 4 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-6 col-lg-6`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                          <div
                            className={`custom__column no__padding col-xs-12 col-sm-12 col-md-6 col-lg-6 copy d-flex `}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <div
                              className="simple__copy sm__font reg__font"
                              dangerouslySetInnerHTML={{
                                __html: pageAcf.sambazon_gallery_copy,
                              }}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
                      {index === 5 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-xs-12 col-sm-12 col-md-6 col-lg-6 copy d-flex align-items-center`}
                          ></div>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-6 col-lg-6`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
                      {index === 6 ? (
                        <>
                          <div
                            className={`custom__column no__padding col-two-${index} col-xs-12 col-sm-12 col-md-12 col-lg-12`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <img
                              src={image}
                              alt="Sambazon Project Illustration"
                              key={index}
                            />
                          </div>
                        </>
                      ) : (
                        " "
                      )}
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
export default Sambazon

export const pageQuery = graphql`
  query SambazonPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 1077 } }) {
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
            sambazon_sone_gallery
            sambazon_vimeo_id
            sambazon_about
            sambazon_stwo_gallery
            sambazon_gallery_copy
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
