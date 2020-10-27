import React from 'react';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header/index'

export default class Representation extends React.Component {
  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"Representation Done Right - Add Culture"} />
          <title>Representation Done Right ~ Add Culture</title>
          <link rel="canonical" href={"/news/representation"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <Header />
          
        </div>
      </AddCultureLayout>
    )
  }
}