import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Hero from "../components/hero/index"
import {Helmet} from "react-helmet"; 

class Post extends Component {
  render() {
    // This variable will return all the fields related to the post
    const post = this.props.data.wordpressPost
    // We create an object for the image data, you can add as many properties you need
    var postMedia = {
      image: false,
      webpImage: false,
      altText: '',
      dynamicResolutions: false
    }; 
    // We will check if the post has any featured image set
    if(post.featured_media){
      // We save the image url into the object
      postMedia.image = post.featured_media.source_url
      postMedia.webpImage = post.featured_media.source_url
      // We check if the image contains the alt text and we save it into the object
      if(post.featured_media.alt_text.length > 0){
        postMedia.altText = post.featured_media.alt_text;
      }else{
        postMedia.altText = 'At the moment this image does not have a description';
      }
      if(post.featured_media.localFile.childImageSharp.fluid){
        postMedia.dynamicResolutions = post.featured_media.localFile.childImageSharp.fluid;
      }
    }
    // We check if the post contains any category besides the uncategorized
    var noCategory = false; 
    if(post.categories.length === 1 && post.categories[0].slug === 'uncategorized'){
      // This mean the post only contains the 'uncategorized' category
      noCategory = true;
    }
    return (
      <Layout>
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={ post.yoast_meta.yoast_wpseo_metadesc }/>
            <title>{ post.yoast_meta.yoast_wpseo_title }</title>
            <link rel="canonical" href={ post.yoast_meta.yoast_wpseo_canonical} />
          </Helmet>
          <Hero 
              theme={"dark"}
              image={""} 
              video={""}
              title={post.title}
              firstSubtitle={post.author.name}
              secondSubtitle={post.date}
            >
          </Hero>
          <div className="main__section__wrapper">
            <div className="post container__base container container__custom">
              <div className="post__image">
                {
                  postMedia.image 
                  ? 
                    postMedia.dynamicResolutions
                    ?  <Img className={'dynamic__image'} fluid={post.featured_media.localFile.childImageSharp.fluid} />
                    : <>
                        <picture>
                          <source srcSet={postMedia.webpImage} type="image/webp" />
                          <source srcSet={postMedia.image} type="image/jpeg" />
                          <img src={postMedia.image} alt={postMedia.altText} /> 
                        </picture>
                      </>
                  : <div className="post__image --noImage"></div>
                }
              </div>
              <div className="post__content__wrapper">
                <div className="post__date">
                  <p><small><b>{post.author.name}, {post.date}</b></small></p>
                </div>
                <div className="post__title">
                  <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
                </div>
                <div className="post__content">
                  <div dangerouslySetInnerHTML={{__html: post.content}}/>
                </div>
                <hr></hr>
                <div className="post__meta">
                  <div className="post__category">
                    <div className="post__category__wrapper">
                      {
                        /* 
                          Here we check if the variable noCategory exist
                          and based on that we show a message or we show
                          the categories
                        */
                        noCategory
                        ? <div key="nocat-1">
                            <p>
                              <strong> This post its no categorized yet </strong>
                            </p>
                          </div>
                        : post.categories.map( (categorie, index) => (
                          categorie.slug === 'uncategorized'
                          ? ''
                          : <div className="category__item" key={categorie-index}>
                              <p>
                                <strong> {categorie.slug} </strong>
                              </p>
                            </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
              <Link to={`../`}>
                <button className={`btn btn-default sm__font reg__font inner__post__return__button`}>
                    Return to Blog
                </button>
              </Link>
            </div>
          </div>
      </Layout>
    )
  }  
}
Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}
export default Post
/*
============================================
This is the default query for all the posts,
if you need an specific query for an specific
post you need to create a conditional for the 
post or post type on the gatsby-node.js file 
and there select a different template for that
kind of posts.

To add ACF fields into the query you can add 
them like this into the wordpressPost query.

acf {
  field1
  field1
}

There must exist a dummy post with all the 
fields set so the query wont return any error.
============================================
*/
export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      status
      yoast_meta {
        yoast_wpseo_metadesc
        yoast_wpseo_title
        yoast_wpseo_canonical
      }
      featured_media{
        source_url
        alt_text
        caption
        description
        localFile {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
      categories {
        slug
      }
    } 
  }
`