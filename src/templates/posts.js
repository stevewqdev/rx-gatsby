import React, { Component } from "react"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import AddCultureHero from '../components/addCulture/hero/index'
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import MouseTooltip from "react-sticky-mouse-tooltip"
import ReactPaginate from 'react-paginate'
import Img from "gatsby-image"
import AddCultureSlider from "../components/addCulture/slider/index"
import PopularSlider from '../components/addCulture/slider/popular'
import ScrollIndicator from '../images/addCulture/scrollIndicator.svg'
import ScrollIndicatorDark from '../images/addCulture/scrollIndicatorDark.svg'
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

export default class PostsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseTooltipVisible: false,
      posts: this.props.data.allWordpressWpAddcultureposts.edges,
      offset: 0,
      perPage: 8,
      currentPage: 0
    }

    this.showTooltip = this.showTooltip.bind(this)
    this.hideTooltip = this.hideTooltip.bind(this)
  }

  showTooltip(event) {
    const tooltip = document.getElementById(`${event.target.id}-container`);
    tooltip.classList.add('show');
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

  formatData() {
    const data = this.state.posts;
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
    const postData = slice.map(({ node }, i) => <React.Fragment>
      <Link to={`/add-culture/post/${node.slug}`}>
        <div className={`adcSinglePost post-${i}`}>
          <div className="contentContainer">
            <div className="catAndDateContainer">
              <Link to={`/add-culture/post/${node.categories[0].slug.toLowerCase()}`} className="postCategory">{node.categories[0].name}</Link>
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
      </Link>
    </React.Fragment>)

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData
    })
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(this.state.perPage)
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset,
    }, () => {
      this.formatData();
    })
  }
  
  componentDidMount() {
    this.formatData();
  }

  render() {
    const postsData = this.props.data.allWordpressWpAddcultureposts.edges;
    const featured = [];
    const popular = [];
    function getFeatured() {
      postsData.map(({node}) => {
        node.categories.map((category) => {
          if(category.name === 'Featured') {
            return featured.push(node);
          }
        })
      })
    }

    function getPopular() {
      postsData.map(({node}) => {
        node.categories.map((category) => {
          if(category.name === 'Popular') {
            return popular.push(node);
          }
        })
      })
    }
    getFeatured();
    getPopular();

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
              <h1 className="featuredText">FEATURED <br/> THIS <br/> MONTH</h1>
                <AddCultureSlider className="slider" featured={featured} />
            </div>
            
            <div id="blogPosts" className="addCultureBlogPosts">
              <div className="row">
                <div className="scrollIndicatorDark">
                  <ScrollIndicatorDark tabIndex="0" alt="Scroll" />
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="postsGrid">
                  {this.state.postData}
                  <ReactPaginate
                    previousLabel={""}
                    nextLabel={""}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                  </div>
                </div>
                
              </div>
              
            </div>

            <div className="popular">
              <div className="popularContent">
                <div className="scrollIndicator">
                  <ScrollIndicator tabIndex="0" alt="Scroll" />
                  
                </div>
                <h1 className="popularHeading">POPULAR <br/> THIS <br/> MONTH</h1>
                  {/* <PopularSlider popular={popular} /> */}
              </div>
            </div>

            <div className="blogIdentity">
              <div className="row">
                <div className="scrollIndicatorDark">
                  <ScrollIndicatorDark tabIndex="0" alt="Scroll" />
                </div>
                <IdentityTriangle className="identityTriangle" tabIndex="0" alt="Triangle"/>
                <IdentityTopEllipses className="identityTopEllipses" tabIndex="0" alt="Top Ellipses" />
                <IdentityInverseVector className="identityInverseVector" tabIndex="0" alt="Inverse Vector" />
                <IdentityLine className="identityLine" tabIndex="0" alt="Line" />
                <IdentityCircles className="identityCircles" tabIndex="0" alt="Circles" />
                <IdentityHalfCircle className="identityHalfCircle" tabIndex="0" alt="Bottom Circle" />
                <div className="identityContent">
                  <IdentityScratch className="identityScratch" tabIndex="0" alt="Identity Scratch" />
                  <IdentityPlus className="identityPlus" tabIndex="0" alt="Plus Symbol" />
                  <IdentityEllipse className="identityEllipse" tabIndex="0" alt="Ellipse" />
                  <IdentityVector className="identityVector" tabIndex="0" alt="Vector" />
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
                <Link to="/add-culture/minority" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryOne">
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
                <Link to="/add-culture/diverse" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryTwo">
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
                <Link to="/add-culture/why" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryThree">
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
                <Link to="/add-culture/stories" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryFour">
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
                <Link to="/add-culture/representation" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} className="categorySelector" id="categoryFive">
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
  