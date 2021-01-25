// We require dotenv to create the environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require(`gatsby-paginate`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // We set the variables for the default templates
    const postTemplate = path.resolve("./src/templates/post.js")

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) reject(result.errors)
        // Posts detail
        // Here we retrieve all the posts
        const news = result.data.allWordpressWpNewsPost.edges
        console.log(news)
        // const posts = result.data.allWordpressWpNewsPost

        // And we paginate them
        createPaginatedPages({
          edges: news,
          createPage: createPage,
          pageTemplate: "src/templates/posts.js",
          pageLength: 1000,
          pathPrefix: "news",
        })

        // Loop through the posts
        news.forEach(edge => {
          createPage({
            path: `/news/${edge.node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
  })
}
