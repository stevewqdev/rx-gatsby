import React, { Component } from "react";
import Layout from "../layouts/index";
import { graphql } from 'gatsby';

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="home__page">

        </div>
      </Layout>
    )
  }
}
export default HomePage

export const pageQuery = graphql`
query HomeQuery {
  allWordpressPage(filter: {path: {eq: "/"}}) {
    edges {
      node {
        id
        title
        content
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`