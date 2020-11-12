import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { Link } from "gatsby"
import NextArrow from "../../../images/addCulture/nextArrow.png"
import PrevArrow from "../../../images/addCulture/prevArrow.png"
import "./index.css"
import AOS from "aos"

export default class AddCultureSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      featured: [],
      render: false,
    }
  }

  getFeatured() {
    const featured = []
    this.props.featured.map(({ node }) => {
      return node.categories.map(category => {
        if (category.name === "Featured") {
          featured.push(node)
          return this.setState({
            featured: featured,
          })
        }
      })
    })
  }

  componentDidMount() {
    this.setState({
      render: true,
    })
    this.getFeatured()
    AOS.init()
  }

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      centerMode: false,
      className: "featuredSlider",
      slidesToShow: 1,
      nextArrow: <img src={NextArrow} alt="Next post" />,
      prevArrow: <img src={PrevArrow} alt="Previous post" />,
      onInit: function addClasses() {
        let slides = document.querySelectorAll(".featuredSlider .slick-slide")
        slides.forEach((slide, i, slides) => {
          let prevSlide = slides[i - 1]
          let nextSlide = slides[i + 1]
          if (slide[i] === slides.length - 1) {
            nextSlide = slides[0]
          }
          if (slide.classList.contains("slick-active")) {
            prevSlide.classList.add("slick-sprev")
            nextSlide.classList.add("slick-snext")
          }
        })
      },
      beforeChange: function removeClasses() {
        let slides = document.querySelectorAll(".featuredSlider .slick-slide")
        slides.forEach((slide, i, slides) => {
          if (slide.classList.contains("slick-sprev")) {
            slide.classList.remove("slick-sprev")
          } else if (slide.classList.contains("slick-snext")) {
            slide.classList.remove("slick-snext")
          }
          let prevSlide = slides[i - 1]
          let nextSlide = slides[i + 1]
          if (slide[i] === slides.length - 1) {
            nextSlide = slides[0]
          }
          if (slide.classList.contains("slick-active")) {
            prevSlide.classList.add("slick-sprev")
            nextSlide.classList.add("slick-snext")
          }
        })
      },
      afterChange: function addClasses() {
        let slides = document.querySelectorAll(".featuredSlider .slick-slide")
        slides.forEach((slide, i, slides) => {
          let prevSlide = slides[i - 1]
          let nextSlide = slides[i + 1]
          if (slide[i] === slides.length - 1) {
            nextSlide = slides[0]
          }
          if (slide.classList.contains("slick-active")) {
            prevSlide.classList.add("slick-sprev")
            nextSlide.classList.add("slick-snext")
          }
        })
      },
    }
    const { render } = this.state
    if (render) {
      return (
        <Slider {...settings}>
          {this.state.featured.map(post => (
            <div>
              <Img
                fluid={post.featured_media.localFile.childImageSharp.fluid}
                className="featuredImage"
                alt={post.title}
              />
              <div
                data-aos="fade-right"
                data-duration="4000"
                className="featuredPreview"
              >
                <div className="catAndDate">
                  <p className="featuredCat">{post.categories[0].name}</p>
                  <p className="featuredDate">{post.date}</p>
                </div>
                <h1 className="titleText">{post.title}</h1>
                <Link to={`/add-culture/post/${post.slug}`}>READ MORE+</Link>
              </div>
            </div>
          ))}
        </Slider>
      )
    }
    return null
  }
}
