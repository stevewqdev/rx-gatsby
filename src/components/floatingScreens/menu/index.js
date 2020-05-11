import React, { Component } from "react"
import MainMenu from "../../menu/index"
import SocialMenu from "../../socialMenu/index"
import { Link } from "gatsby"
import "./index.css"
import "../../floatingScreens/floatingScreens.css"

export default class MainMenuFloatingScreen extends Component {
  toggleMenu() {
    document.getElementById("page__wrapper").classList.remove("hide")
    document.getElementById("menu__full__screen").classList.remove("show")
    document.querySelectorAll(".main__floating__menu .brand__menu")[0].classList.remove("hidden");
    document.querySelectorAll(".menu__full__screen .brand__menu")[0].classList.add("hidden");
  }
  componentDidMount(){
    [...document.getElementsByClassName("floating-menu")[0].childNodes].map(item => {
      item.addEventListener("click", this.toggleMenu);
      document.querySelectorAll(".main__floating__menu .brand__menu")[0].classList.remove("hidden");
      document.querySelectorAll(".menu__full__screen .brand__menu")[0].classList.add("hidden");
    }) 
  }
  render() {
    return (
      <>
        <div
          className="container-fluid fixed menu__full__screen  floating__web__info  full__height sm__font"
          id="menu__full__screen"
        >
          <div className="lateral__click" onClick={this.toggleMenu}>

          </div>
          <div className="row">
            <div
              className="col-xs-12 col-sm-2 col-md-2 col-lg-2 brand relative"
              id="brand"
            >
              <div className="fixed">
                <div className="brand__logo">
                <Link to="/">
                    <img
                      src={this.props.siteLogo.source_url}
                      alt={this.props.siteLogo.title}
                    />
                  </Link>
                </div>
                <div className="brand__menu bold__font "  onClick={this.toggleMenu} role="button">
                  <div
                    className="brand__menu__toggle --opened d-flex align-items-center"
                   
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.309"
                      height="30.775"
                      viewBox="0 0 23.309 30.775"
                    >
                      <g
                        id="Grupo_102"
                        data-name="Grupo 102"
                        transform="translate(-23.99 -7448.256)"
                      >
                        <path
                          fill="#f4f4f4"
                          id="Trazado_52"
                          data-name="Trazado 52"
                          d="M47.3,7448.256H44.929l-20.94,30.775h2.369Z"
                        />
                        <path
                          fill="#f4f4f4"
                          id="Trazado_53"
                          data-name="Trazado 53"
                          d="M23.99,7448.256h2.369l20.94,30.775H44.929Z"
                        />
                      </g>
                    </svg>

                    <p className="sm__font reg__font">Close</p>
                  </div>
                </div>
                <div className="brand__social d-flex flex-column mobile-hidden">
                  <SocialMenu layout={"lateral__menu"}></SocialMenu>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 main__page__menu col-lg-4 relative d-flex align-items-center">
              <MainMenu customClass="floating-menu"></MainMenu>
              <div
                  className="sm__font reg__font menu__agreements"
                  dangerouslySetInnerHTML={{ __html: this.props.agreements }}
              />
            </div>
            <div className="col-xs-6 col-sm-2 col-md-2 col-lg-2 relative copy__one__column sm__font reg__font">
              <div className="absolute">
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.props.siteAcf.web_info_column_one,
                  }}
                />
              </div>
              <div className="copy__one__column__extra__menu">
                <div className="menu__email">
                  <p className="md__font bold__font menu__section__title">
                    Email Address
                  </p>
                  <p className=" sm__font reg__font">
                    <a href={`mailto:${this.props.siteAcf.contact_email}`}>
                      {this.props.siteAcf.contact_email}
                    </a>
                  </p>
                </div>
                {/* <p className="md__font bold__font menu__section__title">Phone</p>
                <p className=" reg__font ">
                  <a href={`tel:${this.props.siteAcf.contact_phone}`}>
                    {this.props.siteAcf.contact_phone}
                  </a>
                </p> */}
                <div className="menu__social">
                  <p className="md__font bold__font menu__section__title">
                    Social Media
                  </p>
                  <SocialMenu fontSize="sm__font no__decoration" layout={"full__screen__menu"}></SocialMenu>
                </div>
              </div>
            </div>
            <div className="col col-xs-6 col-sm-2 col-md-2 col-lg-2 relative copy__two__column sm__font reg__font">
              <div className="absolute">
                <p
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
              <div className="fixed">
                <p>{this.props.siteAcf.copyright_info}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
