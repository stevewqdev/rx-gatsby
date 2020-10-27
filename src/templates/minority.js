import React from 'react';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header/index'

export default function Minority({ pageContext }) {
  console.log(pageContext);
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
        
      </div>
    </AddCultureLayout>
  )
}