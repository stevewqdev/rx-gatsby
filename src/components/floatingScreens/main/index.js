import React, { Component } from "react"
import SocialMenu from "../../socialMenu/index"
import { Link } from "gatsby"

import "../../floatingScreens/floatingScreens.css"

export default class MainFloatingScreen extends Component {
  toggleMenu() {
    document.getElementById("page__wrapper").classList.add("hide")
    document.getElementById("menu__full__screen").classList.add("show")
    document.querySelectorAll(".main__floating__menu .brand__menu")[0].classList.add("hidden");
    document.querySelectorAll(".menu__full__screen .brand__menu")[0].classList.remove("hidden");
    setTimeout(function(){
      document.querySelectorAll("#menu__full__screen .menu__separator")[0].classList.add("full");

    }, 700)
  }
  render() {
    return (
      <>
        <div className="container-fluid floating__web__info main__floating__menu relative full__height sm__font">
          <div className="row">
            <div
              className="col-xs-12 col-sm-2 col-md-2 col-lg-2 brand relative"
              id="brand"
            >
              <div className="fixed">
                <div  className="brand__logo"
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="450"
                      data-aos-duration="1200"
                >
                  <Link to="/">
                    <img
                      src={this.props.siteLogo.source_url}
                      alt={this.props.siteLogo.title}
                    />
                  </Link>
                </div>
                <div className="brand__menu bold__font ">
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="550"
                      data-aos-duration="1200"
                    className="brand__menu__toggle --closed d-flex align-items-center"
                    onClick={this.toggleMenu} role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.309"
                      height="30.775"
                      viewBox="0 0 23.309 30.775"
                    >
                      <g
                        id="Grupo_56"
                        data-name="Grupo 56"
                        transform="translate(-23.99 -548.612)"
                      >
                        <rect
                          id="Rectángulo_37"
                          data-name="Rectángulo 37"
                          width="2.369"
                          height="30.775"
                          transform="translate(44.929 548.612)"
                          fill="#f4f4f4"
                        />
                        <rect
                          id="Rectángulo_38"
                          data-name="Rectángulo 38"
                          width="2.369"
                          height="30.775"
                          transform="translate(34.46 548.612)"
                          fill="#f4f4f4"
                        />
                        <rect
                          id="Rectángulo_39"
                          data-name="Rectángulo 39"
                          width="2.369"
                          height="30.775"
                          transform="translate(23.99 548.612)"
                          fill="#f4f4f4"
                        />
                      </g>
                    </svg>
                    <p className="sm__font reg__font">Menu</p>
                  </div>
                </div>
                <div className="brand__social d-flex flex-column mobile-hidden">
                  <SocialMenu layout={"lateral__menu"}></SocialMenu>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 relative"></div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 relative"></div>
            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relative copy__one__column sm__font reg__font">
              <div className="fixed column__top__one">
                <p
                  data-aos="fade-down"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="600"
                  data-aos-duration="1200"
                  dangerouslySetInnerHTML={{
                    __html: this.props.siteAcf.web_info_column_one,
                  }}
                />
              </div>
            </div>
            <div className="col col-xs-6 col-sm-2 col-md-2 col-lg-2 relative copy__two__column sm__font reg__font">
              <div className="fixed column__top__two">
                <p
                  data-aos="fade-down"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="670"
                  data-aos-duration="1200"
                  dangerouslySetInnerHTML={{
                    __html: this.props.siteAcf.web_info_column_two,
                  }}
                />
              </div>
            </div>
            <div
              className="col col-xs-12 col-sm-2 col-md-2 col-lg-2 relative copyright__column reg__font mobile-hidden"
              id="copyright__column"
            >
              <div className="fixed copyright__inner"

              >
                <p
                  data-aos="fade-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                  data-aos-anchor="top"
                >{this.props.siteAcf.copyright_info}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
