"use strict"

module.exports = `
query ($tags: String) {
  allWordpressWpAddcultureposts(filter: {tags: {elemMatch: {name: {eq: $tags}}}}) {
    edges {
      node {
        id
        title
        slug
        date(formatString: "MM.DD.YY")
        categories {
          name
          slug
        }
        tags {
          name
          slug
        }
        featured_media {
          source_url
          alt_text
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`;