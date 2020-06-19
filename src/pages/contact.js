import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet"; 
import AOS from "aos"

import "../layouts/pages/contact.css"

class ContactPage extends Component {
  componentDidMount(){
    setTimeout(function(){
      AOS.refreshHard();
    }, 200)
  }
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    const customStyles =
    `
    .fixed.column__top__one{
      position: absolute!important;
      display: none!important;
    }
    .fixed.column__top__two{
      position: absolute!important;
    }
    @media(max-width: 4000px){
      .main__section__wrapper {
        height: 86vh;
        margin-top: -100vh;
        background: black;
      }
    }
    @media(max-width: 3000px){
      .main__section__wrapper {
        height: 81vh;
      }
    }
    @media(max-width: 2600px){
      .main__section__wrapper {
        height: 74vh;
      }
      .floating__web__info .copyright__column p {
        top: -167px;
        left: 50px;
      }
    }
    @media(max-width: 2000px){
      .main__section__wrapper{
        height: 72vh;
      }
      .floating__web__info .copyright__column p {
        left: 0px;
      }
      .floating__web__info .copyright__column p {
        top: -150px;
      }
    }
    @media(max-width: 1700px){
      .main__section__wrapper {
        min-height: 100vh;
      }

      .floating__web__info .copyright__column p {
        top: -160px;
      }
    }
    @media(max-width: 1440px){

    }
    @media(max-width: 1024px){
      .main__section__wrapper {
          height: 77vh;
      }
      .info__address .contact__data__content:nth-child(2){
        margin-top: 30px;
      }
      .info__address .contact__data__content:nth-child(3){
        margin-top: 30px;
      }
    }
    @media(max-width: 1024px){
      .main__section__wrapper {
        height: 110vh;
      }
    }
    @media(max-width: 768px){
      .main__section__wrapper {
        height: 135vh;
      }
    }
    @media(max-width: 500px){
      .main__section__wrapper {
        height: auto;
      }
      .raxo__info {
        padding: 150px 0 50px 0px;
      }
    }
    #gatsby-focus-wrapper{
      background: black;
    }
    .fixed__footer{
      position: relative!important;
    }
    .page__wrapper{
      margin-bottom: 0px!important;
    }
    .get__in__touch__wrapper{
      margin-top: -40px;
    }
    .get__in__touch__wrapper {
      background: #000000;
    }
    .get__in__touch__wrapper h2{
      display: none;
    }
    @media (max-width: 920px) and (orientation: landscape) {
      .main__section__wrapper {
        height: auto;
      }
      #page__wrapper {
        margin-bottom: 0px!important;
      }
    }
    `;
    
    return ( 
      <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <style>{customStyles}</style>
            <meta name="description" content={ pageData.yoast_meta.yoast_wpseo_metadesc }/>
            <title>{ pageData.yoast_meta.yoast_wpseo_title }</title>
            <link rel="canonical" href={ pageData.yoast_meta.yoast_wpseo_canonical} />
          </Helmet>
          <div className="main__section__wrapper">
            <section id="two " className="raxo__info">
                <div className="container container__custom">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-sm-6 col-lg-6 info__blocks no__padding">
                          <div className="contact__data__block">
                          {
                            pageAcf.bussines_contact.map((element, index) => 
                              <div className="contact__data__content" key={index}>
                                  <>
                                  {
                                    element.bussines_info_block.map((sub, index) => 
                                      <>
                                      <h2 className="ab__font bold__font white__font"
                                        data-aos="fade-up"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="550"
                                        data-aos-duration="1200"
                                        data-aos-offset="200"
                                      >
                                       {sub.title}
                                      </h2>
                                      <a href={`mailto:${sub.email}`}>
                                        <h3 className="ab__font bold__font gray__font"
                                          data-aos="fade-up"
                                          data-aos-easing="ease-in-back"
                                          data-aos-delay="550"
                                          data-aos-duration="1200"
                                          data-aos-offset="200"
                                        >
                                          {sub.email}
                                        </h3>
                                      </a>
                                      <a href={`tel:${sub.phone}`}>
                                        <h3 className="ab__font bold__font gray__font"
                                          data-aos="fade-up"
                                          data-aos-easing="ease-in-back"
                                          data-aos-delay="550"
                                          data-aos-duration="1200"
                                          data-aos-offset="200"
                                        >
                                          {sub.phone}
                                        </h3>
                                      </a>
                                      </>
                                    )
                                  }
                                  </>
                              </div>
                            )
                          }
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-sm-6 col-lg-6 info__address no__padding">
                          <div className="contact__data__block">
                            <h2 className="ab__font bold__font white__font"
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="550"
                              data-aos-duration="1200"
                              data-aos-offset="200"
                            >
                              Find Us Here
                            </h2>
      
                            
                            {
                              pageAcf.address.map((address, index) =>
                                <div className="contact__data__content">
                                  <h4
                                  className="ab__font gray__font bold__font"
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay="550"
                                  data-aos-duration="1200"
                                  data-aos-offset="200"
                                  dangerouslySetInnerHTML={{ __html: address.office_address}}
                                  />
                                </div>
                              )
                            }
                            <div className="contact__data__content">
                              <h2 className="ab__font bold__font white__font invisible"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="550"
                                data-aos-duration="1200"
                                data-aos-offset="200"
                              >
                                Find us here
                              </h2>
                              <a href={`tel:${this.props.data.wordpressAcfOptions.options.contact_phone}`}>
                                  <h4
                                  className="ab__font gray__font bold__font"
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay="500"
                                  data-aos-duration="1200"
                                  data-aos-offset="200"
                                  dangerouslySetInnerHTML={{ __html: this.props.data.wordpressAcfOptions.options.contact_phone}}
                                  />
                              </a>
                              <a href={`mailto:${this.props.data.wordpressAcfOptions.options.contact_email}`} >
                                  <h4
                                  className="ab__font gray__font bold__font"
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-back"
                                  data-aos-delay="500"
                                  data-aos-duration="1200"
                                  data-aos-offset="200"
                                  dangerouslySetInnerHTML={{ __html: this.props.data.wordpressAcfOptions.options.contact_email }}
                                  />

                              </a>
                            </div>
                            
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
            bussines_contact{
              bussines_info_block{
                title
                email
                phone
              }
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
