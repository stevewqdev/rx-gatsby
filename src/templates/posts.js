
import React, { useState, useEffect } from 'react';
import Layout from "../layouts/index"
import Link from 'gatsby-link'
import Hero from "../components/hero/index"
import PaginationController from '../components/blog/paginationController/index'
import {Helmet} from "react-helmet"; 
import "./post-grid.css"


const PostsIndex = ({ pageContext }) => {
const { group, index, first, last, pageCount } = pageContext
const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString()
const nextUrl = (index + 1).toString()
const [pages, setPages] = useState(Math.floor(parseInt(group.length) / 10));

useEffect(() => {
  console.log(pages);
});

return (
    <Layout>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ "The Raxo blog is a place" }/>
            <title>RAXO ~ News</title>
            <link rel="canonical" href={ "/news"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <div className="blog container__base container container__custom">
              <div className="template__one">
                <div class={`grid grid-10`}>
                  <div></div>
                  {group.map(({ node }, index) => 
                    <>
                      {
                        index  < 10
                        ?
                        <div>
                          <Link to={`/news/${node.slug}`}  >
                            <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
                          </Link>
                        </div>
                        :""
                      }
                    </>
                  )}
                </div>
              </div>
          </div> 
        </div>
    </Layout>
  )
} 
export default PostsIndex

