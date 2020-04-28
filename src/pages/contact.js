import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import SocialMenu from "../components/socialMenu"

import "../layouts/pages/contact.css"

class ContactPage extends Component {
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    
    
    return ( 
      <Layout>
          <Hero 
            theme={pageAcf.section_color}
            image={pageAcf.fallback_image} 
            video={pageAcf.video_background}
            title={pageAcf.top_title}
            firstSubtitle={pageAcf.first_subtitle}
            secondSubtitle={pageAcf.second_subtitle}
          >
          </Hero>
          <section id="two " className="raxo__info">
              <div className="container container__custom">
                  <div className="row">
                      <div className="col-lg-6 raxo__social__menu no__padding">
                        <SocialMenu fontSize="lg__font bold__font no__decoration" layout={"full__screen__menu"}></SocialMenu>
                      </div>
                      <div className="col-lg-6 raxo__contact__info no__padding">
                        <h2 className="lg__font bold__font">
                            {this.props.data.wordpressAcfOptions.options.contact_email}
                        </h2>
                        <h2 className="lg__font bold__font">
                            {this.props.data.wordpressAcfOptions.options.contact_phone}
                        </h2>
                      </div>
                  </div>
              </div>
          </section>
      </Layout>
    )
  }
}
export default ContactPage

export const pageQuery = graphql`
query ContactQuery {

    allWordpressPage(filter: {slug: {eq: "contact"}}) {
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
    wordpressAcfOptions {
        options {
          contact_email
          contact_phone
        }
    }
  }  
`
