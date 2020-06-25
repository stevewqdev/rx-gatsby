import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import About from "../components/about/index"
import Img from "gatsby-image"
import SVGONE from "../images/svg/Icon-01.svg"
import SVGTWO from "../images/svg/Icon-02.svg"
import SVGTHREE from "../images/svg/Icon-03.svg"
import SVGFOUR from "../images/svg/Icon-04.svg"
import AOS from "aos"

import "../layouts/pages/about.css"

class ContactPage extends Component {
  changeCity(event) {
    let cityButton = event.target.getAttribute("id")
    let cityElements = [...document.getElementsByClassName(cityButton)]

    ;[...document.getElementsByClassName("button__office")].map(button => {
      button.classList.remove("active")

      return true
    })

    Array.from(document.getElementsByClassName("show")).map(element => {
      element.classList.remove("show")
      element.classList.remove("active")

      return true
    })
    Array.from(document.getElementsByClassName("hide")).map(element => {
      element.classList.remove("hide")
      element.classList.remove("active")

      return true
    })

    event.target.classList.add("active")

    cityElements.map(city => {
      if (city.classList.contains("show")) {
        city.classList.add("hide")
        city.classList.remove("show")
      } else {
        city.classList.add("show")
        city.classList.remove("hide")
      }

      return false
    })
  }
  hideListElements() {
    ;[...document.getElementsByClassName("recognition__list__item")].map(
      element => {
        element.classList.remove("active")

        return false
      }
    )
    Array.from(document.getElementsByClassName("recognition__list__copy")).map(
      element => {
        element.classList.remove("active")

        return false
      }
    )
  }
  toggleListElement(event) {
    let itemId = event.target.getAttribute("id")

    ;[...document.getElementsByClassName("recognition__list__item")].map(
      element => {
        element.classList.remove("active")

        return false
      }
    )

    event.target.classList.add("active")

    ;[...document.getElementsByClassName("recognition__list__copy")].map(
      element => {
        element.classList.remove("active")

        return false
      }
    )

    document.getElementsByClassName(itemId)[0].classList.add("active")
  }
  makeColumnBlack(event) {
    if (event.target.classList.contains("column-0")) {
      event.target.classList.add("colored__column__svg__black")
      document
        .querySelectorAll(".c-f2ab3d")[0]
        .classList.add("c-f2ab3d__column")
      document.getElementById("columns").classList.add("columns__mustard")
      document
        .getElementById("colored_floating")
        .classList.add("colored__floating__hidden")
    }
    if (event.target.classList.contains("column-1")) {
      event.target.classList.add("colored__column__svg__black")
      document
        .querySelectorAll(".c-73faeb")[0]
        .classList.add("c-73faeb__column")
      document.getElementById("columns").classList.add("columns__sky")
      document
        .getElementById("colored_floating")
        .classList.add("colored__floating__hidden")
    }
    if (event.target.classList.contains("column-2")) {
      event.target.classList.add("colored__column__svg__black")
      document
        .querySelectorAll(".c-ea3464")[0]
        .classList.add("c-ea3464__column")
      document.getElementById("columns").classList.add("columns__fuchsia")
      document
        .getElementById("colored_floating")
        .classList.add("colored__floating__hidden")
    }
    if (event.target.classList.contains("column-3")) {
      event.target.classList.add("colored__column__svg__black")
      document
        .querySelectorAll(".c-1d61f5")[0]
        .classList.add("c-1d61f5__column")
      document.getElementById("columns").classList.add("columns__sea")
      document
        .getElementById("colored_floating")
        .classList.add("colored__floating__hidden")
    }
  }
  removeColumnBlack(event) {
    if (event.target.classList.contains("column-0")) {
      event.target.classList.remove("colored__column__svg__black")
      document
        .querySelectorAll(".c-f2ab3d")[0]
        .classList.remove("c-f2ab3d__column")
      document.getElementById("columns").classList.remove("columns__mustard")
      document
        .getElementById("colored_floating")
        .classList.remove("colored__floating__hidden")
    }
    if (event.target.classList.contains("column-1")) {
      event.target.classList.remove("colored__column__svg__black")
      document
        .querySelectorAll(".c-73faeb")[0]
        .classList.remove("c-73faeb__column")
      document.getElementById("columns").classList.remove("columns__sky")
      document
        .getElementById("colored_floating")
        .classList.remove("colored__floating__hidden")
    }
    if (event.target.classList.contains("column-2")) {
      event.target.classList.remove("colored__column__svg__black")
      document
        .querySelectorAll(".c-ea3464")[0]
        .classList.remove("c-ea3464__column")
      document.getElementById("columns").classList.remove("columns__fuchsia")
      document
        .getElementById("colored_floating")
        .classList.remove("colored__floating__hidden")
    }
    if (event.target.classList.contains("column-3")) {
      event.target.classList.remove("colored__column__svg__black")
      document
        .querySelectorAll(".c-1d61f5")[0]
        .classList.remove("c-1d61f5__column")
      document.getElementById("columns").classList.remove("columns__sea")
      document
        .getElementById("colored_floating")
        .classList.remove("colored__floating__hidden")
    }
  }
  parallaxContainer() {
    if (window.innerWidth > 768) {
      window.addEventListener(
        "scroll",
        function() {
          var top =
            (window.pageYOffset || document.scrollTop) -
            (document.clientTop || 0)
          var finalX = top / -7
          if (document.getElementById("about") !== null) {
            document.getElementById(
              "about"
            ).style.transform = `translateY(${finalX}px)`
          }
        },
        { passive: true }
      )
    }
  }

