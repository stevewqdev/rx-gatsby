"use strict"

module.exports = `
    {
      allWordpressWpAddcultureposts {
        edges {
          node {
            title
            slug
            date(formatString: "MM.DD.YY")
            categories {
              name
              slug
            }
            featured_media {
              id
              localFile {
                id
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
            yoast_meta {
              yoast_wpseo_canonical
              yoast_wpseo_title
              yoast_wpseo_metadesc
            }
          }
        }
      }
    }
`
