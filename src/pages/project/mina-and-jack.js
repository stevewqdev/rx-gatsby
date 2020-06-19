import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/mina-and-jack.css"
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
        <div className="project__template ">
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
            theme={pageAcf.project_background}
          ></ProjectHero>
          <div className="main__section__wrapper">
            <section id="two" className="section__one contrast_02">
              <div className="container container__custom ">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding simple__copy">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      className="sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.sone_copy }}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="three" className="section__two contrast_02">
              <div className="container container__custom">
                <div className="row">
                  {pageAcf.images.map((image, index) => (
                    <div
                      className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gallery no__padding"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <img
                        src={image}
                        alt="Illustration from Mina&Jack project"
                      />
                    </div>
                  ))}

                  <div
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding full__width__image section__two__gif"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`150`}
                    data-aos-duration="1200"
                  >
                    <img
                      src={pageAcf.stwo_gif.localFile.url}
                      alt="Illustration from Mina&Jack project"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding  section__two__copy">
                    <div
                      className="sm__font reg__font simple__copy"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`170`}
                      data-aos-duration="1200"
                      dangerouslySetInnerHTML={{ __html: pageAcf.stwo_copy }}
                    />
                  </div>
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`190`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={
                        pageAcf.stwo_mainimage.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Mina & Jack project`}
                      tabIndex={-1}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding  section__two__copy inverse">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      className="sm__font reg__font simple__copy"
                      dangerouslySetInnerHTML={{
                        __html: pageAcf.stwo_copy_second,
                      }}
                    />
                  </div>
                  <div
                    className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding full__width__image section__two__gif"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`150`}
                    data-aos-duration="1200"
                  >
                    <img
                      src={pageAcf.stwo_gif_second.localFile.url}
                      alt="Illustration from Mina&Jack project"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div
              className="section__three contrast_02 includes__separator"
              id="four"
            >
              <div className="container container__custom">
                <div className="row section__three__about">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding">
                    <div className="separator --black"></div>
                    <h1
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      className="xxl__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.about }}
                    />
                  </div>
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding section__three__about__image"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`190`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={
                        pageAcf.about_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Mina & Jack project`}
                      tabIndex={-1}
                    />
                  </div>
                </div>
              </div>
            </div>

            <section id="five" className="section__five contrast_02">
              <div className="container container__custom ">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding simple__copy">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      className="video__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.video_copy }}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding simple__copy">
                    {pageAcf.video_iframe ? (
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
                            video={pageAcf.video_iframe}
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
            </section>

            <section id="six" className="section__six contrast_02">
              <div className="container container__custom">
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-12 col-md-7 col-lg-9 no__padding full__width__image section__two__gif top__content__section"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={pageAcf.ssix_image.localFile.childImageSharp.fluid}
                      alt={`Illustration from Mina & Jack project`}
                      tabIndex={-1}
                    />
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 no__padding  section__two__copy copy__on__top ">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`150`}
                      data-aos-duration="1200"
                      className="sm__font reg__font simple__copy"
                      dangerouslySetInnerHTML={{ __html: pageAcf.ssix_copy }}
                    />
                  </div>

                  {pageAcf.ssix_gallery.map((image, index) => (
                    <div
                      className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gallery no__padding full__width__image four__square__gallery"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <img
                        src={image}
                        alt="Illustration from Mina&Jack project"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="seven" className="section__seven contrast_02">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 no__padding  section__two__copy inverse copy__on__top">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      className="sm__font reg__font simple__copy"
                      dangerouslySetInnerHTML={{ __html: pageAcf.sseven_copy }}
                    />
                  </div>

                  <div
                    className="col-xs-12 col-sm-12 col-md-7 col-lg-9 no__padding full__width__image section__two__gif top__content__section"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`150`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={
                        pageAcf.sseven_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Mina & Jack project`}
                      tabIndex={-1}
                    />
                  </div>
                  {pageAcf.sseven_gallery.map((image, index) => (
                    <div
                      className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gallery no__padding full__width__image four__square__gallery"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <img
                        src={image}
                        alt="Illustration from Mina&Jack project"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="eight" className="section__eight contrast_02">
              <div className="container container__custom">
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-12 col-md-7 col-lg-9 no__padding full__width__image section__two__gif top__content__section"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={
                        pageAcf.seight_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Mina & Jack project`}
                      tabIndex={-1}
                    />
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 no__padding  section__two__copy copy__on__top ">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`150`}
                      data-aos-duration="1200"
                      className="sm__font reg__font simple__copy"
                      dangerouslySetInnerHTML={{ __html: pageAcf.seight_copy }}
                    />
                  </div>

                  {pageAcf.seight_gallery.map((image, index) => (
                    <div
                      className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gallery no__padding full__width__image four__square__gallery"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <img
                        src={image}
                        alt="Illustration from Mina&Jack project"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="nine" className="section__nine contrast_02">
              <div className="container container__custom">
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-12 section__nine__floating__wrapper no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                    <Img
                      fluid={
                        pageAcf.snine_image.localFile.childImageSharp.fluid
                      }
                      alt={`Illustration from Mina & Jack project`}
                      tabIndex={-1}
                    />
                    <div className="section__nine__floating__text">
                      <div
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`150`}
                        data-aos-duration="1200"
                        className="sm__font reg__font simple__copy"
                        dangerouslySetInnerHTML={{ __html: pageAcf.snine_copy }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ten" className="section__ten contrast_02">
              <div className="container container__custom">
                <div className="row">
                  {pageAcf.snine_gallery.map((image, index) => (
                    <div
                      className="col-xs-12 col-sm-12 col-md-12 col-lg-12 gallery no__padding full__width__image four__square__gallery"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <img
                        src={image}
                        alt="Illustration from Mina&Jack project"
                      />
                    </div>
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
export default MinaAndJack

export const pageQuery = graphql`
  query MinaAndJackPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 289 } }) {
      edges {
        node {
          id
          title
          content
          acf {
            about
            about_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            related_extra_copy
            related_project
            related_project_url
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
            client
            project_background
            project_focus
            seight_copy
            seight_gallery
            seight_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            snine_copy
            snine_gallery
            sone_copy
            sseven_copy
            sseven_gallery
            ssix_copy
            ssix_gallery
            stwo_copy
            stwo_copy_second
            subtitle
            frontend_title
            video_copy
            video_iframe
            video_iframe_poster {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
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
            images
            snine_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            sseven_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
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
            stwo_gif {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            stwo_gif_second {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            stwo_mainimage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1300, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            video_iframe_poster {
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
