import React from "react"
import './index.css';
import Scroll from '../../../images/addCulture/scroll.svg';
import Line from '../../../images/addCulture/line.svg';
import HeroLine from '../../../images/addCulture/heroLine.svg';
import Plus from '../../../images/addCulture/plus.png';

export default function AddCultureHero() {
  return (
    <>
    <div id="addCultureHero">
      <div className="addCultureHeroContent">
        <div className="scrollIndicator">
          <Scroll tabIndex="0" alt="Scroll" />
          <Line tabIndex="0" alt="Line" style={{marginTop: '10px', marginLeft: '6px'}} />
        </div>
        <div className="addCultureText">
          <HeroLine tabIndex="0" alt="Hero Line" style={{position: 'absolute', top: '24vh', left: '12.5vw'}}/>
          <h6 className="whoWeAre">WE ARE <br/> AD+D CULTURE</h6>
          <h1 className="heroText">
            AMPLIFYING <br/>
            THE VOICES <br/>
            <span>
              THAT SET <br/>
              THE TONE
            </span>
          </h1>
        </div>
        <div className="addCultureSymbol">
          <img src={Plus} />
        </div>
      </div>
    </div>
  </>
  )
}