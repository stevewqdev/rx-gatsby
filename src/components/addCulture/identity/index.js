import React, { Component } from 'react'
import ScrollIndicatorDark from '../../../images/addCulture/scrollIndicatorDark.svg'
import IdentityPlus from '../../../images/addCulture/identityPlus.svg';
import IdentityScratch from '../../../images/addCulture/identityScratch.svg';
import IdentityTriangle from '../../../images/addCulture/identityTriangle.svg';
import IdentityTopEllipses from '../../../images/addCulture/identityTopEllipses.svg';
import IdentityInverseVector from '../../../images/addCulture/identityInverseVector.svg';
import IdentityLine from '../../../images/addCulture/identityLine.svg';
import IdentityCircles from '../../../images/addCulture/identityCircles.svg'
import IdentityHalfCircle from '../../../images/addCulture/identityHalfCircle.svg';
import IdentityEllipse from '../../../images/addCulture/identityEllipse.svg';
import IdentityVector from '../../../images/addCulture/identityVector5.svg'

export default class Identity extends Component {
  render() {
    return (
      <div id="identity" className="blogIdentity">
        <div className="row">
          <div className="scrollIndicatorDark">
            <ScrollIndicatorDark tabIndex="0" alt="Scroll" />
          </div>
          <IdentityTriangle className="identityTriangle" tabIndex="0" alt="Triangle"/>
          <IdentityTopEllipses className="identityTopEllipses" tabIndex="0" alt="Top Ellipses" />
          <IdentityInverseVector className="identityInverseVector" tabIndex="0" alt="Inverse Vector" />
          <IdentityLine className="identityLine" tabIndex="0" alt="Line" />
          <IdentityCircles className="identityCircles" tabIndex="0" alt="Circles" />
          <IdentityHalfCircle className="identityHalfCircle" tabIndex="0" alt="Bottom Circle" />
          <div className="identityContent">
            <IdentityScratch className="identityScratch" tabIndex="0" alt="Identity Scratch" />
            <IdentityPlus className="identityPlus" tabIndex="0" alt="Plus Symbol" />
            <IdentityEllipse className="identityEllipse" tabIndex="0" alt="Ellipse" />
            <IdentityVector className="identityVector" tabIndex="0" alt="Vector" />
            <h1 class="identityHeading">AD+D <br/> CULTURE</h1>
            <p class="identityText">
              AMPLIFYING THE VOICES <br/> THAT SET THE TONE
            </p>
          </div>
        </div>
      </div>
    )
  }
}
