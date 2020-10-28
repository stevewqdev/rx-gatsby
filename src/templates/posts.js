import React from "react"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import AddCultureHero from '../components/addCulture/hero/index'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import MouseTooltip from "react-sticky-mouse-tooltip"
import Img from "gatsby-image"
import AddCultureSlider from "../components/addCulture/slider/index"
import PopularSlider from '../components/addCulture/slider/popular'
import Scroll from '../images/addCulture/scroll.svg'
import Line from '../images/addCulture/line.svg'
import IdentityPlus from '../images/addCulture/identityPlus.svg';
import IdentityScratch from '../images/addCulture/identityScratch.svg';
import IdentityTriangle from '../images/addCulture/identityTriangle.svg';
import IdentityTopEllipses from '../images/addCulture/identityTopEllipses.svg';
import IdentityInverseVector from '../images/addCulture/identityInverseVector.svg';
import IdentityLine from '../images/addCulture/identityLine.svg';
import IdentityCircles from '../images/addCulture/identityCircles.svg'
import IdentityHalfCircle from '../images/addCulture/identityHalfCircle.svg';
import IdentityEllipse from '../images/addCulture/identityEllipse.svg';
import IdentityVector from '../images/addCulture/identityVector5.svg'
import './posts.css'

export default class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseTooltipVisible: false,
      posts: [],
    }

    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
  }

  showTooltip(event) {
    const tooltip = document.getElementById(`${event.target.id}-container`);
    tooltip.classList.add('show');
    // if(tooltip.classList.contains('minority')) {
    //   tooltip.classList.add('minorityImg');
    // } else if(tooltip.classList.contains('diverse')) {
    //   tooltip.classList.add('diverseImg');
    // } else if(tooltip.classList.contains('why')) {
    //   tooltip.classList.add('whyImg');
    // } else if(tooltip.classList.contains('stories')) {
    //   tooltip.classList.add('storiesImg')
    // } else if(tooltip.classList.contains('representation')) {
    //   tooltip.classList.add('representationImg');
    // }
    this.setState(
      prevState => ({ 
        isMouseTooltipVisible: !prevState.isMouseTooltipVisible 
      }));
  };

  hideTooltip(event) {
    const tooltip = document.getElementById(`${event.target.id}-container`);
    tooltip.classList.remove('show');
    this.setState(
      prevState => ({ 
        isMouseTooltipVisible: !prevState.isMouseTooltipVisible 
      }));
  }

  
  componentDidMount() {
    this.getPosts();
  }

  render() {
    const postsData = this.props.data.allWordpressWpAddcultureposts.edges;
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"The Raxo blog is a place"} />
          <title>Add Culture ~ Blog</title>
          <link rel="canonical" href={"/news"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <AddCultureHero />
          <div className="addCultureContainer">
            <div className="featuredContent">
              <h1 className="featuredText">FEATURE <br/> THIS <br/> MONTH</h1>
                <AddCultureSlider className="slider" />
            </div>
  
            <div id="blogPosts" className="addCultureBlogPosts">
              <div className="row">
                <div className="postsGrid">
                  {postsData.map((post, i) => (
                    <>
                      <div className={`adcSinglePost post-${i}`}>
                        <div className="contentContainer">
                          <div className="catAndDateContainer">
                            <Link to={`/post/${post.node.categories[0].slug.toLowerCase()}`} className="postCategory">{post.node.categories[0].name}</Link>
                            <p className="postDate">{post.node.date}</p>
                          </div>
                          <h2 className="postTitle">{post.node.title}</h2>
                        </div>
                        
                        {post.node.featured_media.localFile.childImageSharp !== null ? (
                          <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} />
                        ) : (
                          ''
                        )}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              
            </div>

            <div className="popular">
              <div className="popularContent">
                <div className="scrollIndicator">
                  <Scroll tabIndex="0" alt="Scroll" />
                  <Line tabIndex="0" alt="Line" style={{marginTop: '10px', marginLeft: '6px'}} />
                </div>
                <h1 className="popularHeading">POPULAR <br/> THIS <br/> MONTH</h1>
                {/* <PopularSlider /> */}
              </div>
            </div>

            <div className="blogIdentity">
              <div className="row">
                <IdentityTriangle tabIndex="0" alt="Triangle" style={{ marginTop: '15%', marginLeft: '8%', position: 'absolute' }} />
                <IdentityTopEllipses tabIndex="0" alt="Top Ellipses" style={{ position: 'absolute', left: '60%' }} />
                <IdentityInverseVector tabIndex="0" alt="Inverse Vector" style={{position: 'absolute', right: '0', top: '15%'}} />
                <IdentityLine tabIndex="0" alt="Line" style={{ position: 'absolute', marginLeft: '-3%' }} />
                <IdentityCircles tabIndex="0" alt="Circles" style={{position: 'absolute', marginLeft: '8%', bottom: '5%'}} />
                <IdentityHalfCircle tabIndex="0" alt="Bottom Circle" style={{position: 'absolute', bottom: '0', marginLeft: '17%'}} />
                <div className="identityContent">
                  <IdentityScratch tabIndex="0" alt="Identity Scratch" style={{position: 'absolute', left: '36%', bottom: '29%'}} />
                  <IdentityPlus tabIndex="0" alt="Plus Symbol" style={{position: 'absolute', zIndex: '0', right: '10%'}} />
                  <IdentityEllipse tabIndex="0" alt="Ellipse" style={{position: 'absolute', left: '70%', bottom: '12%'}} />
                  <IdentityVector tabIndex="0" alt="Vector" style={{ position: 'absolute', left: '28%', bottom: '18%' }} />
                  <h1 class="identityHeading">AD+D <br/> CULTURE</h1>
                  <p class="identityText">
                    AMPLIFYING THE VOICES <br/> THAT SET THE TONE
                  </p>
                </div>
              </div>
            </div>
            <div className="blogCategories">
              <div className="categoriesHeader">
                <p>MORE IS MORE</p>
                <h1 className="categoriesHeading">
                  OUR BLOG <br/> <span>OUR CATEGORIES.</span>
                </h1>
              </div>
              <div className="categoriesNav">
                <Link to="/news/minority" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryOne">
                  <p className="categoryNumber">01</p>
                  <h2 className="categoryName">MINORITY <br/> OWNED <br/> AGENCIES</h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}               
                >
                  <div className="category minorityImg" id="categoryOne-container">
                  </div>
                </MouseTooltip>
                <Link to="/news/diverse" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryTwo">
                  <p className="categoryNumber">02</p>
                  <h2 className="categoryName">DIVERSE <br/> CREATORS</h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}              
                >
                  <div className="category diverseImg" id="categoryTwo-container">
                  </div>
                </MouseTooltip>
                <Link to="/news/why" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryThree">
                  <p className="categoryNumber">03</p>
                  <h2 className="categoryName">WHY <br/> AD+D <br/> CULTURE</h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}               
                >
                  <div className="category whyImg" id="categoryThree-container">
                  </div>
                </MouseTooltip>
                <Link to="/news/stories" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryFour">
                  <p className="categoryNumber">04</p>
                  <h2 className="categoryName">AD+D <br/> CULTURE <br/> STORIES</h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}                
                >
                  <div className="category storiesImg" id="categoryFour-container">
                  </div>
                </MouseTooltip>
                <Link to="/news/representation" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryFive">
                  <p className="categoryNumber">05</p>
                  <h2 className="categoryName">REPRESENTATION <br/> DONE RIGHT</h2>
                </Link>
                <MouseTooltip
                  visible={this.state.isMouseTooltipVisible}
                  offsetX={-200}
                  offsetY={-200}               
                >
                  <div className="category representationImg" id="categoryFive-container">
                  </div>
                </MouseTooltip>
              </div>
            </div>
          </div>          
        </div>
      </AddCultureLayout>
    )
  }
}


export const blogQuery = graphql`
  query addCultureQuery {
    allWordpressWpAddcultureposts {
      edges {
        node {
          title
          slug
          date(formatString: "MM.DD.YYYY")
          categories {
            name
            slug
          }
          featured_media {
            id
            localFile {
              id
              childImageSharp {
                fluid(maxWidth: 1000, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
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
  }`;
