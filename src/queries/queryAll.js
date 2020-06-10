'use strict'

module.exports = `
    {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              content
              template
              format
              title
              date(formatString: "MM.DD.YYYY")
              link

              categories {
                slug
                description
                path
              }
              featured_media{
                source_url
                alt_text
                caption
                description
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
              acf {
                template
              }
            }
          }
        }
    }
`