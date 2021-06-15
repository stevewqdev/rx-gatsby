import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import { Helmet } from "react-helmet"
import About from "../components/about/index"

import "../layouts/pages/management-agreements.css"

class ManagementAgreements extends Component {
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf

    return (
      <Layout>
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
        <Hero
          theme={pageAcf.section_color}
          image={pageAcf.fallback_image}
          video={pageAcf.video_background}
          title={pageAcf.top_title}
          firstSubtitle={pageAcf.first_subtitle}
          secondSubtitle={pageAcf.second_subtitle}
        ></Hero>
        <div className="management__page main__section__wrapper">
          <About
            customData={pageAcf.about_areas_agreement}
            customCopy={pageAcf.about_copy_agreement}
          ></About>
          <section className="standard__web">
            <div className="container container__custom">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding">
                  <div className="separator --white "></div>
                  <br />
                  <h2
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`100`}
                    data-aos-duration="1200"
                    className="row  bold__font xxl__font "
                    dangerouslySetInnerHTML={{
                      __html: pageAcf.web_agreements_title,
                    }}
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`200`}
                    data-aos-duration="1200"
                    className="row  md__font mark__font reg__font web__agreements"
                    dangerouslySetInnerHTML={{ __html: pageAcf.web_agreements }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="standard__web">
            <div className="container container__custom">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding">
                  <div className="separator --white "></div>
                  <br />
                  <h2
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`100`}
                    data-aos-duration="1200"
                    className="row  bold__font xxl__font "
                    dangerouslySetInnerHTML={{
                      __html: pageAcf.service_level_title,
                    }}
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no__padding">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`200`}
                    data-aos-duration="1200"
                    className="row  md__font mark__font reg__font service__level__agreements"
                    dangerouslySetInnerHTML={{
                      __html: pageAcf.service_level_agreements,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
export default ManagementAgreements

export const pageQuery = graphql`
  query ManagementQuery {
    allWordpressPage(filter: { slug: { eq: "management-agreements" } }) {
      edges {
        node {
          id
          title
          content
          date(formatString: "MMMM DD, YYYY")
          yoast{
 metadesc
}
yoast_meta {
            yoast_wpseo_metadesc
            yoast_wpseo_title
            yoast_wpseo_canonical
          }
          acf {
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

            about_areas_agreement {
              title
            }
            about_copy_agreement
            web_agreements_title
            web_agreements
            service_level_title
            service_level_agreements
          }
        }
      }
    }
  }
`
