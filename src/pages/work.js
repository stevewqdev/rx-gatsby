import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import Hero from "../components/hero/index"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import AOS from "aos"
import Img from "gatsby-image"

import "../layouts/pages/work.css"

class ContactPage extends Component {
  hrefRedirect() {
    let aElements = [...document.querySelectorAll(".work__list a")]

    aElements.forEach(element => {
      element.addEventListener("click", function(event) {
        event.preventDefault()
        document
          .querySelectorAll(".page__wrapper")[0]
          .classList.add("on-transition")

        let redirectLink = event.target.getAttribute("href")
        setTimeout(function() {
          if (redirectLink === null) {
            window.location.href = `/`
          } else {
            if (
              redirectLink.includes("facebook") ||
              redirectLink.includes("twitter") ||
              redirectLink.includes("instagram") ||
              redirectLink.includes("behance") ||
              redirectLink.includes("vimeo")
            ) {
            } else {
              window.location.href = `${event.target.getAttribute("href")}`
            }
          }
        }, 10)
      })
    })
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
          if (document.getElementById("work__list__project") !== null) {
            document.getElementById(
              "work__list__project"
            ).style.transform = `translateY(${finalX}px)`
          }
        },
        { passive: true }
      )
    }
  }
  componentDidMount() {
    setTimeout(function() {
      AOS.refreshHard()
    }, 200)

    this.parallaxContainer()
    document.querySelectorAll(".footer")[0].classList.add("dark")
    document.querySelectorAll(".separator")[0].classList.remove("--black")
    document.querySelectorAll(".separator")[0].classList.add("--white")
  }

  render() {
    const pageData = this.props.data.allWordpressPage.edges[0].node
    const pageAcf = this.props.data.allWordpressPage.edges[0].node.acf
    const latestProjects = this.props.data.allWordpressWpProjects.edges

    const customStyles = `
    .floating__web__info .copy__one__column p {
      width: 100%;
    }
    @media(max-width: 768px){
      .floating__web__info .copy__one__column p {
        width: 160%;
      }
    }
    @media(max-width: 768px){
      .floating__web__info .copy__one__column p {
        width: 170%;
      }
    }
    .hero__component .hero__subtitle {
      padding-top: 0px;
    }
    .hero__title h1{
      display: none;
    }
    .fixed.column__top__one{
      position: absolute!important;
    }
    .fixed.column__top__two{
      position: absolute!important;
    }
    .hero__component {
      position: relative;
      min-height: 500px;
      margin-top: -100vh;
      padding-top: 150px;
      padding-bottom: 0px;
    }
    .main__section__wrapper {
      background: #000000;
    }

    @media(max-width: 4000px){
      .hero__component {
        margin-top: -105vh;
        min-height: 480px;
      }
      .work__list .row{
        max-width: 1250px;
        margin: auto;
      }
      .hero__component .row {
        max-width: 1250px;
        margin: auto;
      }
    }
    @media(max-width: 2600px){

    }
    @media(max-width: 2000px){
      .hero__component {
        margin-top: -111vh;
        min-height: 480px;
      }
    }
    @media(max-width: 1700px){
      .work__list .row{
        max-width: 890px;
        margin: auto;
      }
    }
    .hero__component .separator {
      margin-bottom: 23px;
    }
    @media(max-width: 1024px){
      .work__list .row{
        max-width: 685px;
        margin: auto;
      }
      .work__list__project a {
        height: 355px;
      }
      .hero__component {
        margin-top: -102vh;
        min-height: 370px;
      }
    }
    @media(max-width: 768px){
      .work__list__project a {
        height: auto;
      }
      .hero__component {
        margin-top: -100vh;
        min-height: 200px;
      }
    }
    @media(max-width: 500px){
      .work__list .container__custom{
        padding: 0 25px 0 27px;
      }
    }

    }
    `
    return (
      <Layout>
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
          <style>{customStyles}</style>
        </Helmet>
        <div className="main__section__wrapper">
          <Hero
            theme={pageAcf.section_color}
            image={pageAcf.fallback_image}
            video={pageAcf.video_background}
            title={pageAcf.top_title}
            firstSubtitle={pageAcf.first_subtitle}
            secondSubtitle={pageAcf.second_subtitle}
            classes={"workPage"}
          ></Hero>
          <section className="work__list">
            <div className="container container__custom workPage">
              <div className="row">
                {latestProjects.map((project, index) => (
                  <div
                    className={`col-xs-6 col-sm-6 col-md-6 pgrid__base__thumbnail --pr-one no__padding work__list__project project-${index}`}
                    key={index}
                  >
                    <div
                      className="work__list__project__img"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay={`${(index + 1) * 100}`}
                      data-aos-duration="1200"
                    >
                      <Link to={`/project/${project.node.slug.toLowerCase()}`}>
                        {project.node.acf.thumbnail_image.localFile !== null ? (
                          <>
                            {project.node.acf.thumbnail_image.localFile
                              .childImageSharp !== null ? (
                              <>
                                <Img
                                  fluid={
                                    project.node.acf.thumbnail_image.localFile
                                      .childImageSharp.fluid
                                  }
                                  alt={`${project.node.title}`}
                                  tabIndex={-1}
                                />
                              </>
                            ) : (
                              <img
                                src={`${project.node.acf.thumbnail_image.localFile.url}`}
                                alt={`${project.node.title}`}
                              />
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </Link>
                      <div className="work__list__project__info">
                        <p
                          className="bold__font md__font work__list__title"
                          dangerouslySetInnerHTML={{
                            __html: project.node.title,
                          }}
                        />
                        <p className=" reg__font sm__font work__list__description">
                          {project.node.acf.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
  query WorkQuery {
    allWordpressWpProjects(sort: { fields: date }) {
      edges {
        node {
          title
          slug
          acf {
            subtitle
            thumbnail_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                url
              }
            }
            featured_image {
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
        }
      }
    }
    allWordpressPage(filter: { slug: { eq: "work" } }) {
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
  }
`
