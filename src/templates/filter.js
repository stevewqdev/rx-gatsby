import React, { Component } from 'react';
// import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import AddCultureLayout from '../layouts/addCultureLayout/index';
import axios from 'axios';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTag: '',
      filteredPosts: [],
    }
  }

  formatTerm() {
    let term = this.props.location.search;
    const searchTerm = term.split('?');
    const search = searchTerm[1];
    this.setState({ searchTag: search }, function() {
      console.log(this.state.searchTag);
    });
  }

  getPosts() {
    const params = this.state.searchTag;
    console.log(params);
    axios.get(`https://rx.raxo.dev/wp-json/wp/v2/add-culture/?per_page=10&search=${params}`)
    .then((res) => {
      const data = res.data;
      console.log(data);
    })
  }

  componentDidMount() {
    this.formatTerm();
    this.getPosts();
  }
  render() {
    return (
      <AddCultureLayout>
        <h1>Filter page</h1>
      </AddCultureLayout>
    )
  }
}

// export const filterQuery = `
// query ($tags: String) {
//   allWordpressWpAddcultureposts(filter: {tags: {elemMatch: {name: {eq: $tags}}}}) {
//     edges {
//       node {
//         id
//         title
//         slug
//         date(formatString: "MM.DD.YY")
//         categories {
//           name
//           slug
//         }
//         tags {
//           name
//           slug
//         }
//         featured_media {
//           source_url
//           alt_text
//           caption
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1920) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `