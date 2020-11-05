import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from '../components/addCulture/header'
import CategoryCircle from '../images/addCulture/categories/categoryCircle.svg'
import CategoryLine from '../images/addCulture/categories/categoryLine.svg'
import ScrollIndicatorDark from '../images/addCulture/scrollIndicatorDark.svg'

import './category.css'
import './why.css'

export default class Why extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.pageContext.group,
      offset: 0,
      perPage: 8,
      currentPage: 0
    }
  }

  formatData() {
    const data = this.state.posts;
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
    const postData = slice.map(({ node }, i) => <React.Fragment>
      <Link to={`/add-culture/post/${node.slug}`}>
        <div className={`adcSinglePost post-${i}`}>
          <div className="contentContainer">
            <div className="catAndDateContainer">
              {node.categories[0].name === 'Popular' || node.categories[0].name === 'Featured' ? (
                <Link to={`/add-culture/post/${node.categories[1].slug.toLowerCase()}`} className="postCategory">{node.categories[1].name}</Link>
              ) : (
                ''
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
    document.querySelector('.navbar').style.background = '#f4f4f4';
    this.formatData();
    console.log(this.state.posts);
  }

  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={"Why Ad+d Culture - Add Culture"} />
          <title>Why Ad+d Culture ~ Add Culture</title>
          <link rel="canonical" href={"/news/why"} />
        </Helmet>
        <div className="main__section__wrapper blog__page">
          <Header />
          <div className="categoryHero whyBanner">
            <div className="heroContainer">
              <CategoryCircle tabIndex="0" alt="circle" className="categoryCircle" />
              <p>03</p>
              <h1>WHY AD+D <br/> CULTURE</h1>
              <CategoryLine tabIndex="0" alt="line" className="categoryLine" />
            </div>
          </div>
          <ScrollIndicatorDark tabIndex="0" alt="scroll" className="scroll-icon" />
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="categoryPosts">
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
      </AddCultureLayout>
    )
  }
}