import React from 'react';
import Slider from 'react-slick';
import SliderTest from '../../../images/addCulture/sliderTest.svg';
import NextArrow from '../../../images/addCulture/nextArrow.svg'
import PrevArrow from '../../../images/addCulture/prevArrow.svg'
import './index.css';

export default class AddCultureSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      centerMode: true,
      className: 'featuredSlider',
      slidesToShow: 1,
      nextArrow: <NextArrow tabIndex="0" alt="Next post" />,
      prevArrow: <PrevArrow tabIndex="0" alt="Previous post" />,
      onInit: function slider3d() {
        let slides = document.querySelectorAll('.featuredSlider .slick-slide');
        slides.forEach((slide, i, slides) => {
          let prevSlide = slides[i - 1];
          let nextSlide = slides[i + 1];
          if(slide.classList.contains('slick-active')) {
            prevSlide.classList.add('slick-sprev');
            nextSlide.classList.add('slick-snext');
          }
        })
      },
      afterChange: function slider3d() {
        let slides = document.querySelectorAll('.slick-slide');
        slides.forEach((slide, i, slides) => {
          let prevSlide = slides[i - 1];
          let nextSlide = slides[i + 1];
          if(slide.classList.contains('slick-active')) {
            prevSlide.classList.add('slick-sprev');
            nextSlide.classList.add('slick-snext');
          }
        })
      },
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <SliderTest tabIndex="0" alt="Slider Test"/>
            <div className="catAndDate">
              <p>Culture <span>07.04.20</span></p>
            </div>
            <h1 className="titleText">HERE IS A TITLE FOR THE NOTE <br/> AND SOME MORE TEXT MORE TEXT</h1>
            <a href="/news">READ MORE+</a>
          </div>
          <div>
            <SliderTest tabIndex="0" alt="Slider Test"/>
            <div className="catAndDate">
              <p>Culture <span>07.04.20</span></p>
            </div>
            <h1 className="titleText">HERE IS A TITLE FOR THE NOTE <br/> AND SOME MORE TEXT MORE TEXT</h1>
            <a href="/news">READ MORE+</a>
          </div>
          <div>
            <SliderTest tabIndex="0" alt="Slider Test"/>
            <div className="catAndDate">
              <p>Culture <span>07.04.20</span></p>
            </div>
            <h1 className="titleText">HERE IS A TITLE FOR THE NOTE <br/> AND SOME MORE TEXT MORE TEXT</h1>
            <a href="/news">READ MORE+</a>
          </div>
        </Slider>
      </div>
    )
  }
}