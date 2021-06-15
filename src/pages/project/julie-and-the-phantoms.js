import React, { Component } from "react"
import Layout from "../../layouts/index"
import axios from "axios"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import "../../layouts/pages/projects/jatp.css"
// import Vimeo from "@u-wave/react-vimeo"
// import Loading from "../../components/loading"
import RelatedProjects from "../../components/relatedProjects/index"

export default class JATP extends Component {
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

  getData() {
    const url = "https://rx.raxo.dev/wp-json/wp/v2/projects/1893"

    axios
      .get(url)
      .then(({ data }) => {
        this.setState(
          {
            data,
          },
          () => {
            console.log(this.state.data)
          }
        )
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidMount() {
    //document.querySelectorAll(".floating__web__info")[1].classList.add("mix__blend__screen");
    this.getData()
  }

  render() {
    const { paused, volume, data } = this.state

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Julie And The Phantoms: A Netflix Original - Raxo </title>
        </Helmet>
        <div className="project__template jatp">
          <ProjectHero
            title={data.acf.frontend_title}
            clientName={data.acf.client}
            projectInfo={data.content.rendered}
            projectFocus={data.acf.project_focus}
            projectThumbnail={data.acf.featured_image}
            theme={`${data.acf.project_background} jatp`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                <div className="row one">
                  <div className="col-lg-12 copy no__padding">
                    <div
                      className="simple__copy sm__font reg__font"
                      dangerouslySetInnerHTML={{
                        __html: data.acf.jatp_sone_copy,
                      }}
                    />
                  </div>
                  <div className="col-lg-12 image no__padding">
                    <img
                      src={data.acf.jatp_sone_image}
                      alt={`Illustration from jatp project`}
                      tabIndex={-1}
                      loading="lazy"
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
                          __html: data.acf.jatp_sone_about,
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
                  {data.acf.jatp_stwo_grid.map((element, index) => (
                    <>
                      {index !== 0 && index % 2 === 0 ? (
                        <>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 copy hidden-${index}`}
                          >
                            <div
                              className="simple__copy sm__font reg__font"
                              dangerouslySetInnerHTML={{
                                __html: element.copy,
                              }}
                            />
                          </div>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-9 image hidden-${index} no__padding`}
                          >
                            <img
                              src={element.main_image}
                              alt={`Illustration from jatp project`}
                              tabIndex={-1}
                              loading="lazy"
                            />
                          </div>

                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`}
                          >
                            {element.vimeo_id ? (
                              <a href={element.vimeo_id} target="_BLANK">
                                <div
                                  className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 image hidden-${index} no__padding`}
                                >
                                  <img
                                    src={element.video_image}
                                    alt={`Illustration from jatp project`}
                                    tabIndex={-1}
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 end__image no__padding">
                            {element.end_image ? (
                              <img
                                src={element.end_image}
                                alt={`Illustration from jatp project`}
                                tabIndex={-1}
                                loading="lazy"
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
                            <img
                              src={element.main_image}
                              alt={`Illustration from jatp project`}
                              tabIndex={-1}
                              loading="lazy"
                            />
                          </div>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-3 copy hidden-${index}`}
                          >
                            <div
                              className="simple__copy sm__font reg__font"
                              dangerouslySetInnerHTML={{
                                __html: element.copy,
                              }}
                            />
                          </div>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`}
                          >
                            {element.vimeo_id ? (
                              <a href={element.vimeo_id} target="_BLANK">
                                <div
                                  className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 image hidden-${index} no__padding`}
                                >
                                  <img
                                    src={element.video_image}
                                    alt={`Illustration from jatp project`}
                                    tabIndex={-1}
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 end__image no__padding">
                            {element.end_image ? (
                              <img
                                src={element.end_image}
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
              relatedcopy={data.acf.related_extra_copy}
              relatedproject={data.acf.related_project}
              relatedthumbnail={data.acf.related_project_thumbnail}
              relatedprojectlink={data.acf.related_project_url}
            ></RelatedProjects>
          </div>
        </div>
      </Layout>
    )
  }
}
