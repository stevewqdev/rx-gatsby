"use strict"

module.exports = `
    {
        allWordpressWpNewsPost {
          edges {
            node {
              id
              slug
              status
              content
              template
              title
              excerpt
              date(formatString: "MMMM DD, YYYY")
              link
              news_categories {
                slug
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 80) {
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
                source_url
              }
              tags {
                name
                slug
              }
              acf {
                link
              }
            }
          }
        }
    }
`
