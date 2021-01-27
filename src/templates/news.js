import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Hero from "../components/hero"
import "./post-grid.css"
import "./posts.css"
import Img from "gatsby-image"

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: this.props.pageContext.group,
      categories: this.props.data.allWordpressWpNewsCategories.edges,
      isLoaded: true,
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
    // change activeClass
    this.removeActiveClass()
    // add active class
    e.target.classList.add("active")
    this.setState(
      {
        news: this.props.pageContext.group,
      },
      function() {
        console.log(this.state.news)
      }
    )
  }

  filterCards(e) {
    const originalArray = this.props.pageContext.group
    const news = []
    const filter = e.target.getAttribute("id")
    // change activeClass
    this.removeActiveClass()
    e.target.classList.add("active")
    originalArray.forEach(post => {
      if (post.node.news_categories[0].slug === filter) {
        news.push(post)
        this.setState({ news: news }, () => {
          console.log(this.state.news)
        })
      }
    })
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
                  <a target="_blank" href={node.acf.link}>
                    <div className="news-card">
                      <div className="news-card-head">
                        {node.featured_media ? (
                          <Img
                            fluid={
                              node.featured_media.localFile.childImageSharp
                                .fluid
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
                          <a target="_blank" href={node.acf.link}>
                            Visit →
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
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
