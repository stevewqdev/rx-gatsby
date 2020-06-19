import React, { useState, useEffect } from "react"
import Layout from "../layouts/index"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "./post-grid.css"
import bside from "../images/beside.jpg"
import bsideWebp from "../images/beside.webp"

import Img from "gatsby-image"

const PostsIndex = ({ pageContext }) => {
  const { group } = pageContext
  const [pages] = useState(Math.ceil(parseInt(group.length) / 10))
  const [styles, SetStyles] = useState("")

  let pageArray = []

  for (let index = 0; index < pages; index++) {
    pageArray.push((index + 1) * 10)
  }

  useEffect(() => {
    let grids = [...document.querySelectorAll(".grid")]
    grids.map((grid, index) => {
      let gridSize = grid.querySelectorAll(".grid__container").length - 1
      grid.classList.add(`grid-${gridSize}`)

      return true
    })

    SetStyles(
      `.fixed.column__top__one{position: absolute!important;} .fixed.column__top__two{position: absolute!important;}"`
    )
  })

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={"The Raxo blog is a place"} />
        <title>RAXO ~ News</title>
        <style>{styles}</style>
        <link rel="canonical" href={"/news"} />
      </Helmet>
      <div className="main__section__wrapper blog__page">
        <div className="blog container__base container container__custom">
          {pageArray.map((element, index) =>
            index % 2 === 0 ? (
              <>
                <div
                  className="template__one"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-duration="500"
                >
                  <div class={`grid `} id={`grid-element`}>
                    <div className="grid__container">
                      <picture>
                        <source srcset={bsideWebp} type="image/webp" />
                        <source srcset={bside} type="image/jpeg" />
                        <img src={bside} alt="Alt Text!" />
                      </picture>
                    </div>
                    {group.map(({ node }, order) => (
                      <>
                        {parseInt(order) >= parseInt(element - 10) &&
                        parseInt(order + 1) < parseInt(element + 1) ? (
                          <div
                            key={order}
                            className={`new-${order} grid__container`}
                          >
                            <Link to={`/news/${node.slug}`}>
                              <Img
                                fluid={
                                  node.featured_media.localFile.childImageSharp
                                    .fluid
                                }
                                alt={`Illustration from Univision`}
                                tabIndex={-1}
                              />
                            </Link>
                            <div className="blog__content">
                              <p className="sm__font reg__font white__font date">
                                {node.date}
                              </p>
                              <p className="sm__font reg__font white__font categorie">
                                {node.categories[0].slug}
                              </p>
                              <p
                                className="md__font bold__font white__font title"
                                dangerouslySetInnerHTML={{ __html: node.title }}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="template__two"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-duration="500"
                >
                  <div className={`grid`}>
                    <div className="grid__container">
                      <picture>
                        <source srcset={bsideWebp} type="image/webp" />
                        <source srcset={bside} type="image/jpeg" />
                        <img src={bside} alt="Alt Text!" />
                      </picture>
                    </div>

                    {group.map(({ node }, order) => (
                      <>
                        {parseInt(order) >= parseInt(element - 10) &&
                        parseInt(order + 1) < parseInt(element + 1) ? (
                          <div
                            key={order}
                            className={`new-${order} grid__container`}
                          >
                            <Link to={`/news/${node.slug}`}>
                              <Img
                                fluid={
                                  node.featured_media.localFile.childImageSharp
                                    .fluid
                                }
                                alt={`Illustration from Univision`}
                                tabIndex={-1}
                              />
                            </Link>
                            <div className="blog__content">
                              <p className="sm__font reg__font white__font date">
                                {node.date}
                              </p>
                              <p className="sm__font reg__font white__font categorie">
                                {node.categories[0].slug}
                              </p>
                              <p
                                className="md__font bold__font white__font title"
                                dangerouslySetInnerHTML={{ __html: node.title }}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </Layout>
  )
}
export default PostsIndex
