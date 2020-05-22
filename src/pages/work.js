import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"


import "../layouts/pages/work.css"

class ContactPage extends Component {
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    const latestProjects = this.props.data.allWordpressWpProjects.edges; 

    console.log(latestProjects);
    return ( 
      <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
            <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
            <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
          </Helmet>
          <Hero 
            theme={pageAcf.section_color}
            image={pageAcf.fallback_image} 
            video={pageAcf.video_background}
            title={pageAcf.top_title}
            firstSubtitle={pageAcf.first_subtitle}
            secondSubtitle={pageAcf.second_subtitle}
          >
          </Hero>
          <div className="main__section__wrapper">
          <section className="work__list">
            <div className="container container__custom">
                <div className="row">
                    {
                        latestProjects.map((project, index) => 
                            
                                index % 2 === 0 
                                ? 
                                    <div className={`col-xs-6 col-sm-6 col-md-6 pgrid__base__thumbnail --pr-one no__padding work__list__project project-${index}`} key={index}>
                                        <div className="work__list__project__img"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                        data-aos-duration="1200"
                                        
                                        >
                                            <Link to={`/project/${project.node.slug.toLowerCase()}`}>
                                                    <img src={`${project.node.acf.thumbnail_image.localFile.url}`} alt={`${project.node.title}`} />
                                            </Link>
                                            <div className="work__list__project__info">
                                              <p
                
                                              
                                                  className="bold__font lg__font work__list__title"
                                                  dangerouslySetInnerHTML={{ __html: project.node.title }}
                                              />
                                              <p 
                                              
                   
                                              
                                              className=" reg__font sm__font work__list__description">{project.node.acf.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                :
                                    <div className={`col-xs-6 col-sm-6 col-md-6 pgrid__base__thumbnail --pr-one no__padding work__list__project lower__project project-${index}`} key={index} >
                                        <div className="work__list__project__img"
                                        
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                        data-aos-duration="1200"
                                        
                                        >
                                            <Link to={`/project/${project.node.slug.toLowerCase()}`}>
                                                    <img src={`${project.node.acf.thumbnail_image.localFile.url}`} alt={`${project.node.title}`} />
                                            </Link>
                                            <div className="work__list__project__info">
                                                <p
                                                    className="bold__font lg__font work__list__title"
                                                    dangerouslySetInnerHTML={{ __html: project.node.title }}
                                                />
                                                <p className="reg__font sm__font work__list__description"
                      
                                                
                                                >{project.node.acf.subtitle}</p>
                                            </div>
                                        </div>
                                    </div> 
                        )
                    }
                </div>
            </div>
          </section>
          </div>
      </Layout>
    )
  }
}
export default ContactPage

export const pageQuery = graphql`
query WorkQuery {
    allWordpressWpProjects{
        edges {
            node {
                title
                slug
                acf {
                    subtitle
                    thumbnail_image {
                      localFile {
                          url
                      }
                    }
                    featured_image {
                        localFile {
                            url
                        }
                    }
                }
            }
        }
    }
    allWordpressPage(filter: {slug: {eq: "work"}}) {
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
          acf{
            top_title
            first_subtitle
            second_subtitle
            video_background {
              id
            }
            fallback_image {
              id
            }
            section_color
          }
        }
      }
    }

  }  
`
