// We require dotenv to create the environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const queryMinority = require(`./src/queries/queryMinority.js`);
const queryDiverse = require(`./src/queries/queryDiverse.js`);
const queryWhy = require(`./src/queries/queryWhy.js`);
const queryStories = require(`./src/queries/queryStories.js`);
const queryRepresentation = require(`./src/queries/queryRepresentation.js`);
const createPaginatedPages = require(`gatsby-paginate`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({ fromPath: 'https://raxo.tv/*', toPath: 'https://raxo.co/:splat', isPermanent: true, force: true })
  
  createRedirect({ fromPath: 'https://www.raxo.tv/*', toPath: 'https://raxo.co/:splat', isPermanent: true, force: true })


  return new Promise((resolve, reject) => {
    // We set the variables for the default templates
    const postTemplate = path.resolve("./src/templates/post.js")
    const adcPostTemplate = path.resolve('./src/templates/adcPost.js')

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) reject(result.errors)
        // Posts detail
        // Here we retrieve all the posts
        const posts = result.data.allWordpressPost.edges

        // And we paginate them
        createPaginatedPages({
          edges: posts,
          createPage: createPage,
          pageTemplate: "src/templates/posts.js",
          pageLength: 1000,
          pathPrefix: "add-culture",
        })

        // // Loop through the posts
        // posts.forEach(edge => {
        //   createPage({
        //     path: `/add-culture/post/${edge.node.slug}/`,
        //     component: slash(adcPostTemplate),
        //     context: {
        //       id: edge.node.id,
        //     },
        //   })
        // })
      })
    )
    resolve(
      graphql(queryMinority).then(result => {
        if(result.errors) reject(result.errors)
        const minorityPosts = result.data.allWordpressWpAddcultureposts.edges
        console.log(minorityPosts.featured_media);
        createPaginatedPages({
          edges: minorityPosts,
          createPage: createPage,
          pageTemplate: "src/templates/minority.js",
          pageLength: 1000,
          pathPrefix: "add-culture/minority",
        })

        // Loop through the posts
        minorityPosts.forEach(edge => {
          createPage({
            path: `/add-culture/post/${edge.node.slug}/`,
            component: slash(adcPostTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
    resolve(
      graphql(queryDiverse).then(result => {
        if(result.errors) reject(result.errors)
        const diversePosts = result.data.allWordpressWpAddcultureposts.edges

        createPaginatedPages({
          edges: diversePosts,
          createPage: createPage,
          pageTemplate: "src/templates/diverse.js",
          pageLength: 1000,
          pathPrefix: "add-culture/diverse",
        })

        // Loop through the posts
        diversePosts.forEach(edge => {
          createPage({
            path: `/add-culture/post/${edge.node.slug}/`,
            component: slash(adcPostTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
    resolve(
      graphql(queryWhy).then(result => {
        if(result.errors) reject(result.errors)
        const whyPosts = result.data.allWordpressWpAddcultureposts.edges

        createPaginatedPages({
          edges: whyPosts,
          createPage: createPage,
          pageTemplate: "src/templates/why.js",
          pageLength: 1000,
          pathPrefix: "add-culture/why",
        })

        // Loop through the posts
        whyPosts.forEach(edge => {
          createPage({
            path: `/add-culture/post/${edge.node.slug}/`,
            component: slash(adcPostTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
    resolve(
      graphql(queryStories).then(result => {
        if(result.errors) reject(result.errors)
        const storiesPosts = result.data.allWordpressWpAddcultureposts.edges

        createPaginatedPages({
          edges: storiesPosts,
          createPage: createPage,
          pageTemplate: "src/templates/stories.js",
          pageLength: 1000,
          pathPrefix: "news/stories",
        })

        // Loop through the posts
        storiesPosts.forEach(edge => {
          createPage({
            path: `/add-culture/post/${edge.node.slug}/`,
            component: slash(adcPostTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
    resolve(
      graphql(queryRepresentation).then(result => {
        if(result.errors) reject(result.errors)
        const representationPosts = result.data.allWordpressWpAddcultureposts.edges
        console.log(representationPosts);
        createPaginatedPages({
          edges: representationPosts,
          createPage: createPage,
          pageTemplate: "src/templates/representation.js",
          pageLength: 1000,
          pathPrefix: "add-culture/representation",
        })

        // Loop through the posts
        representationPosts.forEach(edge => {
          createPage({
            path: `/add-culture/post/${edge.node.slug}/`,
            component: slash(adcPostTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
    )
  })
}
