import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";
import ProjectHero  from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/indago.css"
import Vimeo from '@u-wave/react-vimeo';
import RelatedProjects from "../../components/relatedProjects/index"

class Indago extends Component {

  componentDidMount(){
  }

   
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node; 
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf;

    return ( 
      <Layout>
        <div className="project__template indago">
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
            theme={`${pageAcf.project_background} `}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <div className="single__project" id="single__one">
                <div className="container container__custom">
                    <div className={`row`} >
                        {
                            pageAcf.indago_gallery.map((image, index) => 
                                <div className={`custom__col col-lg-12 no__padding col-one-${index}`} key={index}>
                                    <img src={image} className={`full__width__image image mix-multiply`} alt=""/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> 
            <div className="single__project" id="single__two">
                <div className="container container__custom">
                    <div className={`row`} >
                        {
                            pageAcf.indago_section_one_content.map((element, index) => 
                                <>
                                {
                                    index === 0
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} image no__padding`} key={index}>
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} copy`} key={index}>
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
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} no__padding image`} key={index}>
                                        
                                    </div>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} no__padding image`} key={index}>
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                {
                                    index > 1
                                    ?
                                    <>
                                    <div className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-two-${index} no__padding image`} key={index}>
                                        <Img fluid={element.image.localFile.childImageSharp.fluid} alt={`Project  image`} tabIndex={-1}/>
                                    </div>
                                    </>
                                    :""
                                }
                                </>
                            )
                        }
                    </div>
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
export default Indago

export const pageQuery = graphql`
query IndagoPageQuery {
    allWordpressWpProjects(filter: {wordpress_id: {eq: 1071}}) {
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
            indago_gallery
            indago_section_one_content{
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
