import React, { Component } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { Link } from "gatsby"
import NextArrow from "../../../images/addCulture/nextArrow.png"
import PrevArrow from "../../../images/addCulture/prevArrow.png"
import AOS from "aos"
import "./popular.css"

export default class PopularSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popular: [],
    }
  }

  getPopular() {
    const popular = []
    this.props.popular.forEach(({ node }) => {
      node.categories.forEach(category => {
        if (category.name === "Popular") {
          popular.push(node)
          return this.setState(
            {
              popular: popular,
            },
            function() {
              console.log(popular)
            }
          )
        }
      })
    })
  }

  componentDidMount() {
    this.getPopular()
    AOS.init()
  }

  render() {
    const popularSettings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      centerMode: false,
      className: "popularSlider",
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <img src={NextArrow} tabIndex="0" alt="Next post" />,
      prevArrow: <img src={PrevArrow} tabIndex="0" alt="Previous post" />,
      onInit: function showData() {
        const posts = document.querySelectorAll(".popularSlider .slick-active")

        let title = posts[0].getElementsByClassName("titleText")[0].textContent
        let category = posts[0].getElementsByClassName("popularCat")[0]
          .textContent
        let date = posts[0].getElementsByClassName("popularDate")[0].textContent
        let slug = posts[0]
          .getElementsByClassName("postLink")[0]
          .getAttribute("href")
        let featuredImage = posts[0]
          .getElementsByClassName("srcImage")[0]
          .getAttribute("src")
        console.log(featuredImage)
        let placeholderContainer = document.getElementById(
          "placeholderContainer"
        )
        const printData = `
          <img data-aos="fade-left" data-duration="4000" class="placeHolderImg" src=${featuredImage} alt=${title} />
          <div data-aos="fade-right" data-duration="4000" class="content">
            <div class="infoContainer">
              <p class="popularCategory">${category}</p>
              <p class="popDate">${date}</p>
            </div>
            <h1 class="postTitleText">${title}</h1>
            <a href=${slug}>READ MORE+</a>
          </div>
        `
        placeholderContainer.innerHTML += printData
      },
      beforeChange: function clear() {
        document.getElementById("placeholderContainer").innerHTML = ""
      },
      afterChange: function showData() {
        const posts = document.querySelectorAll(".popularSlider .slick-active")

        let title = posts[0].getElementsByClassName("titleText")[0].textContent
        let category = posts[0].getElementsByClassName("popularCat")[0]
          .textContent
        let date = posts[0].getElementsByClassName("popularDate")[0].textContent
        let slug = posts[0]
          .getElementsByClassName("postLink")[0]
          .getAttribute("href")
        let featuredImage = posts[0]
          .getElementsByClassName("srcImage")[0]
          .getAttribute("src")
        let placeholderContainer = document.getElementById(
          "placeholderContainer"
        )
        const printData = `
          <img class="placeHolderImg" src=${featuredImage} alt=${title} />
          <div class="content">
            <div class="infoContainer">
              <p class="popularCategory">${category}</p>
              <p class="popDate">${date}</p>
            </div>
            <h1 class="postTitleText">${title}</h1>
            <a href=${slug}>READ MORE+</a>
          </div>
        `
        placeholderContainer.innerHTML += printData
      },
    }
    return (
      <Slider {...popularSettings}>
        {this.state.popular.map(post => (
          <div>
            <Img
              fluid={post.featured_media.localFile.childImageSharp.fluid}
              className="popularImage"
              alt={post.title}
            />
            <img
              id="popularImage"
              src={post.featured_media.source_url}
              className="srcImage d-none"
              alt={post.title}
            />
            <div className="content">
              <div className="catAndDate">
                {post.categories.map(category =>
                  category.name !== "Featured" ||
                  category.name !== "Popular" ? (
                    <p id="category" className="popularCat">
                      {category.name}
                    </p>
                  ) : (
                    ""
                  )
                )}
                <p id="date" className="popularDate">
                  {post.date}
                </p>
              </div>
              <h1 id="title" className="titleText">
                {post.title}
              </h1>
              <Link className="postLink" to={`/add-culture/post/${post.slug}`}>
                READ MORE+
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    )
  }
}
