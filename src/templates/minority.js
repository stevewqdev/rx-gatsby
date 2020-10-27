import React, { useState } from 'react';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header/index'
import CategoryCircle from '../images/addCulture/categories/categoryCircle.svg'
import CategoryLine from '../images/addCulture/categories/categoryLine.svg'
import './category.css'

export default function Minority({ pageContext }) {
  const { group } = pageContext;
  const [pages] = useState(Math.ceil(parseInt(group.length) / 8))
  let pageArray = []
  for (let index = 0; index < pages; index++) {
    pageArray.push((index + 1) * 10)
  }


  return (
    <AddCultureLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={"Minority - Add Culture"} />
        <title>Minority ~ Add Culture</title>
        <link rel="canonical" href={"/news/minority"} />
      </Helmet>
      <div className="main__section__wrapper blog__page">
        <Header />
        <div className="categoryHero">
          <div className="heroContainer">
            <CategoryCircle tabIndex="0" alt="circle" className="categoryCircle" />
            <p>01</p>
            <h1>MINORITY OWNED AGENCIES</h1>
          </div>
        </div>
      </div>
    </AddCultureLayout>
  )
}