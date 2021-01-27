import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Hero from "../components/hero"
import "../templates/post-grid.css"
import "../templates/posts.css"
import Img from "gatsby-image"

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: this.props.data.allWordpressWpNewsPost.edges,
      categories: this.props.data.allWordpressWpNewsCategories.edges,
    }

    this.filterCards = this.filterCards.bind(this)
    this.showAll = this.showAll.bind(this)
  }

  resetContent() {
    const gridContainer = document.getElementById("news")
    gridContainer.innerHTML = ""
  }

  removeActiveClass() {
    let link = document.querySelector(".active")
    if (link) {
      link.classList.remove("active")
    } else {
      return
    }
  }

  showAll(e) {
    // clear grid-container
    // this.resetContent()
    // change activeClass
    this.removeActiveClass()
    // add active class
    e.target.classList.add("active")
    this.setState(
      {
        news: this.props.data.allWordpressWpNewsPost.edges,
      },
      () => {
        console.log(this.state.news)
      }
    )
  }

  filterCards(e) {
    const originalArray = this.props.data.allWordpressWpNewsPost.edges
    const news = []
    const filter = e.target.getAttribute("id")
    // clear grid-container
    // this.resetContent()
    // change activeClass
    this.removeActiveClass()
    e.target.classList.add("active")
    originalArray.forEach(({ node }) => {
      if (node.news_categories[0].slug === filter) {
        news.push(node)
        console.log(news)
        this.setState(
          {
            news: news,
          },
          () => {
            console.log(this.state.news)
          }
        )
      }
    })
  }
  componentDidMount() {
    console.log(this.state.news)
  }
  render() {
    const { categories, news } = this.state
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"The Raxo blog is a place"} />
          <title>RAXO ~ News</title>
          <link rel="canonical" href={"/news"} />
        </Helmet>
        <Hero title="News" classes={"news__hero"} />
        <div className="main__section__wrapper blog__page">
          <div className="blog container__base container container__custom">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div id="filter">
                  <p className="active" onClick={this.showAll}>
                    All
                  </p>
                  {categories
                    ? categories.map(({ node }) => (
                        <p id={node.slug} onClick={this.filterCards}>
                          {node.name}
                        </p>
                      ))
                    : ""}
                </div>
              </div>

              <div id="news" className="mt-5 grid-container">
                {news.map(({ node }) => (
                  <div className="news-card">
                    <div className="news-card-head">
                      {node.featured_media ? (
                        <Img
                          fluid={
                            node.featured_media.localFile.childImageSharp.fluid
                          }
                          alt={node.title}
                          tabIndex={-1}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="news-card-body">
                      <h1 className="news-card-title">{node.title}</h1>
                      <div
                        className="news-card-desc"
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      />
                    </div>
                    <div className="news-card-footer">
                      <div className="date-tags">
                        <p className="date">{node.date}</p>
                        {node.tags
                          ? node.tags.map(tag => (
                              <span className="tags"> #{tag.name}</span>
                            ))
                          : ""}
                      </div>
                      <div className="go-to">
                        <Link to="/">Visit →</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query newsQuery {
    allWordpressWpNewsPost {
      edges {
        node {
          id
          slug
          status
          content
          template
          title
          excerpt
          date(formatString: "MMMM DD, YYYY")
          link
          news_categories {
            slug
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, quality: 80) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            source_url
          }
          tags {
            name
            slug
          }
        }
      }
    }
    allWordpressWpNewsCategories {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
