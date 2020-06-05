import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/awake.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class Awake extends Component {
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
    const { videoIndex, paused, volume } = this.state;

    return ( 
      <Layout>
        <div className="project__template awake">
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
            theme={`${pageAcf.project_background} awake`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
              <div className="container container__custom">
                <div className="row one">
                  <div className="col-lg-12 no__padding copy">
                      <div
                        className="simple__copy sm__font reg__font"
                        dangerouslySetInnerHTML={{ __html: pageAcf.awake_sone_copy }}
                      />
                  </div>
                  {
                    pageAcf.awake_sone_gallery.map((element, index) =>
                      <div  key={index}
                        className={`
                        col-xs-12 col-sm-12 col-md-12 no__padding
                        ${index === 0 ? "col-lg-6" : ""}
                        ${index === 1 ? "col-lg-6" : ""}
                        ${index === 2 ? "col-lg-12 bottom__image" : ""}
                        `}>
                        <img src={element} alt="Awake Image"/>
                      </div>
                    )
                  }

                </div>
                <div className="row two">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 copy no__padding"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`120`}
                    data-aos-duration="1200"
                  >
                      <div
                        className="simple__copy sm__font reg__font"
                        dangerouslySetInnerHTML={{ __html: pageAcf.awake_stwo_copy }}
                      />
                  </div>
                  {
                    pageAcf.awake_stwo_gallery.map((element, index) =>
                      <div key={index}
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        className={`
                        col-xs-12 col-sm-12 col-md-12 no__padding image
                        ${index === 0 ? "col-lg-6" : ""}
                        ${index > 0 ? "col-lg-12" : ""}
                        `}>
                        <img src={element} alt="Awake Image"/>
                      </div>
                    )
                  }

                </div>
              </div>
            </section>

            <section className="includes__separator awake" id="section__two">
              <div className="container container__custom">
                <div className="row section__two__about">
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
                          dangerouslySetInnerHTML={{ __html: pageAcf.awake_stwo_about }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="section__three">
              <div className="container container__custom">
                  {
                    pageAcf.awake_sthree_gallery.map((element, index) =>
                    <div className="row" key={index}>
                      {
                        index === 0
                        ?
                        <div 
                        className={`
                          col-xs-12 col-sm-12 col-md-12 no__padding image image__top`}
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`120`}
                          data-aos-duration="1200"
                          
                          >
                          <img src={element} alt="Awake Image"/>
                        </div>
                        :""
                      }
                      {
                        index === 1
                        ?
                        <div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 "></div>
                        <div 
                        className={`
                          col-xs-12 col-sm-12 col-md-12 col-lg-9 no__padding image`}
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`120`}
                          data-aos-duration="1200"
                        >
                          <img src={element} alt="Awake Image"/>
                        </div>
                        </div>
                        :""
                      }
                      {
                        index > 1
                        ?
                        <div 
                        className={`
                          col-xs-12 col-sm-12 col-md-12 no__padding image`}
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`120`}
                          data-aos-duration="1200"
                        >
                          <img src={element} alt="Awake Image"/>
                        </div>
                        :""
                      }
                    </div>

                    )
                  }
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
export default Awake

export const pageQuery = graphql`
query AwakePageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 683}}) {
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
                    fluid(maxWidth: 2000, quality: 100) {
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
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }           
            project_background
            awake_sone_copy
            awake_sone_gallery
            awake_stwo_copy
            awake_stwo_gallery
            awake_stwo_about
            awake_sthree_gallery
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
