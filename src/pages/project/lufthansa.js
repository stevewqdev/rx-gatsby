import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/lufthansa.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class Lufthansa extends Component {
   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;

    return ( 
      <Layout>
        <div className="project__template lufthansa">
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
            theme={pageAcf.project_background}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <section id="section__one">
                <div className="container container__custom">
                    <div className="row gallery">
                    {
                        pageAcf.lufthansa_galleryone.map((image,index) => 
                            <>
                                {
                                    index === 0
                                    ?  <div 
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                        data-aos-duration="1200"
                                        className={
                                            `no__padding col-xs-12 col-sm-12 
                                            section__one__image-${index}
                                        
                                        `}>
                                            <img src={image} alt="London Calling Project Image"/>
                                        </div>
                                    :""
                                }
                                {
                                    index === 1
                                    ? 
                                        <>  
                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                                            <div 
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`${(index + 1) * 100}`}
                                            data-aos-duration="1200"
                                            className={
                                                `no__padding col-xs-12 col-sm-12 
                                                col-md-9 col-lg-9
                                                section__one__image-${index}
                                            
                                            `}>
                                                <img src={image} alt="London Calling Project Image"/>
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
                                            `no__padding col-xs-12 col-sm-12 col-md-12 col-lg-12
                                            section__one__image-${index}
                                        
                                        `}>
                                            <img src={image} alt="London Calling Project Image"/>
                                        </div>
                                        </>
                                    :""
                                }
                                {
                                    index === 3
                                    ?  
                                    <>  
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                                        <div 
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                        data-aos-duration="1200"
                                        className={
                                            `no__padding col-xs-12 col-sm-12 
                                            col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}>
                                            <img src={image} alt="London Calling Project Image"/>
                                        </div>
                                    </>
                                    :""
                                }
                                {
                                    index === 4
                                    ?  
                                    <>  
                                        <div 
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                        data-aos-duration="1200"
                                        className={
                                            `no__padding col-xs-12 col-sm-12 
                                            col-md-12 col-lg-12
                                            section__one__image-${index}
                                        
                                        `}>
                                            <img src={image} alt="London Calling Project Image"/>
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

            <section className="includes__separator about" id="section__two">
                <div className="container container__custom">
                <div className="row section__three__about">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding">
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
                            dangerouslySetInnerHTML={{ __html: pageAcf.lufthansa_about }}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="section__three">
                <div className="container container__custom">
                    <div className="row gallery">
                        {
                            pageAcf.lufthansa_gallerythree.map((image,index) => 
                                <>
                                    {
                                        index === 0
                                        ?<div 
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`${(index + 1) * 100}`}
                                            data-aos-duration="1200"
                                            className={
                                                `
                                                mix-multiply
                                                 no__padding col-xs-12 col-sm-12 
                                                section__three__image-${index}
                                            
                                            `}>
                                                <img src={image} alt="London Calling Project Image"/>
                                          </div>
                                        : ""
                                    }
                                    {
                                        index === 1
                                        ?   
                                        <>  
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                                        <div 
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`${(index + 1) * 100}`}
                                        data-aos-duration="1200"
                                        className={
                                            `no__padding col-xs-12 col-sm-12 
                                            col-md-9 col-lg-9
                                            section__one__image-${index}
                                        
                                        `}>
                                            <img src={image} alt="London Calling Project Image"/>
                                        </div>
                                    </>
                                        :""
                                    }
                                    {
                                        index === 2
                                        ?<div 
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay={`${(index + 1) * 100}`}
                                            data-aos-duration="1200"
                                            className={
                                                `no__padding col-xs-12 col-sm-12 
                                                section__three__image-${index}
                                            
                                            `}>
                                                <img src={image} alt="London Calling Project Image"/>
                                          </div>
                                        : ""
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
export default Lufthansa

export const pageQuery = graphql`
query LufthansaPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 1579}}) {
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
            
            lufthansa_galleryone
            lufthansa_about
            lufthansa_gallerythree
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
