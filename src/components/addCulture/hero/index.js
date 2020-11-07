import React, { useEffect } from "react"
import "./index.css"
import ScrollIndicator from "../../../images/addCulture/scrollIndicator.svg"
import HeroLine from "../../../images/addCulture/heroLine.svg"
import Plus from "../../../images/addCulture/plus.png"
import AOS from "aos"

export default function AddCultureHero() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div id="addCultureHero">
        <div className="addCultureHeroContent container-fluid">
          <div className="scrollIndicator">
            <ScrollIndicator tabIndex="0" alt="Scroll" />
          </div>
          <div className="addCultureText">
            <div className="about">
              <HeroLine tabIndex="0" alt="Hero Line" className="heroLine" />
              <h6
                data-aos="fade-right"
                data-duration="4000"
                className="whoWeAre"
              >
                WE ARE <br /> AD+D CULTURE
              </h6>
            </div>
            <h1 className="heroText">
              AMPLIFYING <br />
              THE VOICES <br />
              <span>
                THAT SET <br />
                THE TONE
              </span>
            </h1>
          </div>
          <div className="addCultureSymbol">
            <img data-aos="fade-left" data-duration="4000" src={Plus} />
          </div>
        </div>
      </div>
    </>
  )
}
