import React, { Component } from "react"
import Layout from "../layouts/index"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import About from "../components/about/index"
import {Helmet} from "react-helmet";

class HomePage extends Component {
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    const latestProjects = this.props.data.allWordpressWpProjects.edges; 

    return ( 
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
          <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
          <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
        </Helmet>
        <div className={`home__page post__${pageData.id}`}>
          <section id="one">
            <div className="row">
              <div className="col-lg-12">
                <div className="video__background">
                  {
                    pageAcf.video_background
                    ?
                    <video
                      autoPlay 
                      loop 
                      muted
                      
                      playsInline
                      className="mobile-hidden"
                    >
                      <source src={pageAcf.video_background.source_url} type="video/mp4" />
                    </video>
                    :""
                  }
                </div>
              </div>
              <div className="col-lg-12 raxo__rx__svg">
                <img src={pageAcf.fallback_image.source_url} alt={pageAcf.fallback_image.title}/>
              </div>
            </div>
          </section>
          <About></About>
          <section className="featured__video">
            <div className="container container__custom">
              <div className="row">
                <div className="col-lg-12 no__padding">
                  <div className="separator --black "></div>
                </div>
                <div className="col-lg-12 no__padding featured__video__title">
                  <h2 className={"xxl__font"}>{pageAcf.reel_title}</h2>
                </div>
                <div className="col-lg-12 featured__video__wrapper no__padding">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 featured__video__copy no__padding">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: pageAcf.reel_copy }}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 featured__video__source no__padding">
                    {
                      pageAcf.reel_video
                      ?
                      <video
                        autoPlay 
                        loop 
                        muted
                        
                        playsInline
                        className="mobile-hidden"
                      >
                        <source src={pageAcf.reel_video.source_url} type="video/mp4" />
                      </video>
                      :""
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="selected__projects">
            <div className="container container__custom">
              <div className="row">
                <div className="col-lg-12 no__padding">
                  <div className="separator --black "></div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__info">
                  <div className="selected__projects__title">
                    <h2 className="lg__font">{pageAcf.sp_title}</h2>
                  </div>
                  <div className="selected__projects__copy">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: pageAcf.sp_copy }}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button__left"></div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no__padding selected__projects__button__right">
                      <Link to="/projects">
                        <button className="btn btn-default sm__font reg__font">See More</button>
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
                          <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-6 no__padding selected__projects__projects --project">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding selected__projects__projects__left">
                                <div className="selected__projects__projects__left__img">
                                  <img src={`${project.acf.featured_image.localFile.url}`} alt={`${project.post_name}`}/>
                                </div>
                                <div className="selected__projects__projects__left__copy">
                                  <div
                                    className=""
                                    dangerouslySetInnerHTML={{ __html: project.post_content }}
                                  />
                                </div>
                                <div className="no__padding selected__projects__projects__right">
                                  <div className="selected__projects__projects__right__title">
                                    <p className="bold__font md__font">
                                      {project.post_name}
                                    </p>
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
          <section className="selected__projects latest__projects">
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
                            <Link to={`/project/${project.node.title.toLowerCase()}`}>
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
          </section>
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
                featured_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1000, quality: 100) {
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
