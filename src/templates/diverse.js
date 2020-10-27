import React from 'react';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header/index'

export default class Diverse extends React.Component {
  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"Minority - Add Culture"} />
          <title>Diverse ~ Add Culture</title>
          <link rel="canonical" href={"/news/diverse"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <Header />
          
        </div>
      </AddCultureLayout>
    )
  }
}