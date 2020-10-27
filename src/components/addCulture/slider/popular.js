import React from 'react'
import Slider from 'react-slick'
import PopularSliderTest from '../../../images/addCulture/popularSliderTest.png'
import NextArrow from '../../../images/addCulture/nextArrow.svg'
import PrevArrow from '../../../images/addCulture/prevArrow.svg'
import './popular.css'

export default class PopularSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      centerMode: true,
      className: 'popularSlider',
      slidesToShow: 1,
      nextArrow: <NextArrow tabIndex="0" alt="Next post" />,
      prevArrow: <PrevArrow tabIndex="0" alt="Previous post" />,
      onInit: function popular3d() {
        let slides = document.querySelectorAll('.slick-slide');
        slides.forEach((slide, i, slides) => {
          let prevSlide = slides[i - 1];
          let nextSlide = slides[i + 1];
          if(slide.classList.contains('slick-active')) {
            prevSlide.classList.add('popular-prev');
            nextSlide.classList.add('popular-next');
          }
        })
      },
    }
  return (
    <div style={{maxWidth: '100vw', width: '100%'}}>
      <Slider {...settings}>
      <div>
        <img src={PopularSliderTest} alt="Popular"/>
        <div className="content">
          <div className="catAndDate">
            <p>Culture <span>07.04.20</span></p>
          </div>
          <h1 className="titleText">HERE IS A TITLE FOR THE NOTE <br/> AND SOME MORE TEXT MORE TEXT</h1>
          <a href="/news">READ MORE+</a>
        </div>
      </div>
      <div>
        <img src={PopularSliderTest} alt="Popular"/>
        <div className="content">
          <div className="catAndDate">
            <p>Culture <span>07.04.20</span></p>
          </div>
          <h1 className="titleText">HERE IS A TITLE FOR THE NOTE <br/> AND SOME MORE TEXT MORE TEXT</h1>
          <a href="/news">READ MORE+</a>
        </div>
      </div>
      <div>
        <img src={PopularSliderTest} alt="Popular"/>
        <div className="content">
          <div className="catAndDate">
            <p>Culture <span>07.04.20</span></p>
          </div>
          <h1 className="titleText">HERE IS A TITLE FOR THE NOTE <br/> AND SOME MORE TEXT MORE TEXT</h1>
          <a href="/news">READ MORE+</a>
        </div>
      </div>
    </Slider>
  </div>
  )
  }
}