import React, { Component } from 'react';
import { graphql } from 'gatsby';
import AddCultureLayout from '../layouts/addCultureLayout/index';

export default class AddCulturePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data.wordpressWpAddcultureposts,
    }
  }
  componentDidMount() {
    console.log(this.state.post);
  }
  render() {
    return (
      <AddCultureLayout>
        <h1>AddCulture Single Post Page</h1>
      </AddCultureLayout>
    )
  }
}

export const postQuery = graphql`
  query($id: String!) {
    wordpressWpAddcultureposts(id: { eq: $id }) {
      date(formatString: "MM.DD.YYYY")
      content
      id
      slug
      title
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      author {
        url
        wordpress_id
        name
        avatar_urls {
          wordpress_24
          wordpress_48
          wordpress_96
        }
      }
      categories {
        name
        slug
      }
    }
  }
`