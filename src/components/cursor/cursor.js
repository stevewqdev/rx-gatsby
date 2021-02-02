import React, { Component } from "react"

import "./cursor.css"

export default class cursor extends Component {
  transformCursor() {
    const aLinks = [...document.querySelectorAll("a")]
    const buttons = [...document.querySelectorAll("button")]
    const inputElements = [...document.querySelectorAll("input")]
    const toggler = [...document.querySelectorAll(".brand__menu__toggle")]
    const shareButtons = [...document.querySelectorAll(".share__project")]
    const svgs = [...document.querySelectorAll("svg")]
    const videos = [...document.querySelectorAll("video")]
    const HomeVideo = [...document.querySelectorAll(".video__home__wrapper")]
    const iframes = [...document.querySelectorAll("iframe")]
    const toggleOffices = [...document.querySelectorAll(".button__office")]
    const servicesList = [
      ...document.querySelectorAll(".recognition__list__item"),
    ]
    const projects = [...document.querySelectorAll(".the__project")]
    const cards = [...document.querySelectorAll(".news-card")]

    const allElements = aLinks
      .concat(buttons)
      .concat(inputElements)
      .concat(toggler)
      .concat(shareButtons)
      .concat(svgs)
      .concat(videos)
      .concat(HomeVideo)
      .concat(iframes)
      .concat(toggleOffices)
      .concat(servicesList)
      .concat(projects)
      .concat(cards)
    allElements.forEach(function(element) {
      element.addEventListener("mouseenter", function() {
        const theCursor = document.querySelector(".cursor")
        theCursor.classList.add("morphed--cursor")
      })
      element.addEventListener("mouseleave", function() {
        const theCursor = document.querySelector(".cursor")
        theCursor.classList.remove("morphed--cursor")
      })
    })
  }

  createCustomCursor() {
    let el = document.querySelectorAll(".cursor")[0]
    this.DOM = el
    this.DOM.dot = this.DOM.querySelector(".cursor__inner--dot")
    this.DOM.circle = this.DOM.querySelector(".cursor__inner--circle")
    this.bounds = {
      dot: this.DOM.dot.getBoundingClientRect(),
      circle: this.DOM.circle.getBoundingClientRect(),
    }
    this.scale = 1
    this.opacity = 1
    this.mousePos = { x: 0, y: 0 }
    this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } }
    this.lastScale = 1

    this.initEvents()
    requestAnimationFrame(() => this.renderCursor())
  }

  initEvents() {
    var body = document.body
    var getMousePos = e => {
      let posx = 0
      let posy = 0
      if (!e) e = window.event
      if (e.pageX || e.pageY) {
        posx = e.pageX
        posy = e.pageY
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop
      }
      return { x: posx, y: posy }
    }
    window.addEventListener(
      "mousemove",
      ev => (this.mousePos = getMousePos(ev))
    )
  }

  renderCursor() {
    var lerp = (a, b, n) => (1 - n) * a + n * b

    this.lastMousePos.dot.x = lerp(
      this.lastMousePos.dot.x,
      this.mousePos.x - this.bounds.dot.width / 2,
      1
    )
    this.lastMousePos.dot.y = lerp(
      this.lastMousePos.dot.y,
      this.mousePos.y - this.bounds.dot.height / 2,
      1
    )
    this.lastMousePos.circle.x = lerp(
      this.lastMousePos.circle.x,
      this.mousePos.x - this.bounds.circle.width / 2,
      0.19
    )
    this.lastMousePos.circle.y = lerp(
      this.lastMousePos.circle.y,
      this.mousePos.y - this.bounds.circle.height / 2,
      0.19
    )
    this.lastScale = lerp(this.lastScale, this.scale, 0.19)
    this.DOM.dot.style.transform = `translateX(${this.lastMousePos.dot.x}px) translateY(${this.lastMousePos.dot.y}px)`
    this.DOM.circle.style.transform = `translateX(${this.lastMousePos.circle.x}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`

    requestAnimationFrame(() => this.renderCursor())
  }

  enter() {
    //this.scale = 1.3;
    this.DOM.dot.style.display = "none"
  }

  leave() {
    //this.scale = 1;
    this.DOM.dot.style.display = ""
  }

  componentDidMount() {
    this.createCustomCursor()
    // const script = document.createElement("script")

    // script.src = "https://motion.raxo.tv/custom-cursor/cursor.js"
    // script.async = true

    // document.body.appendChild(script)
    if (window.innerWidth < 768) {
      document.querySelectorAll(".cursor")[0].style.opacity = 0
    } else {
      document.querySelectorAll(".cursor")[0].style.opacity = 1
    }
    this.transformCursor()
  }

  render() {
    return (
      <>
        <div className="cursor body__wrapper" id="cursor">
          <div className="cursor__inner cursor__inner--circle"></div>
          <div className="cursor__inner cursor__inner--dot">
            <p>
              <small> </small>
            </p>
          </div>
        </div>
      </>
    )
  }
}
