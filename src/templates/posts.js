import React, { useState, useEffect } from "react"
import Layout from "../layouts/index"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Hero from "../components/hero"
import "./post-grid.css"
import "./posts.css"
import Img from "gatsby-image"

export default function News({ pageContext }) {
  const news = pageContext.group
  useEffect(() => {
    console.log(news)
  })
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
                <p className="active">ALL</p>
                <p>BRANDING</p>
                <p>UX/UI</p>
                <p>STRATEGY</p>
                <p>ANIMATION</p>
                <p>TECHNOLOGY</p>
                <p>WEB DEVELOPMENT</p>
                <p>MARKETING</p>
                <p>WEB DESIGN</p>
              </div>
            </div>

            <div className="mt-5 grid-container">
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
