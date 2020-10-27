import React from 'react';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header/index'

export default class Stories extends React.Component {
  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"Add Culture Stories - Add Culture"} />
          <title>Ad+d Culture Stories ~ Add Culture</title>
          <link rel="canonical" href={"/news/stories"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <Header />
          
        </div>
      </AddCultureLayout>
    )
  }
}