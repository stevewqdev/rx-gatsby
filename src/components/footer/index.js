import React, { Component } from "react"
import MainMenu from "../menu/index"
import SocialMenu from "../socialMenu/index"
import GetInTouch from "../../components/intouch/index"

import { Link } from "gatsby"
import "./index.css"
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <GetInTouch></GetInTouch>
          <div className="container container__custom">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 d-flex justify-start align-items-center footer__copyright">
                <p className="reg__font sm__font ">{this.props.copyright}</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
                <MainMenu
                  area={"footer"}
                  customClass="reg__font sm__font footer__menu d-flex"
                ></MainMenu>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 legal__menu col-lg-4 d-flex justify-content-center align-items-center">
                {this.props.menu.map((menuItem, index) => (
                  <Link
                    to={menuItem.url}
                    key={`${index + 1}-${this.props.menu.length}`}
                  >
                    <p className="reg__font sm__font footer__policy">
                      {menuItem.title}
                      {index + 1 < this.props.menu.length ? ", " : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="row mobile__bottom__info">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mobile__social">
                <div className="brand__social d-flex flex-column desktop-hidden">
                  <SocialMenu layout={"lateral__menu"}></SocialMenu>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 desktop-desktop reg__font xs__font mobile__copyright">
                <p>{this.props.copyright}</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
