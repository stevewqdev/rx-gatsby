import React, { Component } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { Link } from "gatsby"
import NextArrow from "../../../images/addCulture/nextArrow.png"
import PrevArrow from "../../../images/addCulture/prevArrow.png"
import "./popular.css"

export default class PopularSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popular: this.props.popular,
    }
  }

  // afterChange: function showData() {
  //   const posts = document.querySelectorAll('.popularSlider .slick-slide');
  //   let title = '';
  //   let category = '';
  //   let date = '';
  //   let slug = '';
  //   let featuredImage = '';
  //   let placeholderContainer = document.getElementById('placeholderContainer');
  //   posts.forEach((post) => {
  //     if(post.classList.contains('slick-active')) {
  //       title = post.querySelector('.titleText').textContent;
  //       category = post.querySelector('.popularCat').textContent;
  //       date = post.querySelector('.popularDate').textContent;
  //       slug = post.querySelector('.content a').getAttribute('href');
  //       featuredImage = post.querySelector('img').getAttribute('src');

  //     }
  //   })

  //   const printData = `
  //     <img src=${featuredImage} alt=${title} className="popularImage" />
  //     <div className="infoContainer">
  //       <p className="popularCategory">${category}</p>
  //       <p className="popDate">${date}</p>
  //     </div>
  //     <h1 className="postTitleText">${title}</h1>
  //     <Link to='/add-culture/post/${slug}'>READ MORE+</Link>
  //   `;
  //   placeholderContainer.innerHTML = '';
  //   placeholderContainer.innerHTML += printData;
  // }

  render() {
    const settings = {
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
          .getElementsByClassName("popularImage")[0]
          .children[1].getAttribute("src")
        console.log(featuredImage)
        let placeholderContainer = document.getElementById(
          "placeholderContainer"
        )
        const printData = `
          <img src="${featuredImage}" alt="${title}" />
          <div className="infoContainer">
            <p className="popularCategory">${category}</p>
            <p className="popDate">${date}</p>
          </div>
          <h1 className="postTitleText">${title}</h1>
          <Link to="${slug}">READ MORE+</Link>
        `
        console.log(printData)
        placeholderContainer.innerHTML += printData
      },
    }
    return (
      <>
        <div className="activePlaceholder">
          <div id="placeholderContainer"></div>
        </div>
        <Slider {...settings}>
          {this.state.popular.map(post => (
            <div>
              <Img
                id="popularImage"
                fluid={post.featured_media.localFile.childImageSharp.fluid}
                className="popularImage"
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
                      <p id="category" className="popularCat">
                        Uncategorized
                      </p>
                    )
                  )}
                  <p id="date" className="popularDate">
                    {post.date}
                  </p>
                </div>
                <h1 id="title" className="titleText">
                  {post.title}
                </h1>
                <Link
                  className="postLink"
                  to={`/add-culture/post/${post.slug}`}
                >
                  READ MORE+
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </>
    )
  }
}
