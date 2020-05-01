import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import SocialMenu from "../components/socialMenu"
import {Helmet} from "react-helmet";

import "../layouts/pages/contact.css"

class ContactPage extends Component {
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    
    
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
          <section id="two " className="raxo__info">
              <div className="container container__custom">
                  <div className="row">
                      <div className="col-xs-6 col-sm-6 col-lg-6 raxo__social__menu no__padding">
                        <SocialMenu fontSize="lg__font bold__font no__decoration" layout={"full__screen__menu"}></SocialMenu>
                      </div>
                      <div className="col-xs-6  col-sm-6 col-lg-6 raxo__contact__info no__padding">
                        <a href={`mailto:${this.props.data.wordpressAcfOptions.options.contact_email}`}>
                            <h2 className="lg__font bold__font">
                                {this.props.data.wordpressAcfOptions.options.contact_email}
                            </h2>
                        </a>
                        <a href={`tel:${this.props.data.wordpressAcfOptions.options.contact_phone}`}>
                        <h2 className="lg__font bold__font">
                            {this.props.data.wordpressAcfOptions.options.contact_phone}
                        </h2>
                        </a>
                      </div>
                  </div>
              </div>
          </section>
          <section id="three">
              <div className="container container__custom raxo__addresses">
                  {
                    pageAcf.address.map((address, index) =>
                        <div className="row raxo__theAddress" key={`${index}`}>
                            <div className="col-lg-12 no__padding raxo__address__office">
                                <h3 className="xxl__font bold__font">
                                  {address.office_address}
                                </h3>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 no__padding raxo__address__copy">
                                <div
                                className="reg__font sm__font "
                                dangerouslySetInnerHTML={{ __html: address.address_copy }}
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 no__padding raxo__address__map">
                                <div
                                className=""
                                dangerouslySetInnerHTML={{ __html: address.google_iframe }}
                                />
                            </div>
                        </div>
                    )
                  }
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
            address{
                office_address
                address_copy
                google_iframe
            }
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
