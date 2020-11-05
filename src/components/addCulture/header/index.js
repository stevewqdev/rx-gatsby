import React, { useEffect } from "react"
import Frame from '../../../images/addCulture/nav.svg'
import Arrow from '../../../images/addCulture/arrow.svg'
import './index.css';
import AOS from 'aos';

export default function Header() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
    <nav className="navbar">
      <div className="navContent">
        <div class="navbarMenuBurger">
          <div class="menuBurger">
            <div data-aos="fade-right" data-duration="4000" class="menuBurgerLineOne" style="width:38px"></div>
            <div data-aos="fade-right" data-duration="4300" class="menuBurgerLineTwo" style="width:29px"></div>
          </div>
        </div>
        <a data-aos="fade-right" data-duration="4000" className="brand__logo" href="/add-culture">
          <h1>AD+D <br/> CULTURE</h1>
        </a>
        <div data-aos="fade-right" data-duration="4000" className="storiesLink">
          <p className="explore"><span> <Arrow tabIndex="0" alt="Explore Stories" /> </span>EXPLORE <strong>STORIES</strong>  </p>
        </div>
      </div>
    </nav>
    </>
  )
}