import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/yankees.css"
import RelatedProjects from "../../components/relatedProjects/index"

class Yankee extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf

    return (
      <Layout>
        <div className="project__template yankee">
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
            theme={`${pageAcf.project_background} `}
          ></ProjectHero>

          <div className="main__section__wrapper">
            <div className="single__project" id="single__one">
              <div className="container container__custom">
                <div className={`row`}>
                  {pageAcf.yankee_gallery.map((image, index) => (
                    <div
                      className={`custom__col col-lg-12 no__padding col-one-${index}`}
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`120`}
                      data-aos-duration="1200"
                      data-aos-offset="450"
                    >
                      <img
                        src={image}
                        className={`full__width__image image mix-multiply`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="single__project" id="single__two">
              <div className="container container__custom">
                <div className={`row`}>
                  {pageAcf.yankee_section_two_content.map((element, index) => (
                    <>
                      {index === 0 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 1 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 2 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy "
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
                      ) : (
                        ""
                      )}
                      {index === 3 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-two-${index} no__padding image`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 4 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} no__padding image`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 5 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} no__padding image`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 6 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 copy col-two-${index}`}
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
                      ) : (
                        ""
                      )}
                      {index === 7 ? (
                        <>
                          <div
                            className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding col-two-${index}`}
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
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 8 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {index === 9 ? (
                        <>
                          <div
                            className={`custom__col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-two-${index} image no__padding`}
                            key={index}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={`120`}
                            data-aos-duration="1200"
                            data-aos-offset="450"
                          >
                            <Img
                              fluid={
                                element.image.localFile.childImageSharp.fluid
                              }
                              alt={`Project  image`}
                              tabIndex={-1}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
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
export default Yankee

export const pageQuery = graphql`
  query YankeePageQuery {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 1069 } }) {
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
            yankee_gallery
            yankee_section_two_content {
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
              copy
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
