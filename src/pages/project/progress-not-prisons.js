import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/pnp.css"
import Vimeo from "@u-wave/react-vimeo"
import RelatedProjects from "../../components/relatedProjects/index"

class PNP extends Component {
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

    console.log(pageAcf);

    return (
      <Layout>
        <div className="project__template pnp">
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
            theme={`${pageAcf.project_background} PNP`}
          ></ProjectHero>

          <div className="main__section__wrapper">

            <section className="includes__separator pnp" >
                <div className="container container__custom">
                    <div className="row" id="section__one">
                        {pageAcf.pnp_section_one.map((element, index) => (
                            <>
                                {
                                    index === 0 
                                    ? 
                                    <>
                                        <div className="col-sm-12 col-md-12 col-lg-6 copy  d-flex align-items-start no__padding"
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`120`}
                                            data-aos-duration="1200"
                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div> 
                                        <div className="col-sm-12 col-md-12 col-lg-6 image no__padding">
                                        {element.image 
                                            ? 
                                                (
                                                    <Img
                                                        fluid={
                                                        element.image.localFile.childImageSharp
                                                            .fluid
                                                        }
                                                        alt={`Illustration from PNP project`}
                                                        tabIndex={-1}
                                                    />
                                                ) 
                                            : 
                                            (
                                                ""
                                            )
                                        }
                                        </div> 
                                        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index} `}>
                                            <Vimeo
                                                video={element.vimeo_id}
                                                volume={volume}
                                                paused={paused}
                                                onPause={this.handlePlayerPause}
                                                onPlay={this.handlePlayerPlay}
                                            />
                                              
                                        </div> 
                                    </>
                                    : ""
                                }
                                {
                                    index === 1
                                    ?
                                    <>
                                        <div className="col-sm-12 col-md-12 col-lg-12 image no__padding">
                                            {element.image 
                                                ? 
                                                    (
                                                        <Img
                                                            fluid={
                                                            element.image.localFile.childImageSharp
                                                                .fluid
                                                            }
                                                            alt={`Illustration from PNP project`}
                                                            tabIndex={-1}
                                                        />
                                                    ) 
                                                : 
                                                (
                                                    ""
                                                )
                                            }
                                        </div> 
                                    </>
                                    : ""
                                }
                            </>
                        ))}
                    </div>
                    
                    <div className="row section__two__about" id="section__two">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding">
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
                                __html: pageAcf.pnp_about
                                }}
                            />
                            </div>
                        </div>
                    </div>

                    <div className="row" id="section__three">
                        {pageAcf.pnp_section_one.map((element, index) => (
                            <>
                                {
                                    index === 2
                                    ?
                                    <>
                                        <div className={`col-sm-12 col-md-12 col-lg-12 image no__padding row-${index}`}>
                                            {element.image 
                                                ? 
                                                    (
                                                        <Img
                                                            fluid={
                                                            element.image.localFile.childImageSharp
                                                                .fluid
                                                            }
                                                            alt={`Illustration from PNP project`}
                                                            tabIndex={-1}
                                                        />
                                                    ) 
                                                : 
                                                (
                                                    ""
                                                )
                                            }
                                        </div> 
                                    </>
                                    : ""
                                }
                                {
                                    index === 3 
                                    ? 
                                    <>
                                        <div className={`col-sm-12 col-md-12 col-lg-6 image no__padding  row-${index}`}>
                                            {element.image 
                                                ? 
                                                    (
                                                        <Img
                                                            fluid={
                                                            element.image.localFile.childImageSharp
                                                                .fluid
                                                            }
                                                            alt={`Illustration from PNP project`}
                                                            tabIndex={-1}
                                                        />
                                                    ) 
                                                : 
                                                (
                                                    ""
                                                )
                                            }
                                        </div> 
                                        <div className="col-sm-12 col-md-12 col-lg-6 copy right  d-flex align-items-start no__padding"
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`120`}
                                            data-aos-duration="1200"
                                            data-aos-offset="450"
                                        >
                                            <div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div> 
                                    </>
                                    : ""
                                }
                                {
                                    index === 4
                                    ?
                                    <>
                                        <div className={`col-sm-12 col-md-12 col-lg-12 image no__padding row-${index}`}>
                                            {element.image 
                                                ? 
                                                    (
                                                        <Img
                                                            fluid={
                                                            element.image.localFile.childImageSharp
                                                                .fluid
                                                            }
                                                            alt={`Illustration from PNP project`}
                                                            tabIndex={-1}
                                                        />
                                                    ) 
                                                : 
                                                (
                                                    ""
                                                )
                                            }
                                        </div> 
                                    </>
                                    : ""
                                }
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
export default PNP

export const pageQuery = graphql`
  query PNPPageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 1942 } }) {
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
            pnp_about
            pnp_section_one {
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
              vimeo_id
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
