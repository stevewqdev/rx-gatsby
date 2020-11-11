import React, { Component } from "react"
import Header from "../components/addCulture/header"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import AddCultureHero from "../components/addCulture/hero/index"
import Identity from "../components/addCulture/identity/index"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import MouseTooltip from "react-sticky-mouse-tooltip"
import ReactPaginate from "react-paginate"
import Img from "gatsby-image"
import AddCultureSlider from "../components/addCulture/slider/index"
import PopularSlider from "../components/addCulture/slider/popular"
import ScrollIndicator from "../images/addCulture/scrollIndicator.svg"
import ScrollIndicatorDark from "../images/addCulture/scrollIndicatorDark.svg"
import PopularLeftMark from "../images/addCulture/popularLeftMark.svg"
import PopularRightMark from "../images/addCulture/popularRIghtMark.svg"
import "./posts.css"
import AOS from "aos"

// var scrollListener = new ScrollListener();

export default class PostsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMouseTooltipVisible: false,
      posts: this.props.data.allWordpressWpAddcultureposts.edges,
      featuredPosts: [],
      popularPosts: [],
      offset: 0,
      perPage: 8,
      currentPage: 0,
    }

    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
  }

  // navbarHandler() {
  //   window.addEventListener('scroll', function() {
  //     let element = document.querySelector('.navbar');
  //     var bodyRect = document.body.getBoundingClientRect(),
  //       elemRect = element.getBoundingClientRect(),
  //       offset = elemRect.top - bodyRect.top;

  //       if(elemRect.top === )

  //   })
  // }

  featuredHandler() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("featured")
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (elemRect.top < 100) {
        // codigo si el elemento ya llego al top de la pantalla
        document.querySelector(".navbar").style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#fcc6c6"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#fcc6c6"
        document.querySelector(".brand__logo h1").style.color = "#fcc6c6"
        document.querySelector(".explore").style.color = "#fcc6c6"
      } else {
        document.querySelector(".navbar").style.background = "#adaea5"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#222220"
        document.querySelector(".brand__logo h1").style.color = "#222220"
        document.querySelector(".explore").style.color = "#222220"
      }
    })
  }

  postsScrollHandler() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("postsAnchor")
      let posts = document.querySelectorAll(".adcSinglePost")
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (elemRect.top < 100) {
        // codigo si el elemento ya llego al top de la pantalla
        document.querySelector(".navbar").style.background = "#e5e5e5"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#222220"
        document.querySelector(".brand__logo h1").style.color = "#222220"
        document.querySelector(".explore").style.color = "#222220"
        document.querySelector(".addCultureContainer").classList.add("light")
        posts.forEach(post => {
          post.classList.remove("adcSinglePostDark")
          post.children[0].children[0].children[1].style.color = "#222220"
        })
      } else {
        document.querySelector(".addCultureContainer").classList.remove("light")
        document.getElementById("blogPosts").classList.remove("lightFont")
        posts.forEach(post => {
          post.classList.add("adcSinglePostDark")
          post.children[0].children[0].children[1].style.color = "#e5e5e5"
        })
      }
    })
  }

  popularScrollhandler() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("popularAnchor")
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (elemRect.top < 100) {
        // codigo si el elemento ya llego al top de la pantalla
        document.querySelector(".navbar").style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#fcc6c6"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#fcc6c6"
        document.querySelector(".brand__logo h1").style.color = "#fcc6c6"
        document.querySelector(".explore").style.color = "#fcc6c6"
        document.querySelector(".addCultureContainer").classList.remove("light")
      }
    })
  }

  identityScrollhandler() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("identityAnchor")
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (elemRect.top < 100) {
        // codigo si el elemento ya llego al top de la pantalla
        document.querySelector(".navbar").style.background = "#adaea5"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#222220"
        document.querySelector(".brand__logo h1").style.color = "#222220"
        document.querySelector(".explore").style.color = "#222220"
        document.querySelector(".addCultureContainer").classList.add("gray")
      } else {
        document.querySelector(".addCultureContainer").classList.remove("gray")
      }
    })
  }

  categoriesScrollhandler() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("categoriesAnchor")
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top

      if (elemRect.top < 100) {
        // codigo si el elemento ya llego al top de la pantalla
        document.querySelector(".navbar").style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#fcc6c6"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#fcc6c6"
        document.querySelector(".brand__logo h1").style.color = "#fcc6c6"
        document.querySelector(".explore").style.color = "#fcc6c6"
        document.querySelector(".addCultureContainer").classList.remove("gray")
      }
    })
  }

  showTooltip(event) {
    const tooltip = document.getElementById(`${event.target.id}-container`)
    tooltip.classList.add("show")
    this.setState(prevState => ({
      isMouseTooltipVisible: !prevState.isMouseTooltipVisible,
    }))
  }

  hideTooltip(event) {
    const tooltip = document.getElementById(`${event.target.id}-container`)
    tooltip.classList.remove("show")
    this.setState(prevState => ({
      isMouseTooltipVisible: !prevState.isMouseTooltipVisible,
    }))
  }

  formatData() {
    const data = this.state.posts
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    )
    const postData = slice.map(({ node }, i) => (
      <React.Fragment>
        <Link to={`/add-culture/post/${node.slug}`}>
          <div
            data-aos="fade-up"
            data-duration="4000"
            className={`adcSinglePost post-${i}`}
          >
            <div className="contentContainer">
              <div className="catAndDateContainer">
                <Link
                  to={`/add-culture/post/${node.categories[0].slug.toLowerCase()}`}
                  className="postCategory"
                >
                  {node.categories[0].name}
                </Link>
                <p className="postDate">{node.date}</p>
              </div>
              <h2 className="postTitle">{node.title}</h2>
            </div>

            {node.featured_media.localFile.childImageSharp !== null ? (
              <Img
                fluid={node.featured_media.localFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
          </div>
        </Link>
      </React.Fragment>
    ))

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData,
    })
  }

  handlePageClick = e => {
    const selectedPage = e.selected
    console.log(this.state.perPage)
    const offset = selectedPage * this.state.perPage

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.formatData()
      }
    )
  }

  componentDidMount() {
    document.querySelector(".navbar").style.background = "#adaea5"
    this.formatData()
    this.featuredHandler()
    this.postsScrollHandler()
    this.popularScrollhandler()
    this.identityScrollhandler()
    this.categoriesScrollhandler()
    AOS.init()
  }

  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"The Raxo blog is a place"} />
          <title>Add Culture ~ Blog</title>
          <link rel="canonical" href={"/news"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <Header />
          <AddCultureHero />
          <div className="addCultureContainer">
            <div id="featured" className="featuredContent">
              <svg
                className="featuredLine"
                width="1920"
                height="902"
                viewBox="0 0 1920 902"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-574 138.186C-423.06 20.3917 -218.503 -25.6335 -31.669 16.1161C113.117 48.4859 242.484 129.254 360.17 219.603C534.405 353.358 689.664 510.619 865.063 642.829C1040.46 775.04 1243 883.79 1462.09 899.08C1681.48 914.391 1895.26 835.459 2101 757.78"
                  stroke="#FFC6C6"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
              </svg>
              <div className="container-fluid">
                <h1
                  data-aos="fade-left"
                  data-duration="4000"
                  className="featuredText"
                >
                  FEATURED <br /> THIS <br /> MONTH
                </h1>
                <AddCultureSlider
                  className="slider"
                  featured={this.props.data.allWordpressWpAddcultureposts.edges}
                />
              </div>
            </div>

            <div className="anchor" id="postsAnchor"></div>

            <div id="blogPosts" className="addCultureBlogPosts">
              <div className="container-fluid">
                <div className="row">
                  <div
                    data-aos="fade-left"
                    data-duration="4000"
                    className="scrollIndicatorDark"
                  >
                    <ScrollIndicatorDark tabIndex="0" alt="Scroll" />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="postsGrid">
                      {this.state.postData}
                      <ReactPaginate
                        previousLabel={""}
                        nextLabel={""}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="anchor" id="popularAnchor"></div>

            <div id="popular" className="popular">
              <div className="container-fluid">
                <div className="scrollIndicator">
                  <ScrollIndicator tabIndex="0" alt="Scroll" />
                </div>
                <div className="popularContent">
                  <PopularRightMark
                    className="popularRightMark"
                    tabIndex="0"
                    alt="left mark"
                  />
                  <h1
                    data-aos="fade-right"
                    data-duration="4000"
                    className="popularHeading"
                  >
                    POPULAR <br /> THIS <br /> MONTH
                  </h1>
                  <PopularSlider
                    popular={
                      this.props.data.allWordpressWpAddcultureposts.edges
                    }
                  />
                  <PopularLeftMark
                    className="popularLeftMark"
                    tabIndex="0"
                    alt="left mark"
                  />
                </div>
              </div>
            </div>

            <div className="anchor" id="identityAnchor"></div>

            <Identity />

            <div className="categories" id="categoriesAnchor"></div>

            <div id="categories" className="blogCategories">
              <div className="categoriesHeader">
                <p data-aos="fade-right" data-duration="4000">
                  MORE IS MORE
                </p>
                <h1
                  data-aos="fade-left"
                  data-duration="4500"
                  className="categoriesHeading"
                >
                  OUR BLOG <br /> <span>OUR CATEGORIES.</span>
                </h1>
              </div>
              <div className="categoriesNav">
                <Link
                  data-aos="fade-down"
                  data-duration="4000"
                  to="/add-culture/minority"
                  onMouseEnter={this.showTooltip}
                  onMouseLeave={this.hideTooltip}
                  className="categorySelector"
                  id="categoryOne"
                >
                  <p className="categoryNumber">01</p>
                  <h2 className="categoryName">
                    MINORITY <br /> OWNED <br /> AGENCIES
                  </h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}
                >
                  <div
                    className="category minorityImg"
                    id="categoryOne-container"
                  ></div>
                </MouseTooltip>
                <Link
                  data-aos="fade-down"
                  data-duration="4400"
                  to="/add-culture/why"
                  onMouseEnter={this.showTooltip}
                  onMouseLeave={this.hideTooltip}
                  className="categorySelector"
                  id="categoryThree"
                >
                  <p className="categoryNumber">02</p>
                  <h2 className="categoryName">
                    WHY <br /> AD+D <br /> CULTURE
                  </h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}
                >
                  <div
                    className="category whyImg"
                    id="categoryThree-container"
                  ></div>
                </MouseTooltip>
                <Link
                  data-aos="fade-down"
                  data-duration="4600"
                  to="/add-culture/stories"
                  onMouseEnter={this.showTooltip}
                  onMouseLeave={this.hideTooltip}
                  className="categorySelector"
                  id="categoryFour"
                >
                  <p className="categoryNumber">03</p>
                  <h2 className="categoryName">
                    AD+D <br /> CULTURE <br /> STORIES
                  </h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}
                >
                  <div
                    className="category storiesImg"
                    id="categoryFour-container"
                  ></div>
                </MouseTooltip>
                <Link
                  data-aos="fade-down"
                  data-duration="4800"
                  to="/add-culture/representation"
                  onMouseEnter={this.showTooltip}
                  onMouseLeave={this.hideTooltip}
                  className="categorySelector"
                  id="categoryFive"
                >
                  <p className="categoryNumber">04</p>
                  <h2 className="categoryName">
                    REPRESENTATION <br /> DONE RIGHT
                  </h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}
                >
                  <div
                    className="category representationImg"
                    id="categoryFive-container"
                  ></div>
                </MouseTooltip>
              </div>
            </div>
          </div>
        </div>
      </AddCultureLayout>
    )
  }
}

export const blogQuery = graphql`
  query addCultureQuery {
    allWordpressWpAddcultureposts {
      edges {
        node {
          title
          slug
          date(formatString: "MM.DD.YY")
          categories {
            name
            slug
          }
          featured_media {
            id
            source_url
            localFile {
              id
              childImageSharp {
                fluid(maxWidth: 1000, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          yoast_meta {
            yoast_wpseo_canonical
            yoast_wpseo_title
            yoast_wpseo_metadesc
          }
        }
      }
    }
  }
`
