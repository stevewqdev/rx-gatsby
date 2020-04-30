import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import {Helmet} from "react-helmet";
import About from "../components/about/index"
import Img from "gatsby-image"
import SVGONE from "../images/svg/Icon-01.svg";
import SVGTWO from "../images/svg/Icon-02.svg";
import SVGTHREE from "../images/svg/Icon-03.svg";
import SVGFOUR from "../images/svg/Icon-04.svg";


import "../layouts/pages/about.css"

class ContactPage extends Component {

  changeCity(event){
    let cityButton = event.target.getAttribute("id");
    let cityElements = [...document.getElementsByClassName(cityButton)];

    [...document.getElementsByClassName("button__office")].map(button =>{
      button.classList.remove("active");
    })

    Array.from(document.getElementsByClassName("show")).map(element =>{
      element.classList.remove("show");
      element.classList.remove("active");
    })
    Array.from(document.getElementsByClassName("hide")).map(element =>{
      element.classList.remove("hide");
      element.classList.remove("active");
    })

    event.target.classList.add("active");

    cityElements.map((city) => {
      if(city.classList.contains("show")){
        city.classList.add("hide");
        city.classList.remove("show")
      }else{
        city.classList.add("show");
        city.classList.remove("hide")
      }
    })
  }

  toggleListElement(event){
    let itemId = event.target.getAttribute("id");
    
    [...document.getElementsByClassName("recognition__list__item")].map(element => {
      element.classList.remove("active");
    })

    event.target.classList.add("active");

    [...document.getElementsByClassName("recognition__list__copy")].map(element => {
      element.classList.remove("active");
    })

    document.getElementsByClassName(itemId)[0].classList.add("active");
  }

  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node; 
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf;
    
    
    console.log(pageAcf);


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
            extraInfo={pageAcf.about_copy}
          >
          </Hero>
          <section id="columns">
            <div className="container container__custom">
              <div className="row">
                <div className="col-lg-12 divider"></div>
                {
                  pageAcf.colored_columns.map((column, index) => 
                    <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 colored__column order-${index} c-${column.color.replace('#','')}`} key={index}>
                      <div className="column__svg">
                      {
                        index === 0
                        ?
                        <SVGONE></SVGONE>
                        : ""
                      }
                      {
                        index === 1
                        ?<SVGTWO></SVGTWO>
                        : ""
                      }
                      {
                        index === 2
                        ?<SVGTHREE></SVGTHREE>
                        : ""
                      }
                      {
                        index === 3
                        ?<SVGFOUR></SVGFOUR>
                        : ""
                      }
                      </div>
                      <div className="colored__column__copy">
                        <div
                          className="row reg__font "
                          dangerouslySetInnerHTML={{ __html: column.copy }}
                        />
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </section>
          <About></About>
          <section id="offices">
            <div className="container container__custom">
              <div className="row offices__one">
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3 offices__first__copy">
                  <div
                    className="row reg__font sm__font reg__font"
                    dangerouslySetInnerHTML={{ __html: pageAcf.pre_office_copy }}
                  />
                </div>
              </div>
              <div className="row offices__two">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 offices__two__copy">
                  <div
                    className="row reg__font sm__font reg__font"
                    dangerouslySetInnerHTML={{ __html: pageAcf.office_copy }}
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 offices__two__photo">
                  {
                      pageAcf.office_photo
                      ?<Img fluid={pageAcf.office_photo.localFile.childImageSharp.fluid} alt={`Raxo's office photo`} tabIndex={-1}/>
                      :""
                  }
                </div>
              </div>
              <div className="row offices__three">
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3  no__padding">
                  {
                    pageAcf.offices.map((office, index)=> 
                      <div className={`${office.city.replace(/ /g,'').toLowerCase()} office__name ${index === 0 ? "active show" : "floating__element hide" } `} key={index}>
                        <p className="md__font bold__font">
                          Office
                        </p>
                        <h3 className="lg__font bold__font">
                          {office.city}
                        </h3>

                      </div>
                    )
                  }
                  <div className="offices__buttons">
                    {
                      pageAcf.offices.map((office, index)=> 
                        <div className={`button__office ${index === 0 ? "active" : "second__button" }`} id={office.city.replace(/ /g,'').toLowerCase()} key={index} onClick={this.changeCity}></div>
                    )
                    }
                  </div>
                </div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>

              </div>
              <div className="row offices__four">
                {
                  pageAcf.offices.map((office, index)=> 
                    <div className={`no__padding ${office.city.replace(/ /g,'').toLowerCase()} col-s-12 col-sm-12 col-md-12 col-lg-12 office__photo ${index === 0 ? "active show" : "floating__element hide" }`} key={index}>
                      {
                        office.photo
                        ?<Img fluid={office.photo.localFile.childImageSharp.fluid} alt={`Raxo's office photo`} tabIndex={-1}/>
                        :""
                      }
                    </div>
                  )
                }
              </div>
            </div>
          </section>
          <section id="we_can_help">
            <div className="container container__custom">
                <div className="row">
                    <div className="col-lg-12 no__padding">
                      <h2 className="xxl__font bold__font">
                        {pageAcf.services}
                      </h2>
                    </div>
                </div>
                <div className="row services">
                  {
                    pageAcf.services_info.map((services, index) => 
                            index % 2 === 0 
                            ? 
                                <div className={`col-xs-1 col-sm-12 col-md-6 col-lg-6 services__list no__padding c-${services.hover_color.replace('#','')}`} key={index}>
                                  <div className="services__list__subtitle">
                                    <p className="reg__font sm__font">
                                      {services.subtitle}
                                    </p>
                                  </div>
                                  <div className="services__list__items">
                                    <div
                                      className="row lg__font bold__font "
                                      dangerouslySetInnerHTML={{ __html: services.services_list }}
                                      />
                                  </div>
                                </div>
                            :
                                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 services__list lower__list no__padding service__list__${index} c-${services.hover_color.replace('#','')}`} key={index} >
                                  <div className="services__list__subtitle">
                                    <p className="reg__font sm__font">
                                      {services.subtitle}
                                    </p>
                                  </div>
                                  <div className="services__list__items">
                                    <div
                                      className="row lg__font bold__font "
                                      dangerouslySetInnerHTML={{ __html: services.services_list }}
                                      />
                                  </div>
                                </div> 
                    )
                    }
                </div>
            </div>
          </section>
          <section id="recognition">
            <div className="container container__custom recognition__wrapper">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 recognition__one no__padding">
                    <h3 className="xxl__font bold__font">
                      {pageAcf.recognition_title}
                    </h3>
                    <div
                      className="row sm__font reg__font recognition__one__copy"
                      dangerouslySetInnerHTML={{ __html: pageAcf.recognition_copy }}
                    />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 recognition__two no__padding">

                </div>
              </div>
            </div>
          </section>
          <section id="recognition_list">
            <div className="container container__custom">
              <div className="row">
                <div className="col-lg-12 no__padding">
                  <p className="sm__font reg__font recognition_list__top">
                    List of services of <br/>
                    Art Direction
                  </p>
                </div>
              </div>
              <div className="row recognition__list__wrapper">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 recognition__list__one no__padding">
                    {
                      pageAcf.recognition_list.map((item, index) => 
                        <div className={`recognition__list__item ${index === 0 ? "active" : ""}`} key={index} id={`tab-rec-${index}`} onClick={this.toggleListElement}>
                          <h3 className="lg__font bold__font">
                            {item.title}
                            
                          </h3>
                          <h3 className="lg__font bold__font">
                          {item.amount}
                          </h3>
                        </div>
                      )
                    }
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 recognition__list__two no__padding">
                    {
                      pageAcf.recognition_list.map((item, index) => 
                      <div
                        className={`row sm__font reg__font recognition__one__copy recognition__list__copy tab-rec-${index} ${index === 0 ? "active" : ""}`}
                        dangerouslySetInnerHTML={{ __html: item.details }}
                      />
                      )
                    }
                  <svg id="Componente_53_1" data-name="Componente 53 – 1" xmlns="http://www.w3.org/2000/svg" width="36.061" height="36.061" viewBox="0 0 36.061 36.061">
                    <circle id="Elipse_3" data-name="Elipse 3" cx="18.03" cy="18.03" r="18.03" fill="#fff"/>
                    <path id="Trazado_70" data-name="Trazado 70" d="M10889.058,8070.985l2.2,6.783h7.133l-5.771,4.192,2.2,6.783-5.77-4.192-5.771,4.192,2.2-6.783-5.77-4.192h7.132Z" transform="translate(-10871.028 -8062.771)"/>
                  </svg>

                </div>
              </div>
            </div>
          </section>
          <section id="recognition">
            <div className="container container__custom recognition__wrapper">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 recognition__one no__padding">
                    <h3 className="xxl__font bold__font">
                      {pageAcf.clients_title}
                    </h3>
                    <div
                      className="row sm__font reg__font recognition__one__copy"
                      dangerouslySetInnerHTML={{ __html: pageAcf.clients_copy }}
                    />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 recognition__two no__padding">
                    <div
                      className="row sm__font reg__font recognition__one__copy"
                      dangerouslySetInnerHTML={{ __html: pageAcf.clients_second_copy }}
                    />
                </div>
              </div>
            </div>
          </section>
          <section id="clients">
            <div className="container container__custom">
              <div className="row">
                {
                  pageAcf.clients_logos.map((client, index) => 
                    client.logo
                    ?
                      <div className="col-xs-6 col-sm-12 col-md-3 col-lg-3 client__logo" key={index}>
                        <img src={client.logo.localFile.url} alt="Client Logo"/>
                      </div>
                    :""
                  )
                }
              </div>
            </div>
          </section>
      </Layout>
    )
  }
}
export default ContactPage

export const pageQuery = graphql`
query AboutPageQuery {
    allWordpressPage(filter: {slug: {eq: "about"}}) {
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
            about_copy
            colored_columns{
                copy
                color
            }
            offices{
                city
                photo{
                    localFile {
                        childImageSharp {
                          fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                        url
                    }
                }
            }
            pre_office_copy
            office_copy
            office_photo{
                localFile {
                    childImageSharp {
                      fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                    url
                }
            }
            services
            services_info{
                subtitle
                services_list
                hover_color
            }
            recognition_title
            recognition_copy
            recognition_list{
                title
                amount
                details
            }
            clients_title
            clients_copy
            clients_second_copy
            clients_logos{
                logo{
                    localFile {
                        url
                    }
                }
            }
          }
        }
      }
    }
  }  
`
