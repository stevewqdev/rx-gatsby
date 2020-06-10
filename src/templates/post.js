import React, { Component } from "react"
import Layout from "../layouts/index"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Hero from "../components/hero/index"
import {Helmet} from "react-helmet"; 
import "./posts.css"; 
import moment from 'moment'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topDate: "",
      bottomDate: "",
      post: this.props.data.wordpressPost,
      template: "",
    };
  }


  componentDidMount(){
    document.querySelectorAll(".footer")[0].classList.add("dark");
    document.querySelectorAll(".separator")[0].classList.remove("--black");
    document.querySelectorAll(".separator")[0].classList.add("--white");

    let params = new URLSearchParams(window.location.search);
    var postTemplate = params.get('template');
    //var postTemplate = this.props.data.wordpressPost.acf.template;
    if(postTemplate !== "legacy"){
        postTemplate = "default"
    }

    var dateString = this.state.post.date;
    var dateObj = new Date(dateString);
    var topDate = moment(dateObj);
    var topMomentString = topDate.format('MM.DD.YYYY');

    var bottomDate = moment(dateObj);
    var bottomMomentString = `${bottomDate.format('ddd MMM DD, LT z')} (${bottomDate.fromNow()}) `;

    this.setState({
      topDate: topMomentString,
      bottomDate: bottomMomentString,
      template: postTemplate,
    })

  }
  render() {
    // This variable will return all the fields related to the post
    const post = this.state.post
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
              classes={"internal__post"}
              theme={`dark template__${this.state.template}`}
              template={`template__${this.state.template}`}
              image={post.featured_media.localFile} 
              video={""}
              title={post.title}
              firstSubtitle={this.state.topDate}
              category={"News"}
              isPost={true}
            >
          </Hero>
          <div className={`main__section__wrapper post__wrapper template__${this.state.template}`}>
            {
              this.state.template === "legacy"
              ? 
              <>
                <div className="post container__base container container__custom">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 no__padding">
                      <div className="post__content__wrapper">
                        <div className="post__date">
                          <p className="sm__font bold__font">{this.state.bottomDate}</p>
                        </div>
                        <div className="post__content  md__font reg__font">
                          <div dangerouslySetInnerHTML={{__html: post.content}}/>
                        </div>
                       </div>
                    </div>
                  </div>
                </div>
              </>
              :
              <>
                <div className="post container__base container container__custom">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  no__padding post__thumbnail">
                      <Img className={''} fluid={post.featured_media.localFile.childImageSharp.fluid} />
                      <p
                        data-aos="fade-up"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="500"
                        data-aos-duration="1200"
                        className="sm__font reg__font post__thumbnail__caption"
                        dangerouslySetInnerHTML={{ __html: post.featured_media.caption }}
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 post__content__container">
                      <div className="post__content__wrapper">
                        <div className="post__date">
                          <p className="sm__font bold__font">{this.state.bottomDate}</p>
                        </div>
                        <div className="post__content  md__font reg__font">
                          <div dangerouslySetInnerHTML={{__html: post.content}}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
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
      date
      status
      yoast_meta {
        yoast_wpseo_metadesc
        yoast_wpseo_title
        yoast_wpseo_canonical
      }
      acf {
        template
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