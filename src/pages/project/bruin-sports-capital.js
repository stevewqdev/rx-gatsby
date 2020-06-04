import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/bruin-sports-capital.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class BruinSports extends Component {
 constructor(props) {
  super(props);

  }
 


  componentDidMount(){
  }

   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;
    console.log(pageAcf)
    return ( 
      <Layout>
        <div className="project__template bsc">
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
            <div className="single__project" id="single__one">
                <div className="container container__custom">
                    {
                        pageAcf.bsc_sone_repeater.map((element, index) => 
                            <>
                                {
                                   index === 0  || index === 1 || index === 3
                                   ?
                                   <div className={`row row-${index} ${index % 2 === 0 ? "basic" : "inverse"}`} key={index}
                                   data-aos="fade-up"
                                   data-aos-easing="ease-in-back"
                                   data-aos-delay={`120`}
                                   data-aos-duration="1200"
                                   data-aos-offset="450"
                                   >
                                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 image no__padding">
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding d-flex align-items-center">
                                        <   div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                    </div>
                                   :""
                                }
                                {
                                    index === 2
                                    ?
                                    <div className={`row row-${index}`} key={index}
                                    data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding">
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                    :""
                                }
                            </>
                        )
                    }
                </div>
            </div> 
       
            <div className="single__project includes__separator" id="single__two">
                <div className="container container__custom">
                    <div className="row section__three__about">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 full__width__image no__padding about">
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
                                    dangerouslySetInnerHTML={{ __html: pageAcf.bsc_about }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single__project " id="single__three">
                <div className="container container__custom">
                    {
                        pageAcf.bsc_sthree_repeater.map((element, index) => 
                            <>
                                {
                                    index === 0
                                    ?
                                    <div className={`row row-${index} `} key={index}
                                    data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                    >
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 image no__padding">
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                    </div>
                                    : ""
                                }
                                {
                                    index === 1
                                    ?
                                    <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"></div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"></div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="450"
                                        >
                                        <   div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                    </div>
                                    :""
                                }
                                {
                                    index === 2
                                    ?
                                    <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"></div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"></div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                        <   div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                    </div>
                                    :""
                                }
                                {
                                    index === 3
                                    ?
                                    <div className={`row row-${index} `} key={index}>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"></div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"></div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 image no__padding"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                            <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding"
                                                                            data-aos="fade-up"
                                                                            data-aos-easing="ease-in-back"
                                                                            data-aos-delay={`120`}
                                                                            data-aos-duration="1200"
                                                                            data-aos-offset="450"
                                        >
                                        <   div
                                            className="simple__copy sm__font reg__font"
                                            dangerouslySetInnerHTML={{ __html: element.copy }}
                                            />
                                        </div>
                                    </div>
                                    :""
                                }
                            </>
                        )
                    }
                </div>
            </div>

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
export default BruinSports

export const pageQuery = graphql`
query BruinSportsPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 1060}}) {
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
            bsc_sone_repeater{
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
            bsc_about
            bsc_sthree_repeater{
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
