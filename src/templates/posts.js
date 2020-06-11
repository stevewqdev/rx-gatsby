
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
const [pages, setPages] = useState(Math.ceil(parseInt(group.length) / 10));

let pageArray = [];

for (let index = 0; index < pages; index++) {
  pageArray.push((index+1) * 10);
}

useEffect(() => {
  let grids = [...document.querySelectorAll(".grid")];
  grids.map((grid, index) => {
    let gridSize = grid.querySelectorAll("div").length - 1;
    grid.classList.add(`grid-${gridSize}`);
  })

  console.log(group)
})

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
                    <div className="template__one"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="500"
                    >
                      <div class={`grid `} id={`grid-element`}>
                        <div 
                        >
                          <img src={bside} alt="Bside - Raxo's blog Name "/>
                        </div>
                        {group.map(({ node }, order) => 
                          <>
                            {
                              parseInt(order) >=  parseInt(element - 10 ) && parseInt(order + 1) < (parseInt(element + 1)) 
                              ?
                              <div key={order} className={`new-${order}`}>
                                <Link to={`/news/${node.slug}`}  >
                                  <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
                                </Link>
                                <div className="blog__content">
                                  <p className="sm__font reg__font white__font">{node.date}</p>
                                  <p className="sm__font reg__font white__font">{node.categories[0].slug}</p>
                                  <p className="md__font bold__font white__font" dangerouslySetInnerHTML={{__html: node.title}}/>
                                </div>
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
                    <div className="template__two"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="500"
                    >
                      <div class={`grid`}>
                        <div>
                          <img src={bside} alt="Bside - Raxo's blog Name "/>
                        </div>
       
                        {group.map(({ node }, order) => 
                          <>
                            {
                              parseInt(order) >=  parseInt(element - 10 ) && parseInt(order + 1) < (parseInt(element + 1)) 
                              ?
                              <div key={order} className={`new-${order}`}>
                                <Link to={`/news/${node.slug}`}  >
                                  <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
                                </Link>
                                <div className="blog__content">
                                  <p className="sm__font reg__font white__font">{node.date}</p>
                                  <p className="sm__font reg__font white__font">{node.categories[0].slug}</p>
                                  <p className="md__font bold__font white__font" dangerouslySetInnerHTML={{__html: node.title}}/>
                                </div>
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

