
import React, { useState, useEffect } from 'react';
import Layout from "../layouts/index"
import Link from 'gatsby-link'
import Hero from "../components/hero/index"
import PaginationController from '../components/blog/paginationController/index'
import {Helmet} from "react-helmet"; 
import "./post-grid.css"
import bside from "../images/beside.jpg"

const PostsIndex = ({ pageContext }) => {
const { group, index, first, last, pageCount } = pageContext
const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString()
const nextUrl = (index + 1).toString()
const [pages, setPages] = useState(Math.floor(parseInt(group.length) / 10));

let pageArray = [];

for (let index = 0; index < pages; index++) {
  pageArray.push((index+1) * 10);
}

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
              {
                pageArray.map((element, index) =>
                  index % 2 === 0
                  ?
                  <>
                    <div className="template__one">
                      <div class={`grid grid-10`}>
                        <div>
                          <img src={bside} alt="Bside - Raxo's blog Name "/>
                        </div>
                        {group.map(({ node }, order) => 
                          <>
                            {
                              order  > 0 && order < (element + 1)
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
                  </>
                  : 
                  <>
                    <div className="template__two">
                      <div class={`grid grid-10`}>
                        <div>
                          <img src={bside} alt="Bside - Raxo's blog Name "/>
                        </div>
                        {element}
                        {element + 10}
                        {group.map(({ node }, order) => 
                          <>
                            {
                              parseInt(order) > element && parseInt(order) < (element + 10)
                              ?
                              <>
                              {order}
                              </>
                              :""
                            }
                            {
                              order > (element + 1) && order < (element + 10)
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
                  </>
                )
              }
          </div> 
        </div>
    </Layout>
  )
} 
export default PostsIndex

