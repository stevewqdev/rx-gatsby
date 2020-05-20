import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/humanified.css"
import "../../layouts/pages/projects/engineshop.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class MinaAndJack extends Component {
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
    console.log(pageAcf);
    return ( 
      <Layout>
        <div className="project__template ">
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
            theme={`${pageAcf.project_background} engineshop`}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one" className="grid engineshop">
                <div className="container container__custom">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 no__padding left">
                            {
                                pageAcf.grid_one.map((element, index) => 
                                    <div key={index}>
                                        <div className="image"
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`120`}
                                            data-aos-duration="1200"
                                            
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                        <div className="grid__info">
                                            <div className="grid__first__text">
                                                <p className="md__font bold__font"
                                                    data-aos="fade-up"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay={`140`}
                                                    data-aos-duration="1200"
                                                    
                                                >
                                                    {element.first_text}
                                                </p>
                                            </div>
                                            <div className="grid__first__text">
                                                <p className="md__font bold__font"
                                                    data-aos="fade-up"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay={`160`}
                                                    data-aos-duration="1200"
                                                >
                                                    {element.second_text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 no__padding">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 no__padding">
                            
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 no__padding left">
                            {
                                pageAcf.grid_two.map((element, index) => 
                                    <div key={index}>
                                        <div className="image"
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`120`}
                                            data-aos-duration="1200"
                                            
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                        <div className="grid__info">
                                            <div className="grid__first__text">
                                                <p className="md__font bold__font"
                                                    data-aos="fade-up"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay={`140`}
                                                    data-aos-duration="1200"
                                                    
                                                >
                                                    {element.first_text}
                                                </p>
                                            </div>
                                            <div className="grid__first__text">
                                                <p className="md__font bold__font"
                                                    data-aos="fade-up"
                                                    data-aos-easing="ease-in-back"
                                                    data-aos-delay={`160`}
                                                    data-aos-duration="1200"
                                                >
                                                    {element.second_text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <div className="row grid three">
                        <div className="col-lg-12 no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        >
                            <Img fluid={pageAcf.grid_three.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                        </div>
                    </div>
                    <div className="row grid four">
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 no__padding"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`120`}
                        data-aos-duration="1200"
                        >
                            <Img fluid={pageAcf.grid_four.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 no__padding"></div>
                    </div>
                </div>
            </section>
            
            <section id="section__four" className="engineshop">
              <div className="container container__custom">
                  <div className="row one">
                      <div className="col-lg-12"
                      
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`150`}
                      data-aos-duration="1200"
                      >
                        <Img fluid={pageAcf.sthree_image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                      </div>
                  </div>
                  <div className="row gallery">
                    {
                        pageAcf.engine_sthree_gallery.map((image,index) => 
                        <>
                        {
                            index === 0
                            ?   <>
                                <div 
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`${(index + 1) * 100}`}
                                data-aos-duration="1200"
                                className={
                                    `no__padding section__four__item col-xs-12 col-sm-12 col-md-9 col-lg-9
                                    section__four__image-${index}
                                
                                `}>
                                    <Img fluid={image.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                </div>
                                <div className="col-xs-12 col-md-3"></div>
                                </>
                            :""
                        }
                        {
                            index === 1
                            ?   <>
                                <div className="col-xs-12 col-md-3"></div>
                                <div 
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`${(index + 1) * 100}`}
                                data-aos-duration="1200"
                                className={
                                    `no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                    section__four__image-${index}
                                
                                `}>
                                    <Img fluid={image.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                </div>
                                
                                </>
                            :""
                        }
                        {
                            index === 2
                            ?   <>
                                
                                <div 
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`${(index + 1) * 100}`}
                                data-aos-duration="1200"
                                className={
                                    `no__padding col-xs-12 col-sm-12 col-md-9 col-lg-9
                                    section__four__image-${index}
                                
                                `}>
                                    <Img fluid={image.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                </div>
                                <div className="col-xs-12 col-md-3"></div>
                                </>
                            :""
                        }
                        </>
                        )
                    }
                </div>
              </div>
          </section>

            <section className="includes__separator humanified" id="section__two">
                <div className="container container__custom">
                <div className="row section__three__about">
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
                            dangerouslySetInnerHTML={{ __html: pageAcf.about }}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>

          <section id="section__three " className="uneven__grid engineshop">
              <div className="container container__custom">
                  <div className="row">
                      <div className="floating col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`150`}
                      data-aos-duration="1200"
                      >
                        <Img fluid={pageAcf.about_image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                      </div>
                  </div>
                  <div className="row one engine">
                      {
                        pageAcf.about_grid_one.map((element,index) => 
                            <>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 image no__padding"
                                                               data-aos="fade-up"
                                                               data-aos-easing="ease-in-back"
                                                               data-aos-delay={`${(index + 1) * 100}`}
                                                               data-aos-duration="1200"
                                >
                                    <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 copy no__padding"
                                
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
                        )
                      }
                  </div>
                  <div className="row two">
                      {
                        pageAcf.about_grid_two.map((element,index) => 
                            <>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 image no__padding"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`${(index + 1) * 100}`}
                                    data-aos-duration="1200"
                                >
                                    <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 copy no__padding"
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
                        )
                      }
                  </div>
                  <div className="row three">
                      {
                        pageAcf.about_grid_three.map((element,index) => 
                            <>
                                 <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 no__padding"></div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 image no__padding"
                                
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay={`${(index + 1) * 100}`}
                                data-aos-duration="1200"
                                >
                                    <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 copy no__padding"
                                
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
export default MinaAndJack

export const pageQuery = graphql`
query EngineShopPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 598}}) {
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
            grid_one{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                        url
                    }
                }
                first_text
                second_text
            }
            grid_two{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                        url
                    }
                }
                first_text
                second_text
            }
            grid_three{
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }
            grid_four{
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }
            about
            about_image{
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }
            about_grid_one{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                        url
                    }
                }
                copy
            }
            about_grid_two{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                        url
                    }
                }
                copy
            }
            about_grid_three{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                        url
                    }
                }
                copy
            }
            sthree_image{
                localFile {
                    childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                    url
                }
            }
            engine_sthree_gallery{
                image{
                    localFile {
                        childImageSharp {
                        fluid(maxWidth: 2000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                    }
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
