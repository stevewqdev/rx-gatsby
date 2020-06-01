
import React, { useState, useEffect } from 'react';
import Layout from "../layouts/index"
import Link from 'gatsby-link'
import Hero from "../components/hero/index"
import PaginationController from '../components/blog/paginationController/index'
import {Helmet} from "react-helmet"; 



const PostsIndex = ({ pageContext }) => {
const { group, index, first, last, pageCount } = pageContext
const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString()
const nextUrl = (index + 1).toString()

useEffect(() => {
  document.querySelectorAll(".footer")[0].classList.add("dark");
  document.querySelectorAll(".separator")[0].classList.remove("--black");
  document.querySelectorAll(".separator")[0].classList.add("--white");
});

return (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ "The Raxo blog is a place" }/>
            <title>RAXO ~ News</title>
            <link rel="canonical" href={ "/news"} />
        </Helmet>
        <Hero 
            theme={"dark"}
            image={""} 
            video={""}
            title={"The News"}
            firstSubtitle={"news title one"}
            secondSubtitle={"news title two"}
          >
        </Hero>
        <div className="main__section__wrapper">
          <div className="blog container__base container container__custom">
              <div className="listed__counter container__base">
                  <div className="row">
                    <h5><span>{pageCount}</span> Total pages - </h5> 
                    <h5><span>{pageCount * 3}</span> Total Results</h5>
                  </div>
              </div>
              {group.map(({ node }, index) => (
                  <div key={node.id}  className={index % 2 === 0 ? 'blog__list --right container__base' : 'blog__list --left container__base'}  >
                      <div className="row">
                        <div className={node.featured_media ? 'list__post__info --half__width' : 'list__post__info --full__width '  }>
                          <p className="list__post__date"><small><b>{node.date}</b></small></p>
                          <Link to={`/news/${node.slug}`} >
                            <h1 className="list__post__title" dangerouslySetInnerHTML={{__html: node.title}}/>
                          </Link>
                          {
                            node.content !== 'undefined'
                            ? <div className="list__post__excerpt " dangerouslySetInnerHTML={{__html: node.content.substring(0, 280) }}/>
                            : ''
                          }
                          <div className="list__post__author">
                            <p><small><b>by {node.author.name}</b></small></p>
                          </div>
                        </div>
                        {
                          node.featured_media
                          ?
                          <div className="list__post__image --half__width">
                            <Link to={`/news/${node.slug}`}  >
                              <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
                            </Link>
                          </div>
                          : ''
                        }
                      </div>
                  </div>
              ))}
              <PaginationController 
                  next={last} indexNextPage={nextUrl} nextUrl={`/blog/${nextUrl}`} 
                  previous={first} indexPrevPage={previousUrl} previousUrl={`/blog/${previousUrl}`} 
                  customClass={'blog__pagination__controller'}
                  pageTotal={pageCount}
              >
              </PaginationController>
              <Link to={`../`}>
                <button className={`btn btn-default sm__font reg__font inner__post__return__button`}>
                    Return to Blog
                </button>
              </Link>
          </div> 
        </div>
    </Layout>
  )
} 
export default PostsIndex