  drawLines() {
    var lines = [...document.querySelectorAll(".includes__separator")]
    if (lines.length > 0) {
      lines.map((line, index) => {
        var isDrawed = false
        if (!isDrawed) {
          window.addEventListener(
            "scroll",
            function() {
              var top =
                (window.pageYOffset || document.scrollTop) -
                (document.clientTop || 0)
              let innerLine = line.querySelectorAll(".separator")[0]
              if (innerLine) {
                if (top + 400 > line.offsetTop) {
                  innerLine.classList.add("full")
                }
              }
            },
            { passive: true }
          )
        }
        return false
      })
    }
  }

  componentDidMount() {
    setTimeout(function() {
      AOS.refreshHard()
    }, 200)

    this.drawLines()
    this.parallaxContainer()

    setTimeout(function() {
      document.querySelectorAll("#about .separator")[0].classList.add("full")
    }, 1500)

    if (window.innerWidth > 768) {
      let lastColoredItems = document.querySelectorAll(".services__list__items")
      Array.from(lastColoredItems).map(element => {
        window.addEventListener(
          "scroll",
          function() {
            var top =
              (window.pageYOffset || document.scrollTop) -
              (document.clientTop || 0)
            let currentColoredElement = element.children[0].children[0]
            if (top > currentColoredElement.offsetTop + 4000) {
              currentColoredElement.classList.add("colored__scroll")
            }
          },
          { passive: true }
        )

        return false
      })
    }

    if (window.innerWidth < 768) {
      let lastColoredItems = document.querySelectorAll(".services__list__items")
      Array.from(lastColoredItems).map(element => {
        let currentColoredElement = element.children[0].children[0]
        currentColoredElement.classList.add("colored__scroll")

        return true
      })
    }
  }
  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf
    const customStyles = `
    .fixed.column__top__one{
      position: absolute!important;
    }
    .fixed.column__top__two{
      position: absolute!important;
    }
    .about__wrapper {
      padding-top: 0;
    }
    .main__section__wrapper{
      margin-top: -100vh;
    }
    #about{
      padding-bottom: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hero__component {
      margin-top: 350px;
      position: relative;
    }
    @media(max-width: 4000px){
      #offices{
        margin-top: 0px;
      }
    }
    .top__below__about{
      margin: 150px 0 150px;
    }
    .top__below__about .hero__extra__info{
      margin-top: 70px;
    }
    @media(max-width: 1024px){
      .top__below__about {
        margin: 80px 0 80px;
      }
    }
    @media(max-width: 500px){
      .main__section__wrapper { 
        margin-top: -105vh;
      }
      #about .xmd__font {
        font-size: 20px!important;
        line-height: 28px;
        margin: 0;
        letter-spacing: -1px;
      }
      .offices__two__copy {
        margin-bottom: 50px;
      }
      .top__below__about {
        margin: 60px 0 0px;
      }
      .service__list__4{
        margin-top: 50px;
      }
      .service__list__4 .colored__scroll{
        margin-bottom: 0px;
      }
      .colored__scroll{
        margin-bottom: 20px;
      }
    }
    @media (max-width: 820px) and (orientation: landscape) {
      #about{
        padding: 130px 0 50px;
      }
    }
    `

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <style>{customStyles}</style>
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

