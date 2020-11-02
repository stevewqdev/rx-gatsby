import React, { Component } from "react"
import Layout from "../../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import ProjectHero from "../../components/projects/header/index"
import Img from "gatsby-image"
import "../../layouts/pages/projects/coastalfarm.css"
import RelatedProjects from "../../components/relatedProjects/index"

class CoastalRootFarm extends Component {
  render() {
    const pageData = this.props.data.allWordpressWpProjects.edges[0].node
    const pageAcf = this.props.data.allWordpressWpProjects.edges[0].node.acf

    return (
      <Layout>
        <div className="project__template coastalFarms">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content={pageData.yoast_meta.yoast_wpseo_metadesc}
            />
            <title>{pageData.yoast_meta.yoast_wpseo_title}</title>
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
                    <div className="row">
                        {pageAcf.coastal_roots_data.map((element, index) => (
                            <>
                            {
                                index === 0 
                                ? 
                                <>
                                <div
                                    className="col-xs-12 col-sm-12 col-md-6 col-lg-6 copy no__padding"
                                    data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                >
                                    <div
                                    className="simple__copy sm__font reg__font"
                                    dangerouslySetInnerHTML={{
                                        __html: element.copy,
                                    }}
                                    />
                                </div>
                                <div
                                className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-two-${index} image no__padding mix-multiply`}
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
                                        alt={`Illustration from Coastal Farm project`}
                                        tabIndex={-1}
                                    />
                                </div>
                                <div className="spacing"></div>
                                </>
                                : ""
                            }
                            {
                                index === 1
                                ?
                                <>
                                    <div
                                        className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding centered coastal__column__centered column__left column__second__coastal"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="450"
                                    >
                                        <div
                                        className="simple__copy sm__font reg__font"
                                        dangerouslySetInnerHTML={{
                                            __html: element.copy,
                                        }}
                                        />
                                    </div>
                                    <div
                                    className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9  image no__padding mix-multiply`}
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
                                            alt={`Illustration from Coastal Farm project`}
                                            tabIndex={-1}
                                        />
                                    </div>
                                    <div className="spacing"></div>
                                </>
                                : ""
                            }
                            {
                                index === 2
                                ?
                                <>
                                    <div
                                    className={`custom__col col-xs-12 col-sm-12 col-md-9 col-lg-9  image no__padding column__third__coastal mix-multiply`}
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
                                            alt={`Illustration from Coastal Farm project`}
                                            tabIndex={-1}
                                        />
                                    </div>
                                    <div
                                        className="col-xs-12 col-sm-12 col-md-3 col-lg-3 copy no__padding coastal__column__centered column__right"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="450"
                                    >
                                        <div
                                        className="simple__copy sm__font reg__font"
                                        dangerouslySetInnerHTML={{
                                            __html: element.copy,
                                        }}
                                        />
                                    </div>
                                    <div className="spacing"></div>
                                </>
                                : ""
                            }
                            {
                                index === 3 
                                ? 
                                <>
                                <div
                                    className="col-xs-12 col-sm-12 col-md-6 col-lg-6 copy no__padding "
                                    data-aos="fade-up"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay={`120`}
                                    data-aos-duration="1200"
                                    data-aos-offset="450"
                                >
                                    <div
                                    className="simple__copy sm__font reg__font"
                                    dangerouslySetInnerHTML={{
                                        __html: element.copy,
                                    }}
                                    />
                                </div>
                                <div
                                className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-two-${index} image no__padding column__fourth__coastal mix-multiply`}
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
                                        alt={`Illustration from Coastal Farm project`}
                                        tabIndex={-1}
                                    />
                                </div>
                                <div className="spacing"></div>
                                </>
                                : ""
                            }
                            </>
                        ))}
                        <div
                            className="single__project includes__separator"
                            id="single__two"
                        >
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
                                        dangerouslySetInnerHTML={{
                                        __html: pageAcf.coastal_roots_about,
                                        }}
                                    />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {pageAcf.coastal_roots_data_section_two.map((element, index) => (
                            <>
                            {
                                index === 0 
                                ? 
                                <>
                                <div
                                className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-two-${index} image no__padding mix-multiply`}
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
                                        alt={`Illustration from Coastal Farm project`}
                                        tabIndex={-1}
                                    />
                                </div>
                                <div className="spacing"></div>
                                </>
                                : ""
                            }
                            {
                                index === 1
                                ?
                                <>
                                    <div
                                        className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding centered"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="450"
                                    >
                                        <div
                                        className="simple__copy sm__font reg__font"
                                        dangerouslySetInnerHTML={{
                                            __html: element.copy,
                                        }}
                                        />
                                    </div>
                                    <div
                                    className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12  image no__padding mix-multiply`}
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
                                            alt={`Illustration from Coastal Farm project`}
                                            tabIndex={-1}
                                        />
                                    </div>
                                    <div className="spacing"></div>
                                </>
                                
                                : ""
                            }
                            {
                                index === 2
                                ?
                                <>
                                    <div
                                        className="col-xs-12 col-sm-12 col-md-12 col-lg-12 copy no__padding centered coastal__column__end"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay={`120`}
                                        data-aos-duration="1200"
                                        data-aos-offset="450"
                                    >
                                        <div
                                        className="simple__copy sm__font reg__font"
                                        dangerouslySetInnerHTML={{
                                            __html: element.copy,
                                        }}
                                        />
                                    </div>
                                    <div
                                    className={`custom__col col-xs-12 col-sm-12 col-md-12 col-lg-12  image no__padding mix-multiply`}
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
                                            alt={`Illustration from Coastal Farm project`}
                                            tabIndex={-1}
                                        />
                                    </div>
                                    <div className="spacing"></div>
                                </>
                                : ""
                            }
                            
                            <div className="spacing"></div>
                            </>
                        ))}
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
export default CoastalRootFarm

export const pageQuery = graphql`
  query CoastalRootFarm {
    allWordpressWpProjects(filter: { wordpress_id: { eq: 2005 } }) {
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
            coastal_roots_data {
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
            coastal_roots_about
            coastal_roots_data_section_two {
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
