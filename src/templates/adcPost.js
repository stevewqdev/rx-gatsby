import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from "../components/addCulture/header"
import HeroLine from "../images/addCulture/heroPostLine.svg"
import PostHeroLine from "../images/addCulture/postHeroLine.svg"
import ScrollIndicator from "../images/addCulture/scrollIndicator.svg"
import AuthorLine from "../images/addCulture/authorLine.svg"
import TwitterIcon from "../images/addCulture/socialIcons/button/header/navigation.svg"
import FacebookIcon from "../images/addCulture/socialIcons/button/header/navigation-1.svg"
import LinkedInIcon from "../images/addCulture/socialIcons/button/header/navigation-2.svg"
import ShareIcon from "../images/addCulture/socialIcons/button/header/navigation-3.svg"
import BottomLine from "../images/addCulture/bottomLine.svg"
import "../fonts/addCulture/schnyder/stylesheet.css"
import "./adcPost.css"

export default class AddCulturePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: this.props.data.wordpressWpAddcultureposts,
      featuredPosts: this.props.data.allWordpressWpAddcultureposts.edges,
    }

    this.addHover = this.addHover.bind(this)
    this.removeHover = this.removeHover.bind(this)
    this.addLinkedHover = this.addLinkedHover.bind(this)
    this.removeLinkedHover = this.removeLinkedHover.bind(this)
  }

  formatCategories() {
    let featured = this.state.featuredPosts

    featured.forEach(({ node }) => {
      node.categories.forEach(category => {
        if (category.name === "Minority Owned Agencies") {
          category.name = "Min. Owned Agencies"
        } else if (category.name === "Representation Done Right") {
          category.name = "Rep. Done Right"
        } else if (category.name === "Add Culture Stories") {
          category.name = "Stories"
        }
      })
    })
  }

  navbarChange() {
    document.querySelector(".navbar").style.background = "#222220"
    document.querySelector(
      ".navbarMenuBurger .menuBurgerLineOne"
    ).style.background = "#fcc6c6"
    document.querySelector(
      ".navbarMenuBurger .menuBurgerLineTwo"
    ).style.background = "#fcc6c6"
    document.querySelector(".brand__logo h1").style.color = "#FFC6C6"
    document.querySelector(".storiesLink a").style.color = "#FFC6C6"
    document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
      "#FFC6C6"
    document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
      "#FFC6C6"
  }

  navbarChange() {
    document.querySelector(".navbar").style.background = "#222220"
    document.querySelector(
      ".navbarMenuBurger .menuBurgerLineOne"
    ).style.background = "#fcc6c6"
    document.querySelector(
      ".navbarMenuBurger .menuBurgerLineTwo"
    ).style.background = "#fcc6c6"
    document.querySelector(".brand__logo h1").style.color = "#FFC6C6"
    document.querySelector(".storiesLink a").style.color = "#FFC6C6"
    document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
      "#FFC6C6"
    document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
      "#FFC6C6"
  }

  lightNavbar() {
    document.querySelector(".navbar").style.background = "#e5e5e5"
    document.querySelector(
      ".navbarMenuBurger .menuBurgerLineOne"
    ).style.background = "#222220"
    document.querySelector(
      ".navbarMenuBurger .menuBurgerLineTwo"
    ).style.background = "#222220"
    document.querySelector(".brand__logo h1").style.color = "#222220"
    document.querySelector(".storiesLink a").style.color = "#222220"
    document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
      "#222220"
    document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
      "#222220"
  }

  bgChange() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("postContentAnchor")
      var bodyRect = document.body.getBoundingClientRect(),
        elemRect = element.getBoundingClientRect(),
        offset = elemRect.top - bodyRect.top
      if (elemRect.top < 100) {
        // codigo si el elemento ya llego al top de la pantalla
        document.querySelector(".postWrapper").classList.add("light")
        document.querySelector(".content").classList.add("fontDark")
        document.querySelector(".postExcerpt").classList.add("fontDark")

        //navbar

        document.querySelector(".navbar").style.background = "#e5e5e5"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#222220"
        document.querySelector(".brand__logo h1").style.color = "#222220"
        document.querySelector(".storiesLink a").style.color = "#222220"
        document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
          "#222220"
        document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
          "#222220"
      } else {
        document.querySelector(".postWrapper").classList.remove("light")
        document.querySelector(".content").classList.remove("fontDark")
        document.querySelector(".postExcerpt").classList.remove("fontDark")

        // navbar
        document.querySelector(".navbar").style.background = "#222220"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineOne"
        ).style.background = "#fcc6c6"
        document.querySelector(
          ".navbarMenuBurger .menuBurgerLineTwo"
        ).style.background = "#fcc6c6"
        document.querySelector(".brand__logo h1").style.color = "#FFC6C6"
        document.querySelector(".storiesLink a").style.color = "#FFC6C6"
        document.querySelectorAll(".storiesLink a svg g path")[0].style.fill =
          "#FFC6C6"
        document.querySelectorAll(".storiesLink a svg g path")[1].style.fill =
          "#FFC6C6"
      }
    })
  }

  addLinkedHover(e) {
    let allSocials = document.querySelectorAll(".socials a svg")
    allSocials.forEach((icon, i) => {
      if (i === 2) {
        icon.children[0].classList.add("hoverRect")
        icon.children[1].classList.add("hoverPath")
        icon.children[2].classList.add("hoverPath")
      }
    })
  }

  removeLinkedHover(e) {
    let allSocials = document.querySelectorAll(".socials a svg")
    allSocials.forEach((icon, i) => {
      if (i === 2) {
        icon.children[0].classList.remove("hoverRect")
        icon.children[1].classList.remove("hoverPath")
        icon.children[2].classList.remove("hoverPath")
      }
    })
  }

  addHover(e) {
    let element = e.target.children[0].children
    element[0].classList.add("hoverRect")
    element[1].classList.add("hoverPath")
  }

  removeHover(e) {
    let element = e.target.children[0].children
    element[0].classList.remove("hoverRect")
    element[1].classList.remove("hoverPath")
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.navbarChange()
    this.bgChange()
    this.formatCategories()
    console.log(this.state.post)
  }
  render() {
    return (
      <AddCultureLayout>
        <Header />
        <div className="postWrapper">
          <div className="postHeader">
            <div className="headerContainer">
              <div className="scrollIndicator">
                <ScrollIndicator tabIndex="0" alt="scroll" class="scroll" />
              </div>
              <div className="postHeroContent">
                <div className="categoryContainer">
                  <HeroLine tabIndex="0" alt="line" className="heroLine" />
                  {this.state.post.categories !== null ? (
                    this.state.post.categories[0].name === "Featured" ? (
                      <p>{this.state.post.categories[1].name}</p>
                    ) : (
                      <p>{this.state.post.categories[0].name}</p>
                    )
                  ) : (
                    ""
                  )}
                </div>
                <p className="postHeroDate">{this.state.post.date}—</p>
                <h1 className="postHeroTitle">{this.state.post.title}</h1>
              </div>
              <div className="postHeroImage">
                {this.state.post.featured_media !== null ? (
                  <Img
                    fluid={
                      this.state.post.featured_media.localFile.childImageSharp
                        .fluid
                    }
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            <PostHeroLine tabIndex="0" alt="line" className="bottomLine" />
          </div>

          <div className="anchor" id="postContentAnchor"></div>

          <div className="postContent">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div id="postInfoContainer" className="postInfoContainer">
                    {this.state.post.author !== null ? (
                      <div className="authorContainer">
                        <p className="postAuthor">
                          BY <span>{this.state.post.author.name}</span>
                        </p>
                        <AuthorLine
                          tabIndex="0"
                          alt="Author Line"
                          className="authorLine"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <p
                      className="postExcerpt"
                      dangerouslySetInnerHTML={{
                        __html: this.state.post.excerpt,
                      }}
                    />

                    <div className="socials">
                      <a
                        onMouseEnter={this.addHover}
                        onMouseLeave={this.removeHover}
                        className="socialLink"
                        href="https://twitter.com"
                      >
                        <TwitterIcon tabIndex="0" alt="Twitter" />
                      </a>
                      <a
                        onMouseEnter={this.addHover}
                        onMouseLeave={this.removeHover}
                        className="socialLink"
                        href="https://facebook.com"
                      >
                        <FacebookIcon tabIndex="0" alt="Facebook" />
                      </a>
                      <a
                        onMouseEnter={this.addLinkedHover}
                        onMouseLeave={this.removeLinkedHover}
                        className="socialLink"
                        href="https://linkedin.com"
                      >
                        <LinkedInIcon tabIndex="0" alt="LinkedIn" />
                      </a>
                      <a
                        onMouseEnter={this.addHover}
                        onMouseLeave={this.removeHover}
                        className="socialLink"
                        href="#"
                      >
                        <ShareIcon tabIndex="0" alt="Share" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="postContainer">
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: this.state.post.content,
                      }}
                    />

                    {this.state.post.tags !== null ? (
                      <div className="col-lg-6 col-sm-12">
                        <div className="postTagsContainer">
                          {this.state.post.tags.map(tag => (
                            <Link
                              to={`/add-culture/filter?${tag.slug}`}
                              className="postTag"
                            >
                              {tag.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <BottomLine
              tabIndex="0"
              alt="bottom line"
              className="postBottomLine"
            />
          </div>

          <div className="relatedPostsSection">
            <div className="relatedHeading">
              <p className="wantMore">More News?</p>
              <h2 className="featured">
                Feature this month <br /> on <span>Add Culture</span>
              </h2>
            </div>

            <div className="featuredGrid">
              {this.state.featuredPosts.map(({ node }, i) => (
                <>
                  {i < 3 ? (
                    <Link to={`/add-culture/post/${node.slug}`}>
                      <div className={`adcSinglePost post-${i}`}>
                        <div className="contentContainer">
                          <div className="catAndDateContainer">
                            {node.categories[1] === "Featured" ? (
                              <Link
                                to={`/add-culture/${node.categories[0].slug.toLowerCase()}`}
                                className="postCategory"
                              >
                                {node.categories[0].name}
                              </Link>
                            ) : (
                              <Link
                                to={`/add-culture/${node.categories[1].slug.toLowerCase()}`}
                                className="postCategory"
                              >
                                {node.categories[1].name}
                              </Link>
                            )}
                            <p className="postDate">{node.date}</p>
                          </div>
                          <h2 className="postTitle">{node.title}</h2>
                        </div>

                        {node.featured_media !== null ? (
                          <Img
                            fluid={
                              node.featured_media.localFile.childImageSharp
                                .fluid
                            }
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </AddCultureLayout>
    )
  }
}

export const postQuery = graphql`
  query($id: String!) {
    wordpressWpAddcultureposts(id: { eq: $id }) {
      date(formatString: "MM.DD.YY")
      content
      id
      slug
      title
      excerpt
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      author {
        url
        wordpress_id
        name
        avatar_urls {
          wordpress_24
          wordpress_48
          wordpress_96
        }
      }
      categories {
        name
        slug
      }
      tags {
        id
        name
        slug
      }
    }
    allWordpressWpAddcultureposts(
      filter: { categories: { elemMatch: { slug: { eq: "featured" } } } }
    ) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MM.DD.YY")
          categories {
            name
            slug
          }
          featured_media {
            source_url
            alt_text
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
