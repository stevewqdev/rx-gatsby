import React from "react"
import Frame from '../../../images/addCulture/nav.svg'
import Arrow from '../../../images/addCulture/arrow.svg'
import './index.css';

export default function Header() {
  // function bgColor() {
  //   const sliders = document.querySelectorAll('.slider');
  //   if()
  // }

  return (
    <>
    <nav className="navbar">
      <div className="navContent">
        <div className="navToggler">
        <Frame alt="frame" tabIndex="0" />
        </div>
        <a className="brand__logo" href="/news">
          <h1>AD+D <br/> CULTURE</h1>
        </a>
        <div className="storiesLink">
          <p className="explore"><span> <Arrow tabIndex="0" alt="Explore Stories" /> </span>EXPLORE <strong>STORIES</strong>  </p>
        </div>
      </div>
    </nav>
    </>
  )
}