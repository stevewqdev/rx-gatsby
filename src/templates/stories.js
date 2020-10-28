import React, { useState } from 'react';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import CategoryCircle from '../images/addCulture/categories/categoryCircle.svg'
import CategoryLine from '../images/addCulture/categories/categoryLine.svg'

import './category.css'
import './stories.css'

export default function Stories({ pageContext }) {
  const { group } = pageContext;
  const [pages] = useState(Math.ceil(parseInt(group.length) / 8))
  let pageArray = []
  for (let index = 0; index < pages; index++) {
    pageArray.push((index + 1) * 8)
  }


  return (
    <AddCultureLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={"Ad+d Culture Stories - Add Culture"} />
        <title>Ad+d Culture Stories ~ Add Culture</title>
        <link rel="canonical" href={"/news/stories"} />
      </Helmet>
      <div className="main__section__wrapper blog__page">
        <div className="categoryHero storiesBanner">
          <div className="heroContainer">
            <CategoryCircle tabIndex="0" alt="circle" className="categoryCircle" />
            <p>04</p>
            <h1>AD+D CULTURE<br/> STORIES</h1>
            <CategoryLine tabIndex="0" alt="line" className="categoryLine" />
          </div>
        </div>

        <div className="categoryPosts">
          {pageArray.map((element) => (
            <>
              {group.map(({ node }, order) => (
                <>
                {parseInt(order) >= parseInt(element - 8) &&
                parseInt(order + 1) < parseInt(element + 1) ? (
                  <div className={`adcSinglePost post-${order}`}>
                    <div className="contentContainer">
                      <div className="catAndDate">
                        <Link to={`/news/stories`} className="postCategory">AD+D CULTURE STORIES</Link>
                        <p className="postDate">{node.date}</p>
                      </div>
                      <h2 className="postTitle">{node.title}</h2>
                    </div>
                    
                    {node.featured_media.localFile.childImageSharp !== null ? (
                      <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                </>
                
              ))}
            </>
          ))}
        </div>
      </div>
    </AddCultureLayout>
  )
}