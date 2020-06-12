import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/ultra.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class Ultra extends Component {
 constructor(props) {
  super(props);

    this.state = {
      videoIndex: 0,
      volume: 1,
      paused: false,
    };

    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
  }
 
  selectVideo(index) {
    this.setState({ videoIndex: index });
  }

  handlePause(event) {
    this.setState({
      paused: event.target.checked,
    });
  }

  handlePlayerPause() {
    this.setState({ paused: true });
  }

  handlePlayerPlay() {
    this.setState({ paused: false });
  }

  handleVolume(event) {
    this.setState({
      volume: parseFloat(event.target.value),
    });
  }

  componentDidMount(){
    //document.querySelectorAll(".floating__web__info")[1].classList.add("mix__blend__screen");
  }

   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;
    const {  paused, volume } = this.state;

    return ( 
      <Layout>
        <div className="project__template ultra">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
            <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
            <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
          </Helmet>

          <ProjectHero 
            title={pageAcf.frontend_title}
            clientName={pageAcf.client}
            projectInfo={pageData.content}
            projectFocus={pageAcf.project_focus}
            projectThumbnail={pageAcf.featured_image}
            theme={`${pageAcf.project_background} ultra`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                <div className="row one">
                {
                  pageAcf.ultra_sone_grid.map((element, index) => 
                   <>
                   {
                     index === 0
                     ?
                      <>
                          <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 copy hidden-${index} no__padding`}
                                                 data-aos="fade-up"
                                                 data-aos-easing="ease-in-back"
                                                 data-aos-delay={`120`}
                                                 data-aos-duration="1200"
                                                 data-aos-offset="300"
                          >
                            <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                          {
                            element.image
                            ? 
                              <>
                                <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 image hidden-${index} no__padding`}
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay={`220`}
                                  data-aos-duration="1200"
                                  data-aos-offset="300"
                                >
                                {
                                  element.image.localFile.childImageSharp !== null
                                  ?
                                  <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                                  : 
                                  <img src={element.image.localFile.url} alt={`Illustration from Ultra`} tabIndex={-1} />
                                }
                                </div>
                              </>
                            : ""
                          }

                          {
                            element.vimeo_id
                            ?
                              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`} 
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`120`}
                              data-aos-duration="1200"
                              data-aos-offset="300"
                              >
                              <Vimeo
                                video={element.vimeo_id}

                                volume={volume}
                                paused={paused}
                                onPause={this.handlePlayerPause}
                                onPlay={this.handlePlayerPlay}
                              />
                              </div>
                            :""
                          }
                      </>
                     : ""
                   }
                   {
                     index === 1
                     ?
                      <>
                          <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 copy hidden-${index} no__padding`}
                          
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`120`}
                          data-aos-duration="1200"
                          data-aos-offset="300"
                          >
                            <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                          {
                            element.image
                            ? 
                              <>
                                <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 image hidden-${index} no__padding`}
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay={`220`}
                                  data-aos-duration="1200"
                                  data-aos-offset="300"
                                >
                                {
                                  element.image.localFile.childImageSharp !== null
                                  ?
                                  <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                                  : 
                                  <img src={element.image.localFile.url} alt={`Illustration from Ultra`} tabIndex={-1} />
                                }
                                </div>
                              </>
                            : ""
                          }

                          {
                            element.vimeo_id
                            ?
                              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`} 
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`120`}
                              data-aos-duration="1200"
                              data-aos-offset="300"
                              >
                              <Vimeo
                                video={element.vimeo_id}

                                volume={volume}
                                paused={paused}
                                onPause={this.handlePlayerPause}
                                onPlay={this.handlePlayerPlay}
                              />
                              </div>
                            :""
                          }
                      </>
                     : ""
                   }
                   {
                     index === 2
                     ?
                      <>
                          <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 copy  hidden-${index} no__padding`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="300"
                          >
                            <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                          {
                            element.image
                            ? 
                              <>
                                <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12  image-${index} image hidden-${index} no__padding`}
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay={`220`}
                                  data-aos-duration="1200"
                                  data-aos-offset="300"
                                >
                                {
                                  element.image.localFile.childImageSharp !== null
                                  ?
                                  <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                                  : 
                                  <img src={element.image.localFile.url} alt={`Illustration from Ultra`} tabIndex={-1} />
                                }
                                </div>
                              </>
                            : ""
                          }

                          {
                            element.vimeo_id
                            ?
                              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`} 
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`120`}
                              data-aos-duration="1200"
                              data-aos-offset="300"
                              >
                              <Vimeo
                                video={element.vimeo_id}

                                volume={volume}
                                paused={paused}
                                onPause={this.handlePlayerPause}
                                onPlay={this.handlePlayerPlay}
                              />
                              </div>
                            :""
                          }
                      </>
                     : ""
                   }
                   {
                     index === 3
                     ?
                      <>
                          <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-112 copy hidden-${index} d-flex justify-content-end no__padding`}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="300"
                          >
                            <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                            />
                          </div>
                          {
                            element.image
                            ? 
                              <>
                                <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 mix-multiply image hidden-${index} no__padding`}
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay={`220`}
                                  data-aos-duration="1200"
                                  data-aos-offset="300"
                                >
                                {
                                  element.image.localFile.childImageSharp !== null
                                  ?
                                  <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                                  : 
                                  <img src={element.image.localFile.url} alt={`Illustration from Ultra`} tabIndex={-1} />
                                }
                                </div>
                              </>
                            : ""
                          }

                          {
                            element.vimeo_id
                            ?
                              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 video no__padding hidden-${index}`} 
                              
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`120`}
                              data-aos-duration="1200"
                              data-aos-offset="300"
                              >
                              <Vimeo
                                video={element.vimeo_id}

                                volume={volume}
                                paused={paused}
                                onPause={this.handlePlayerPause}
                                onPlay={this.handlePlayerPlay}
                              />
                              </div>
                            :""
                          }
                      </>
                     : ""
                   }
                   </>
                  )
                }
                </div>
              </div>
            </section>
            <section className="includes__separator ultra" id="section__two">
              <div className="container container__custom">
                <div className="row section__two__about">
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
                          dangerouslySetInnerHTML={{ __html: pageAcf.ultra_sone_about }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row two">
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 image no__padding"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="300"
                  >
                    <Img fluid={pageAcf.ultra_two_image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy "
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`160`}
                                        data-aos-duration="1200"
                                        data-aos-offset="300"
                  >
                    <div
                    className="simple__copy sm__font reg__font"
                    dangerouslySetInnerHTML={{ __html: pageAcf.ultra_two_copy }}
                    />
                  </div>
                  {
                    pageAcf.ultra_two_gallery.map((element, index) => 
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`220`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                      >
                        <img src={element} alt="Illustration from Ultra"/>
                      </div>
                    )
                  }
                </div>
              </div>
            </section> 
            <section id="section__three">
              <div className="container container__custom">
                <div className="row">
                  {
                    pageAcf.ultra_three_grid.map((element, index) => 
                      <>
                      {
                        index === 0 
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image no__padding"
                                                data-aos="fade-up"
                                                data-aos-easing="ease-in-back"
                                                data-aos-delay={`120`}
                                                data-aos-duration="1200"
                                                data-aos-offset="300"
                        >
                          <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy "
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`220`}
                                data-aos-duration="1200"
                                data-aos-offset="300"
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        </>
                        :""
                      }
                      {
                        index === 1
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 left copy no__padding"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`120`}
                                data-aos-duration="1200"
                                data-aos-offset="300"
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image no__padding"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`220`}
                                data-aos-duration="1200"
                                data-aos-offset="300"
                        >
                          <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                        </div>
                        </>
                        :""
                      }
                      {
                        index === 2 
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding mix-multiply"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`120`}
                                data-aos-duration="1200"
                                data-aos-offset="300"
                        >
                          {
                            element.image.localFile.childImageSharp !== null
                            ?
                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                            : 
                            <img src={element.image.localFile.url} alt={`Illustration from Ultra`} tabIndex={-1} />
                          }
                  
                        </div>
                        </>
                        :""
                      }
                      {
                        index === 3 
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__top d-flex justify-content-end "
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`120`}
                                data-aos-duration="1200"
                                data-aos-offset="300"
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`220`}
                                data-aos-duration="1200"
                                data-aos-offset="300"
                        >
                          <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                        </div>
                        </>
                        :""
                      }
                      {
                        index === 4 
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy left d-flex no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9  d-flex no__padding">

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image floating__image no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`220`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                        >
                          <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                        </div>

                        </>
                        :""
                      }
                      {
                        index === 5 
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image "
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                        >
                          <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`220`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        </>
                        :""
                      }
                      {
                        index === 6 
                        ?
                        <>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 copy left no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                        >
                          <div
                            className="simple__copy sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: element.copy }}
                          />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 image no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`220`}
                        data-aos-duration="1200"
                        data-aos-offset="300"
                        >
                          <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Illustration from Ultra`} tabIndex={-1}/>
                        </div>
                        </>
                        :""
                      }
                      </>
                    )
                  }
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
export default Ultra

export const pageQuery = graphql`
query UltraPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 60}}) {
      edges {
        node {
          id
          title
          content
          acf {
            related_extra_copy
            related_project
            related_project_thumbnail {
                localFile{
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
            ultra_sone_grid{
                image{
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
            ultra_sone_about
            ultra_two_image{
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 1300, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }
            ultra_two_copy
            ultra_two_gallery
            ultra_three_grid{
                image{
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
