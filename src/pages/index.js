import React, { Component } from "react"
import Layout from "../layouts/index"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import About from "../components/about/index"
import {Helmet} from "react-helmet";
import Parallax from 'parallax-js'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {isMobile: false};
  }

  playVideo(event){
    if (!event.target.paused) {
      if (window.innerWidth < 500) {
        event.target.pause();
      }
    } else{
      document.querySelectorAll(".poster__animated")[0].classList.add("hidden");
      if (window.innerWidth < 500) {
        event.target.play();
      }
    }
  }

  activeProject(event){
    Array.from(document.querySelectorAll(".the__project")).map(element => {
      element.classList.remove("active")
    })
    event.target.classList.add("active")
  }
  unactiveProject(event){
    Array.from(document.querySelectorAll(".the__project")).map(element => {
      element.classList.remove("active")
    })
    event.target.classList.remove("active")

    if(document.querySelectorAll(".the__project.active").length === 0){
      document.querySelectorAll(".the__project")[0].classList.add("active");
    }
  }
  activeButton(event){
    event.target.children[0].classList.add("active");
  }
  unactiveButton(event){
    event.target.children[0].classList.remove("active");
  }
  projectRedirect(event){
    let redirectLink = event.target.getAttribute("datalink");
    setTimeout(function() {
      if(redirectLink === null){
        window.location.href = `/`;
      }else{
        window.location.href = redirectLink;
      }
    },10);
  }
  
  componentDidMount(){

    document.querySelectorAll(".footer")[0].classList.add("dark");
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      pointerEvents: false,
    });

    if (window.innerWidth < 500) {
      this.setState({
        isMobile: true,
      });
    }
    
    let aElements = [...document.querySelectorAll(".selected__projects__button__right a")]; 


    aElements.forEach(element => {
      element.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelectorAll(".page__wrapper")[0].classList.add("on-transition");

        let redirectLink = event.target.getAttribute("href");
        setTimeout(function() {
          if(redirectLink === null){
            window.location.href = `/`;
          }else{
            if(redirectLink.includes("facebook") || redirectLink.includes("twitter") || redirectLink.includes("instagram") || redirectLink.includes("behance") || redirectLink.includes("vimeo")){

            }else{
              window.location.href = `${event.target.getAttribute("href")}`;

            }
          }
        },10);
      })
    });
  }
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    const customStyle =
    `
    @media(max-width: 500px){
      html{
        position: relative;
        overflown: hidden!important;
      }

    }
    `
    ;

    return ( 
      <Layout>
        <Helmet>
          <style>{customStyle}</style>
          <meta charSet="utf-8" />
          <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
          <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
          <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
        </Helmet>
        
        <section id="one">
          <div className="row">
            

            
            {
              this.state.isMobile
              ?
              <div className="col-lg-12 raxo__rx__svg">
                <img src={pageAcf.fallback_image.source_url} alt={pageAcf.fallback_image.title}/>
              </div>
              : 
              <div className="col-lg-12">
                <div className="video__background" id="scene">
                  {
                    pageAcf.video_background
                    ?
                    
                    <video
                      data-depth="0.2"
                      autoPlay 
                      loop 
                      muted
                      
                      playsInline
                      className="mobile-hidden"
                      id="parallaxVideo"
                    >
                      <source src={pageAcf.video_background.source_url} type="video/mp4" />
                    </video>
                    :""
                  }
                </div>
              </div>
            }

          </div>
        </section>
        <div className="main__section__wrapper">
            <About></About>
            <section className="featured__video includes__separator">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-lg-12 no__padding">
                    <div className="separator --black "></div>
                  </div>
                  <div className="col-lg-12 no__padding featured__video__title">
                    <h2 
                    data-aos="fade-up"
                    data-aos-delay={`200`}
                    data-aos-duration="1200"
                    data-aos-offset="360"
                    data-aos-easing="ease-in-out"
                    
                    className={"xxl__font"}>{pageAcf.reel_title}</h2>
                    <br/>
                  </div>
                  <div className="col-lg-12 featured__video__wrapper no__padding">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 featured__video__copy no__padding">
                      <div
                        data-aos="fade-up"
                        data-aos-delay={`350`}
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="300"
                        className=""
                        dangerouslySetInnerHTML={{ __html: pageAcf.reel_copy }}
                      />
                      <br/>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 featured__video__source no__padding"
                    
                    data-aos="fade-up"
                    data-aos-delay={`500`}
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="300"
                    >
                      {
                        pageAcf.reel_video
                        ?
                        <>
                        <div className="video__home__wrapper">
                          <div className="poster__animated">
                            <img src={pageAcf.reel_video_poster.source_url} alt=""/>
                          </div>
                          <video
                            className="reel_video"
                            playsInline
                            controls
                            className="mobile-hidden"
                            onClick={this.playVideo}
                            onTouchStart={this.playVideo}
                          >
                            <source src={pageAcf.reel_video.source_url}  type="video/mp4" />
                          </video>
                        </div>
                        </>
                        :""
                      }
                    </div>
                    
                    <div className="svg share__project"
                      data-aos="fade-up"
                      data-aos-delay={`390`}
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="100"
                      >
                      <svg 

                      xmlns="http://www.w3.org/2000/svg" width="19.73" height="19.72" viewBox="0 0 19.73 19.72">
                        <g id="Grupo_76" data-name="Grupo 76" transform="translate(-336 -3038.156)">
                          <g id="Grupo_75" data-name="Grupo 75">
                            <g id="Grupo_74" data-name="Grupo 74">
                              <g id="Grupo_73" data-name="Grupo 73">
                                <path id="Trazado_39" data-name="Trazado 39" d="M355.73,3054.586a3.29,3.29,0,1,1-6.58,0,3.063,3.063,0,0,1,.15-.96l-7.35-3.68a3.29,3.29,0,1,1,0-3.86l7.35-3.68a3.126,3.126,0,0,1-.15-.97,3.284,3.284,0,1,1,.63,1.94l-7.35,3.67a3.212,3.212,0,0,1,0,1.94l7.35,3.67a3.287,3.287,0,0,1,5.95,1.93Z" fill="#050505"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="selected__projects includes__separator">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-lg-12 no__padding">
                    <div className="separator --black "></div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__info">
                    <div className="selected__projects__title">
                      <h2 
                      data-aos="fade-up"
                      data-aos-delay={`150`}
                      data-aos-duration="1200"
                      data-aos-anchor-placement="top"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="400"
                      className="lg__font">{pageAcf.sp_title}</h2>
                    </div>
                    <div className="selected__projects__copy">
                      
                      <div
                        data-aos="fade-up"
                        data-aos-delay={`200`}
                        data-aos-duration="1200"
                        data-aos-anchor-placement="top"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="400"
                        className=""
                        dangerouslySetInnerHTML={{ __html: pageAcf.sp_copy }}
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button__left"

                      ></div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button__right">
                        <Link to="/work"
                          onMouseEnter={this.activeButton}
                          onMouseLeave={this.unactiveButton}
                        >
                          <button className="btn btn-default sm__font reg__font"
                          data-aos="fade-up"
                          data-aos-delay={`175`}
                          data-aos-duration="1200"
                          data-aos-easing="ease-in-out"

                          >See More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row selected__projects__projects">
                    <div className="col-lg-12 no__padding">
                      <div className="row">
                        {
                          pageAcf.sp_projects.map((project, index) => 
                            <div key={index} className="col-xs-6 col-sm-6 col-md-6 col-lg-6 no__padding selected__projects__projects --project">
                              <div className="row">
                                <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding selected__projects__projects__left the__project ${index === 0 ? "active" : ""}`} onMouseEnter={this.activeProject} onMouseLeave={this.unactiveProject} onClick={this.projectRedirect} datalink={`/project/${project.post_name.toLowerCase()}`}>
                                  
                                  <div className="selected__projects__projects__left__img">
                                    {
                                      project.acf.thumbnail_image.localFile !== null
                                      ?
                                        <img 
                                        data-aos="fade-up"
                                        data-aos-delay={`100`}
                                        data-aos-duration="1200"
                                        
                                        data-aos-easing="ease-in-out"
                                        
                                        src={`${project.acf.thumbnail_image.localFile.url}`} alt={`${project.post_name}`}/>
                                      : ""
                                    }
                                  </div>
                                  <div className="selected__projects__projects__left__copy">
                                    <div
                                      data-aos="fade-up"
                                      data-aos-delay={`200`}
                                      data-aos-duration="1200"
                                      
                                      data-aos-easing="ease-in-out"
                                      
                                      className=""
                                      dangerouslySetInnerHTML={{ __html: project.post_content.substring(0,120) + "..."  }}
                                    />
                                  </div>
                                  <div className="no__padding selected__projects__projects__right">
                                    <div className="selected__projects__projects__right__title">
                                      <p
                                        data-aos="fade-up"
                                        data-aos-delay={`220`}
                                        data-aos-duration="1200"
                                        
                                        data-aos-easing="ease-in-out"
                                        
                                        className="bold__font md__font"
                                        dangerouslySetInnerHTML={{ __html: project.post_name }}
                                      />
  
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        }

                      </div>
                    </div>
                </div>
              </div>
            </section>
            {/* <section className="selected__projects latest__projects">
              <div className="container container__custom">
                <div className="row">
                  <div className="col-lg-12 no__padding">
                    <div className="separator --black "></div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__info">
                    <div className="selected__projects__title">
                      <h2 className="lg__font">{pageAcf.lp_title}</h2>
                    </div>

                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no__padding selected__projects__button__left"></div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no__padding selected__projects__button__right">
                        <div className="selected__projects__copy">
                          <p className="bold__font md__font latest__projects__subtitle">{pageAcf.lp_subtitle}</p>
                          <div
                            className=""
                            dangerouslySetInnerHTML={{ __html: pageAcf.lp_copy }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row latest__projects__projects">
                  <div className="container">
                    <div className="row">
                      {
                        latestProjects.map((project, index) => 
                          <div className="col-xs-6 col-sm-3 col-md-3 pgrid__base__thumbnail --pr-one no__padding" key={index}>
                              <Link to={`/project/${project.node.slug.toLowerCase()}`}>
                                <img src={`${project.node.acf.featured_image.localFile.url}`} alt={`${project.node.title}`}/>
                              </Link>
                              <p className="bold__font md__font">{project.node.title}</p>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </div>
        
      </Layout>
    )
  }
}
export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    allWordpressWpProjects(limit: 4) {
      edges {
        node {
          title
          slug
          acf {
            featured_image {
              localFile {
                url
              }
            }
          }
        }
      }
    }
    allWordpressPage(filter: { path: { eq: "/" } }) {
      edges {
        node {
          id
          title
          content
          date(formatString: "MMMM DD, YYYY")
          yoast_meta {
            yoast_wpseo_metadesc
            yoast_wpseo_title
            yoast_wpseo_canonical
          }
          acf {
            top_title
            video_background{
              source_url
              title
            }
            fallback_image{
              source_url
              title
            }
            section_color
            reel_title
            reel_copy
            reel_video {
              source_url
              title
            }
            reel_video_poster {
              source_url
              title
            }
            sp_title
            sp_copy
            sp_projects {
              post_name
              post_content
              acf {
                thumbnail_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                    url
                  }
                }
              }
            }
            lp_title
            lp_subtitle
            lp_copy
          }
        }
      }
    }
  }
`
