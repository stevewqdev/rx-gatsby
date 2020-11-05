import React, { Component } from 'react';
import Img from 'gatsby-image';
import ReactPaginate from 'react-paginate';
import { Link } from 'gatsby';
import AddCultureLayout from '../layouts/addCultureLayout/index';
import Header from '../components/addCulture/header';
import CategoryCircle from '../images/addCulture/categories/categoryCircle.svg';
import FilterLine from '../images/addCulture/filterLine.svg';
import './filter.css';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPosts: [],
      offset: 0,
      perPage: 8,
      currentPage: 0,
      search: '',
      allPosts: this.props.pageContext.group,
    }
  }

  formatData() {
    // Format search term
    const searchTerm = this.props.location.search.split('?');
    const search = searchTerm[1];

    // Update search term in state
    this.setState({
      search: search
    })

    
    const data = [];
    // map data and filter posts by search term
    this.state.allPosts.map(({ node }) => {
      node.tags.map((tag) => {
        if(tag.slug === search) {
          data.push(node);
        }
      })
    })
    this.setState({filteredPosts: data}, function() {
      console.log(this.state.filteredPosts);
    })

    // make filtered data ready for pagination
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
    console.log(slice);
    const postData = slice.map((post) => <React.Fragment>
      <Link to={`/add-culture/post/${post.slug}`}>
        <div className={`adcSinglePost`}>
          <div className="contentContainer">
            <div className="catAndDateContainer">
            {post.categories[0].name === 'Popular' || post.categories[0].name === 'Featured' ? (
                <Link to={`/add-culture/post/${post.categories[1].slug.toLowerCase()}`} className="postCategory">{post.categories[1].name}</Link>
              ) : (
                <Link to={`/add-culture/post/${post.categories[0].slug.toLowerCase()}`} className="postCategory">{post.categories[0].name}</Link>
              )} 
              <p className="postDate">{post.date}</p>
            </div>
            <h2 className="postTitle">{post.title}</h2>
          </div>
          
          {post.featured_media.localFile.childImageSharp !== null ? (
            <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />
          ) : (
            ''
          )}
        </div>
      </Link>
    </React.Fragment>)
    console.log(postData);
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData
    }, function() {
      console.log(data);
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
    document.querySelector('.navbar').style.background = '#e5e5e5';
    this.formatData();
  }

  render() {
    return (
      <AddCultureLayout>
        <Header />
        <FilterLine alt="Filter Line" tabIndex="0" className="filterLine" />
        <div className="filterWrapper">
          <div className="filterHeader">
            <div className="filterHeaderContainer">
              <p>Results for</p>
              <h1>
                {this.state.search} 
                <span>/ {this.state.filteredPosts.length}</span>
              </h1>
            </div>

            <div className="filterTerms">
              <p>Filter by:</p>
              <ul>
                <li>All</li>
                <li>Newest</li>
                <li>Popular</li>
                <li>Recommended</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="filterPosts">
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