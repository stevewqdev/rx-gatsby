import React from 'react';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header/index'

export default class Why extends React.Component {
  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"Why Add Culture - Add Culture"} />
          <title>Why Ad+d Culture ~ Add Culture</title>
          <link rel="canonical" href={"/news/why"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <Header />
          
        </div>
      </AddCultureLayout>
    )
  }
}