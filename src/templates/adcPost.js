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
import BottomLine from '../images/addCulture/bottomLine.svg';
import '../fonts/addCulture/schnyder/stylesheet.css'
import './adcPost.css'

export default class AddCulturePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data.wordpressWpAddcultureposts,
      featuredPosts: this.props.data.allWordpressWpAddcultureposts.edges,
    }
  }
  componentDidMount() {
    console.log(this.state.featuredPosts);
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
              {this.state.post.categories !== null ? 
                this.state.post.categories[0].name === 'Featured' ? (
                  <p>{this.state.post.categories[1].name}</p>
                ) : (
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

                {this.state.post.tags !== null ? (
                  <div className="postTagsContainer">
                    {this.state.post.tags.map((tag) => (
                      <p className="postTag">{tag.name}</p>
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <BottomLine tabIndex="0" alt="bottom line" className="postBottomLine" />
        </div>

        <div className="relatedPostsSection">
            <div className="relatedHeading">
              <p className="wantMore">More News?</p>
              <h2 className="featured">Feature this month <br/> on <span>Add Culture</span></h2>
            </div>
            
              <div className="postsGrid" style={{marginTop: '8%'}}>
                {this.state.featuredPosts.map(({ node }, i) => (
                  <>
                    <div className={`adcSinglePost post-${i}`}>
                      <div className="contentContainer">
                        <div className="catAndDateContainer">
                          {node.categories[0] === 'Featured' ? (
                            <Link to={`/post/${node.categories[1].slug.toLowerCase()}`} className="postCategory">{node.categories[1].name}</Link>
                          ) : (
                            <Link to={`/post/${node.categories[0].slug.toLowerCase()}`} className="postCategory">{node.categories[0].name}</Link>
                          )}
                          <p className="postDate">{node.date}</p>
                        </div>
                        <h2 className="postTitle">{node.title}</h2>
                      </div>
                      
                      {node.featured_media.localFile.childImageSharp !== null ? (
                        <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                ))}
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
      tags {
        name
      }
    }
    allWordpressWpAddcultureposts(filter: {categories: {elemMatch: {slug: {eq: "featured"}}}}) {
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
`