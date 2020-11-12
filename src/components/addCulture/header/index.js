import React, { Component } from "react"
import { Link } from "gatsby"
import Arrow from "../../../images/addCulture/arrow.svg"
import MouseTooltip from "react-sticky-mouse-tooltip"
import "./index.css"
import AOS from "aos"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuMouseTooltipVisible: false,
    }
    this.showTooltipMenu = this.showTooltipMenu.bind(this)
    this.hideTooltipMenu = this.hideTooltipMenu.bind(this)
  }

  showTooltipMenu(event) {
    const tooltip = document.getElementById(`${event.target.id}-menu-container`)
    tooltip.classList.add("show")
    this.setState(prevState => ({
      isMenuMouseTooltipVisible: !prevState.isMenuMouseTooltipVisible,
    }))
  }

  hideTooltipMenu(event) {
    const tooltip = document.getElementById(`${event.target.id}-menu-container`)
    tooltip.classList.remove("show")
    this.setState(prevState => ({
      isMenuMouseTooltipVisible: !prevState.isMenuMouseTooltipVisible,
    }))
  }

  toggleMenu(event) {
    if (event.target.classList.contains("show")) {
      document.getElementById("categoriesMenu").classList.remove("show")
      document.getElementById("toggleClose").classList.remove("show")
    } else {
      document.getElementById("categoriesMenu").classList.add("show")
      document.querySelector(".categoriesNavMenu").classList.add("show")
      document.getElementById("toggleClose").classList.add("show")
    }
  }

  componentDidMount() {
    AOS.init()
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navContent container-fluid">
            <div className="navbarMenuBurger show" onClick={this.toggleMenu}>
              <div className="menuBurger">
                <div
                  data-aos="fade-right"
                  data-duration="4000"
                  className="menuBurgerLineOne"
                  style={{ width: "38px" }}
                ></div>
                <div
                  data-aos="fade-right"
                  data-duration="4300"
                  className="menuBurgerLineTwo"
                  style={{ width: "29px" }}
                ></div>
              </div>
            </div>
            <a
              data-aos="fade-right"
              data-duration="4000"
              className="brand__logo"
              href="/add-culture"
            >
              <h1>
                AD+D <br /> CULTURE
              </h1>
            </a>
            <div
              data-aos="fade-right"
              data-duration="4000"
              className="storiesLink"
            >
              <Link to="/" className="explore">
                <span>
                  {" "}
                  <Arrow tabIndex="0" alt="Explore Stories" />{" "}
                </span>
                BACK TO <strong>RAXO.CO</strong>{" "}
              </Link>
            </div>
          </div>
        </nav>

        <div className="col-lg-12 categoriesMenu" id="categoriesMenu">
          <svg
            onClick={this.toggleMenu}
            id="toggleClose"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 18L38 38" stroke="#FFC6C6" stroke-width="2" />
            <path d="M38 18L18 38" stroke="#FFC6C6" stroke-width="2" />
          </svg>
          <div id="categories" className="blogCategories">
            <div className="row">
              <div className="col-lg-12 col-sm-12 ml-auto">
                <div className="categoriesNavMenu">
                  <Link
                    to="/add-culture/minority"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryOne"
                  >
                    <p className="categoryNumber">01</p>
                    <h2 className="categoryName">
                      MINORITY <br /> OWNED <br /> AGENCIES
                    </h2>
                  </Link>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category minorityImg"
                      id="categoryOne-menu-container"
                    ></div>
                  </MouseTooltip>
                  <Link
                    to="/add-culture/why"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryThree"
                  >
                    <p className="categoryNumber">02</p>
                    <h2 className="categoryName">
                      WHY <br /> AD+D <br /> CULTURE
                    </h2>
                  </Link>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category whyImg"
                      id="categoryThree-menu-container"
                    ></div>
                  </MouseTooltip>
                  <Link
                    to="/add-culture/stories"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryFour"
                  >
                    <p className="categoryNumber">03</p>
                    <h2 className="categoryName">
                      AD+D <br /> CULTURE <br /> STORIES
                    </h2>
                  </Link>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category storiesImg"
                      id="categoryFour-menu-container"
                    ></div>
                  </MouseTooltip>
                  <Link
                    to="/add-culture/representation"
                    onMouseEnter={this.showTooltipMenu}
                    onMouseLeave={this.hideTooltipMenu}
                    className="categorySelector"
                    id="categoryFive"
                  >
                    <p className="categoryNumber">04</p>
                    <h2 className="categoryName">
                      REPRESENTATION <br /> DONE RIGHT
                    </h2>
                  </Link>
                  <MouseTooltip
                    visible={this.state.isMenuMouseTooltipVisible}
                    offsetX={-200}
                    offsetY={-200}
                  >
                    <div
                      className="category representationImg"
                      id="categoryFive-menu-container"
                    ></div>
                  </MouseTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
