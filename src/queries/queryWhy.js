"use strict"

module.exports = `
  {
    allWordpressWpAddcultureposts(filter: {categories: {elemMatch: {slug: {eq: "why-add-culture"}}}}) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MM.DD.YYYY")
          content
          categories {
            name
            slug
          }
          featured_media{
            source_url
            alt_text
            caption
            description
            localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                  }
              }
            }
          }
          author {
            name
            avatar_urls {
              wordpress_24
              wordpress_48
              wordpress_96
            }
            url
            wordpress_id
          }
        }
      }
    }
  }
`;