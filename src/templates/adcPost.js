import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import AddCultureLayout from '../layouts/addCultureLayout/index';
import HeroLine from '../images/addCulture/heroPostLine.svg'
import PostHeroLine from '../images/addCulture/postHeroLine.svg'
import ScrollIndicator from '../images/addCulture/scrollIndicator.svg'
import AuthorLine from '../images/addCulture/authorLine.svg'
import TwitterIcon from '../images/addCulture/socialIcons/button/header/navigation.svg';
import FacebookIcon from '../images/addCulture/socialIcons/button/header/navigation-1.svg';
import LinkedInIcon from '../images/addCulture/socialIcons/button/header/navigation-2.svg';
import ShareIcon from '../images/addCulture/socialIcons/button/header/navigation-3.svg';
import '../fonts/addCulture/schnyder/stylesheet.css'
import './adcPost.css'

export default class AddCulturePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data.wordpressWpAddcultureposts,
    }
  }
  componentDidMount() {
    console.log(this.state.post);
  }
  render() {
    return (
      <AddCultureLayout>
        <div className="postHeader">
          <div className="headerContainer">
          <div className="scrollIndicator">
            <ScrollIndicator tabIndex="0" alt="scroll" class="scroll" />
          </div>
          <div className="postHeroContent">
            <div className="categoryContainer">
              <HeroLine tabIndex="0" alt="line" className="heroLine" />
              {this.state.post.categories !== null ? (
                <p>{this.state.post.categories[0].name}</p>
              ) : (
                ''
              )}
            </div>
            <p className="postHeroDate">{this.state.post.date}—</p>
            <h1 className="postHeroTitle">{this.state.post.title}</h1>
          </div>
          <div className="postHeroImage">
            {this.state.post.featured_media.localFile.childImageSharp !== null ? (
              <Img fluid={this.state.post.featured_media.localFile.childImageSharp.fluid} />
            ) : (
              ''
            )}
          </div>
          </div>
          

          <PostHeroLine tabIndex="0" alt="line" className="bottomLine" />
        </div>

        <div className="postContent">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="postInfoContainer">
                {this.state.post.author !== null ? (
                  <div className="authorContainer">
                    <p className="postAuthor">BY <span>{this.state.post.author.name}</span></p>
                    <AuthorLine tabIndex="0" alt="Author Line" className="authorLine" />
                  </div>
                ) : (
                  ''
                )}
                <p className="postExcerpt" dangerouslySetInnerHTML={{ __html: this.state.post.excerpt }} />

                <div className="socials">
                  <Link to="https://twitter.com">
                    <TwitterIcon tabIndex="0" alt="Twitter" />
                  </Link>
                  <Link to="https://facebook.com">
                    <FacebookIcon tabIndex="0" alt="Facebook" />
                  </Link>
                  <Link to="https://linkedin.com">
                    <LinkedInIcon tabIndex="0" alt="LinkedIn" />
                  </Link>
                  <Link to="#">
                    <ShareIcon tabIndex="0" alt="Share" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="postContainer">
                <div className="content" dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
              </div>
            </div>
          </div>
        </div>
      </AddCultureLayout>
    )
  }
}

export const postQuery = graphql`
  query($id: String!) {
    wordpressWpAddcultureposts(id: { eq: $id }) {
      date(formatString: "MM.DD.YY")
      content
      id
      slug
      title
      excerpt
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1300, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      author {
        url
        wordpress_id
        name
        avatar_urls {
          wordpress_24
          wordpress_48
          wordpress_96
        }
      }
      categories {
        name
        slug
      }
    }
  }
`