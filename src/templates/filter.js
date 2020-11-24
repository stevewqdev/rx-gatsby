import React, { Component } from "react"
import Img from "gatsby-image"
import ReactPaginate from "react-paginate"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import AddCultureLayout from "../layouts/addCultureLayout/index"
import Header from "../components/addCulture/header"
import ScrollIndicatorDark from "../images/addCulture/scrollIndicatorDark.svg"
// import CategoryCircle from "../images/addCulture/categories/categoryCircle.svg"
import FilterLine from "../images/addCulture/filterLine.svg"
import "./filter.css"

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredPosts: [],
      offset: 0,
      perPage: 8,
      currentPage: 0,
      search: "",
      allPosts: this.props.pageContext.group,
    }

    this.filterPopularPosts = this.filterPopularPosts.bind(this)
    this.filterFeaturedPosts = this.filterFeaturedPosts.bind(this)
    this.filterNewestPosts = this.filterNewestPosts.bind(this)
    this.formatData = this.formatData.bind(this)
  }

  // formatCategories(arr) {
  //   arr.forEach(({ node }) => {
  //     node.categories.forEach(category => {
  //       if (category.name === "Minority Owned Agencies") {
  //         category.name = "Min. Owned Agencies"
  //       }
  //     })
  //   })
  // }

  formatData() {
    this.removeActiveClass()
    document.querySelector(".all").classList.add("blog__active")
    // Format search term
    const searchTerm = this.props.location.search.split("?")
    const search = searchTerm[1]

    // Update search term in state
    this.setState({
      search: search,
    })

    const data = []
    // map data and filter posts by search term
    this.state.allPosts.forEach(({ node }) => {
      node.tags.forEach(tag => {
        if (tag.slug === search) {
          data.push(node)
        }
      })
    })
    this.setState({ filteredPosts: data })

    // make filtered data ready for pagination

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    )
    // this.formatCategories(slice)
    console.log(slice)
    const postData = slice.map(post => (
      <React.Fragment>
        <Link to={`/addculture/post/${post.slug}`}>
          <div className={`adcSinglePost`}>
            <div className="contentContainer">
              <div className="catAndDateContainer">
                {post.categories[0].name === "Popular" ||
                post.categories[0].name === "Featured" ? (
                  <Link
                    to={`/addculture/${post.categories[1].slug.toLowerCase()}`}
                    className="postCategory"
                  >
                    {post.categories[1].name}
                  </Link>
                ) : (
                  <Link
                    to={`/addculture/${post.categories[0].slug.toLowerCase()}`}
                    className="postCategory"
                  >
                    {post.categories[0].name}
                  </Link>
                )}
                <p className="postDate">{post.date}</p>
              </div>
              <h2 className="postTitle">{post.title}</h2>
            </div>

            {post.featured_media !== null ? (
              <Img
                fluid={post.featured_media.localFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
          </div>
        </Link>
      </React.Fragment>
    ))
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      postData,
    })
  }

  handlePageClick = e => {
    const selectedPage = e.selected
    const offset = selectedPage * this.state.perPage

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.formatData()
      }
    )
  }

  removeActiveClass() {
    let link = document.querySelector(".blog__active")
    if (link) {
      link.classList.remove("blog__active")
    } else {
      return
    }
  }

  filterNewestPosts(e) {
    this.removeActiveClass()
    e.target.classList.add("blog__active")
    const searchTerm = this.props.location.search.split("?")
    const search = searchTerm[1]
    let args = e.target.textContent
    let newest = []

    if (args === "Newest") {
      this.state.allPosts.forEach(({ node }, i) => {
        node.tags.forEach(tag => {
          if (tag.name === search && i < 10) {
            newest.push(node)
          }
        })
      })

      const slice = newest.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      )
      // this.formatCategories(slice)
      const postData = slice.map(post =>
        post ? (
          <React.Fragment>
            <Link to={`/addculture/post/${post.slug}`}>
              <div className={`adcSinglePost`}>
                <div className="contentContainer">
                  <div className="catAndDateContainer">
                    {post.categories[0].name === "Popular" ||
                    post.categories[0].name === "Featured" ? (
                      <Link
                        to={`/addculture/${post.categories[1].slug.toLowerCase()}`}
                        className="postCategory"
                      >
                        {post.categories[1].name}
                      </Link>
                    ) : (
                      <Link
                        to={`/addculture/${post.categories[0].slug.toLowerCase()}`}
                        className="postCategory"
                      >
                        {post.categories[0].name}
                      </Link>
                    )}
                    <p className="postDate">{post.date}</p>
                  </div>
                  <h2 className="postTitle">{post.title}</h2>
                </div>

                {post.featured_media !== null ? (
                  <Img
                    fluid={post.featured_media.localFile.childImageSharp.fluid}
                  />
                ) : (
                  ""
                )}
              </div>
            </Link>
          </React.Fragment>
        ) : (
          <p className="notFound">There's no content here</p>
        )
      )
      this.setState({
        pageCount: Math.ceil(newest.length / this.state.perPage),
        postData,
      })
    }
  }

  filterFeaturedPosts(e) {
    this.removeActiveClass()
    e.target.classList.add("blog__active")
    const searchTerm = this.props.location.search.split("?")
    const search = searchTerm[1]
    let args = e.target.textContent
    let featured = []

    if (args === "Featured") {
      this.state.allPosts.forEach(({ node }) => {
        node.tags.forEach(tag => {
          if (tag.name === search) {
            node.categories.forEach(cat => {
              if (cat.name === "Featured") {
                featured.push(node)
              }
            })
          }
        })
      })

      const slice = featured.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      )
      // this.formatCategories(slice)
      console.log(slice)
      const postData = slice.map(post =>
        post ? (
          <React.Fragment>
            <Link to={`/addculture/post/${post.slug}`}>
              <div className={`adcSinglePost`}>
                <div className="contentContainer">
                  <div className="catAndDateContainer">
                    {post.categories[0].name === "Popular" ||
                    post.categories[0].name === "Featured" ? (
                      <Link
                        to={`/addculture/${post.categories[1].slug.toLowerCase()}`}
                        className="postCategory"
                      >
                        {post.categories[1].name}
                      </Link>
                    ) : (
                      <Link
                        to={`/addculture/${post.categories[0].slug.toLowerCase()}`}
                        className="postCategory"
                      >
                        {post.categories[0].name}
                      </Link>
                    )}
                    <p className="postDate">{post.date}</p>
                  </div>
                  <h2 className="postTitle">{post.title}</h2>
                </div>

                {post.featured_media !== null ? (
                  <Img
                    fluid={post.featured_media.localFile.childImageSharp.fluid}
                  />
                ) : (
                  ""
                )}
              </div>
            </Link>
          </React.Fragment>
        ) : (
          <p className="notFound">There's no content here</p>
        )
      )
      this.setState({
        pageCount: Math.ceil(featured.length / this.state.perPage),
        postData,
      })
    }
  }

  filterPopularPosts(e) {
    this.removeActiveClass()
    e.target.classList.add("blog__active")
    const searchTerm = this.props.location.search.split("?")
    const search = searchTerm[1]
    let args = e.target.textContent
    let popular = []

    if (args === "Popular") {
      this.state.allPosts.forEach(({ node }) => {
        node.tags.forEach(tag => {
          if (tag.name === search) {
            node.categories.forEach(cat => {
              if (cat.name === "Popular") {
                popular.push(node)
              }
            })
          }
        })
      })

      const slice = popular.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      )
      // this.formatCategories(slice)
      console.log(slice)
      const postData = slice.map(post =>
        post ? (
          <React.Fragment>
            <Link to={`/addculture/post/${post.slug}`}>
              <div className={`adcSinglePost`}>
                <div className="contentContainer">
                  <div className="catAndDateContainer">
                    {post.categories[0].name === "Popular" ||
                    post.categories[0].name === "Featured" ? (
                      <Link
                        to={`/addculture/${post.categories[1].slug.toLowerCase()}`}
                        className="postCategory"
                      >
                        {post.categories[1].name}
                      </Link>
                    ) : (
                      <Link
                        to={`/addculture/${post.categories[0].slug.toLowerCase()}`}
                        className="postCategory"
                      >
                        {post.categories[0].name}
                      </Link>
                    )}
                    <p className="postDate">{post.date}</p>
                  </div>
                  <h2 className="postTitle">{post.title}</h2>
                </div>

                {post.featured_media !== null ? (
                  <Img
                    fluid={post.featured_media.localFile.childImageSharp.fluid}
                  />
                ) : (
                  ""
                )}
              </div>
            </Link>
          </React.Fragment>
        ) : (
          <p className="notFound">There's no content here</p>
        )
      )
      this.setState({
        pageCount: Math.ceil(popular.length / this.state.perPage),
        postData,
      })
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    document.querySelector(".navbar").style.background = "#e5e5e5"
    document.querySelector(".scrollIcon path").style.fill = "#222220"
    document.querySelector(".scrollIcon line").style.stroke = "#222220"
    this.formatData()
  }

  render() {
    return (
      <AddCultureLayout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Search</title>
          <link rel="canonical" href={"/addculture/search"} />
        </Helmet>
        <Header />
        <ScrollIndicatorDark tabIndex="0" alt="scroll" className="scrollIcon" />
        <FilterLine alt="Filter Line" tabIndex="0" className="filterLine" />
        <div className="filterWrapper">
          <div className="container-fluid">
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
                  <li>
                    <p className="all blog__active" onClick={this.formatData}>
                      All
                    </p>
                  </li>
                  <li>
                    <p onClick={this.filterNewestPosts}>Newest</p>
                  </li>
                  <li>
                    <p onClick={this.filterPopularPosts}>Popular</p>
                  </li>
                  <li>
                    <p onClick={this.filterFeaturedPosts}>Featured</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="container-fluid">
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
                      activeClassName={"active"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AddCultureLayout>
    )
  }
}