        <div className="main__section__wrapper">
          <About
            customCopy={pageAcf.main_about_copy}
            fontSize={`xmd__font`}
          ></About>
          <section id="columns">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 colored__floating"
                  id="colored_floating"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`100`}
                    data-aos-duration="1200"
                    className="row reg__font sm__font"
                    dangerouslySetInnerHTML={{ __html: pageAcf.colored_copy }}
                  />
                </div>

                <div className="col-lg-12 divider"></div>
                <div className="colored__columns__wrapper">
                  {pageAcf.colored_columns.map((column, index) => (
                    <div
                      className={`col-xs-6 col-sm-6 col-md-3 col-lg-3 colored__column column-${index} order-${index} c-${column.color.replace(
                        "#",
                        ""
                      )} `}
                      key={index}
                      onMouseEnter={this.makeColumnBlack}
                      onMouseLeave={this.removeColumnBlack}
                    >
                      <div>
                        {index === 0 ? (
                          <div className="column__svg">
                            <SVGONE
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            ></SVGONE>
                            <div
                              className="colored__sub__svg"
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            >
                              <div
                                className="row reg__font "
                                dangerouslySetInnerHTML={{
                                  __html: column.copy,
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {index === 1 ? (
                          <div className="column__svg">
                            <SVGTWO
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            ></SVGTWO>
                            <div
                              className="colored__sub__svg"
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            >
                              <div
                                className="row reg__font "
                                dangerouslySetInnerHTML={{
                                  __html: column.copy,
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {index === 2 ? (
                          <div className="column__svg">
                            <SVGTHREE
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            ></SVGTHREE>
                            <div
                              className="colored__sub__svg"
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            >
                              <div
                                className="row reg__font "
                                dangerouslySetInnerHTML={{
                                  __html: column.copy,
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {index === 3 ? (
                          <div className="column__svg">
                            <SVGFOUR
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            ></SVGFOUR>
                            <div
                              className="colored__sub__svg"
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay={`${(index + 1) * 130}`}
                              data-aos-duration="1200"
                            >
                              <div
                                className="row reg__font "
                                dangerouslySetInnerHTML={{
                                  __html: column.copy,
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="colored__column__copy">
                        <div
                          className="row reg__font "
                          dangerouslySetInnerHTML={{ __html: column.copy }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="top__below__about">
            <div className="container container__custom">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 hero__title no__padding">
                  <div className="separator --black "></div>
                  {pageAcf.top_title ? (
                    <h1
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="500"
                      data-aos-duration="1200"
                      className="xxl__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.top_title }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 no__padding"></div>
            </div>
          </section>

          <section id="offices">
            <div className="container container__custom">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 no__padding"></div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-6 hero__extra__info no__padding">
                  {pageAcf.about_copy ? (
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="700"
                      data-aos-duration="1200"
                      className="sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.about_copy }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 no__padding"></div>
              </div>
              <div className="row offices__one">
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                {/* <div className="col-s-12 col-sm-12 col-md-3 col-lg-3 offices__first__copy">
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`200`}
                      data-aos-duration="1200"
                      className="row reg__font sm__font reg__font"
                      dangerouslySetInnerHTML={{ __html: pageAcf.pre_office_copy }}
                    />
                  </div> */}
              </div>
              <div className="row offices__two">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 offices__two__copy">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`250`}
                    data-aos-duration="1200"
                    className="row reg__font sm__font reg__font"
                    className="row reg__font sm__font reg__font"
                    dangerouslySetInnerHTML={{ __html: pageAcf.office_copy }}
                  />
                  <div className="location__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.763"
                      height="18.003"
                      viewBox="0 0 14.763 18.003"
                    >
                      <path
                        id="Trazado_65"
                        data-name="Trazado 65"
                        d="M10883.708,3645.969c4.053-4.24,1.889-11.487-3.895-12.459a8.886,8.886,0,0,0-1.487-.124q-.369,0-.73.029c-6.194.5-8.765,8.279-4.37,12.674l5.3,5.3Z"
                        transform="translate(-10871.027 -3633.386)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9  no__padding">
                  {pageAcf.office_photo ? (
                    <Img
                      fluid={
                        pageAcf.office_photo.localFile.childImageSharp.fluid
                      }
                      alt={`Raxo's office photo`}
                      tabIndex={-1}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row offices__three">
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3  no__padding">
                  {pageAcf.offices.map((office, index) => (
                    <div
                      className={`${office.city
                        .replace(/ /g, "")
                        .toLowerCase()} office__name ${
                        index === 0 ? "active show" : "floating__element hide"
                      } `}
                      key={index}
                    >
                      <p className="md__font bold__font">Office</p>
                      <h3 className="lg__font bold__font">{office.city}</h3>
                    </div>
                  ))}
                  <div className="offices__buttons">
                    {pageAcf.offices.map((office, index) => (
                      <div
                        className={`button__office ${
                          index === 0 ? "active" : "second__button"
                        }`}
                        id={office.city.replace(/ /g, "").toLowerCase()}
                        key={index}
                        onClick={this.changeCity}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-s-12 col-sm-12 col-md-3 col-lg-3"></div>
              </div>
              <div className="row offices__four">
                {pageAcf.offices.map((office, index) => (
                  <div
                    className={`no__padding ${office.city
                      .replace(/ /g, "")
                      .toLowerCase()} col-s-12 col-sm-12 col-md-12 col-lg-12 office__photo ${
                      index === 0 ? "active show" : "floating__element hide"
                    }`}
                    key={index}
                  >
                    {office.photo ? (
                      <Img
                        fluid={office.photo.localFile.childImageSharp.fluid}
                        alt={`Raxo's office photo`}
                        tabIndex={-1}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="we_can_help">
            <div className="container container__custom">
              <div className="row">
                <div className="col-lg-12 no__padding">
                  <h2
                    className="xxl__font bold__font"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`250`}
                    data-aos-duration="1200"
                  >
                    {pageAcf.services}
                  </h2>
                </div>
              </div>
              <div className="row services">
                {pageAcf.services_info.map((services, index) =>
                  index % 2 === 0 ? (
                    <div
                      className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 includes__separator services__list no__padding c-${services.hover_color.replace(
                        "#",
                        ""
                      )} service__list__${index}`}
                      key={index}
                    >
                      <div className="separator --white"></div>
                      <div className="services__list__subtitle">
                        <p
                          className="reg__font sm__font"
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`270`}
                          data-aos-duration="1200"
                          data-aos-offset="320"
                        >
                          {services.subtitle}
                        </p>
                      </div>
                      <div className="services__list__items">
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`290`}
                          data-aos-duration="1200"
                          data-aos-offset="320"
                          className="row lg__font bold__font "
                          dangerouslySetInnerHTML={{
                            __html: services.services_list,
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`col-xs-12 col-sm-12 col-md-6 includes__separator col-lg-6 services__list lower__list no__padding service__list__${index} c-${services.hover_color.replace(
                        "#",
                        ""
                      )}`}
                      key={index}
                    >
                      <div className="separator --white"></div>
                      <div className="services__list__subtitle">
                        <p
                          className="reg__font sm__font"
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`270`}
                          data-aos-duration="1200"
                          data-aos-offset="320"
                        >
                          {services.subtitle}
                        </p>
                      </div>
                      <div className="services__list__items">
                        <div
                          data-aos="fade-up"
                          data-aos-easing="ease-in-back"
                          data-aos-delay={`290`}
                          data-aos-duration="1200"
                          data-aos-offset="320"
                          className="row lg__font bold__font "
                          dangerouslySetInnerHTML={{
                            __html: services.services_list,
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
          <section id="recognition">
            <div className="container container__custom recognition__wrapper">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 recognition__one no__padding">
                  <h3
                    className="xxl__font bold__font"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`290`}
                    data-aos-duration="1200"
                  >
                    {pageAcf.recognition_title}
                  </h3>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`360`}
                    data-aos-duration="1200"
                    className="row sm__font reg__font recognition__one__copy"
                    dangerouslySetInnerHTML={{
                      __html: pageAcf.recognition_copy,
                    }}
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 recognition__two no__padding"></div>
              </div>
            </div>
          </section>
          <section id="recognition_list">
            <div className="container container__custom">
              <div className="row">
                <div className="col-lg-12 no__padding">
                </div>
              </div>
              <div className="row recognition__list__wrapper">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 recognition__list__one no__padding">
                  {pageAcf.recognition_list.map((item, index) => (
                    <div
                      className={`recognition__list__item `}
                      key={index}
                      id={`tab-rec-${index}`}
                      onMouseEnter={this.toggleListElement}
                      onMouseLeave={this.hideListElements}
                    >
                      <h3
                        className="lg__font bold__font"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 100}`}
                        data-aos-duration="1200"
                      >
                        {item.title}
                      </h3>
                      <h3
                        className="lg__font bold__font"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay={`${(index + 1) * 150}`}
                        data-aos-duration="1200"
                      >
                        {item.amount}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 recognition__list__two no__padding">
                  {pageAcf.recognition_list.map((item, index) => (
                    <div
                      className={`row sm__font reg__font recognition__one__copy recognition__list__copy tab-rec-${index}`}
                    >
                      <div
                        className={` `}
                        dangerouslySetInnerHTML={{ __html: item.details }}
                      />
                      <svg
                        id="Componente_53_1"
                        data-name="Componente 53 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="36.061"
                        height="36.061"
                        viewBox="0 0 36.061 36.061"
                      >
                        <circle
                          id="Elipse_3"
                          data-name="Elipse 3"
                          cx="18.03"
                          cy="18.03"
                          r="18.03"
                          fill="#fff"
                        />
                        <path
                          id="Trazado_70"
                          data-name="Trazado 70"
                          d="M10889.058,8070.985l2.2,6.783h7.133l-5.771,4.192,2.2,6.783-5.77-4.192-5.771,4.192,2.2-6.783-5.77-4.192h7.132Z"
                          transform="translate(-10871.028 -8062.771)"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="recognition">
            <div className="container container__custom recognition__wrapper chose__us">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 recognition__one no__padding">
                  <h3
                    className="xxl__font bold__font"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`100`}
                    data-aos-duration="1200"
                  >
                    {pageAcf.clients_title}
                  </h3>
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay={`250`}
                    data-aos-duration="1200"
                    className="row sm__font reg__font recognition__one__copy"
                    dangerouslySetInnerHTML={{ __html: pageAcf.clients_copy }}
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 recognition__two select__clients no__padding">
                  <div
                    className="row sm__font reg__font recognition__one__copy"
                    dangerouslySetInnerHTML={{
                      __html: pageAcf.clients_second_copy,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="clients">
            <div className="container container__custom">
              <div className="row">
                {pageAcf.clients_logos.map((client, index) =>
                  client.logo ? (
                    <div
                      className="col-xs-4 col-sm-4 col-md-3 col-lg-3 client__logo"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <img
                        loading="lazy"
                        src={client.logo.localFile.url}
                        alt="Client Logo"
                      />
                    </div>
                  ) : (
                    ""
                  )
                )}
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
  query AboutPageQuery {
    allWordpressPage(filter: { slug: { eq: "about" } }) {
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
          acf {
            top_title
            first_subtitle
            second_subtitle
            main_about_copy
            video_background {
              id
            }
            fallback_image {
              id
            }
            section_color
            about_copy
            colored_copy
            colored_columns {
              copy
              color
            }
            offices {
              city
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                  url
                }
              }
            }
            pre_office_copy
            office_copy
            office_photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            services
            services_info {
              subtitle
              services_list
              hover_color
            }
            recognition_title
            recognition_copy
            recognition_list {
              title
              amount
              details
            }
            clients_title
            clients_copy
            clients_second_copy
            clients_logos {
              logo {
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
