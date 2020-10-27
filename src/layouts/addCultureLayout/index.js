import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Cursor from "../../components/cursor/cursor"
import "../../layouts/addCultureLayout/index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../../fonts/addCulture/stylesheet.css'
import '../../fonts/addCulture/lato/stylesheet.css'
import Header from "../../components/addCulture/header"
import AddCultureFooter from "../../components/addCulture/footer"

const AddCultureLayout = ({ children, location }) => {
  // START SMOOTH SCROLLING //
  function init() {
    new SmoothScroll(document, 90, 20)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target =
        document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener("mousewheel", scrolled, { passive: false })
    target.addEventListener("DOMMouseScroll", scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault() // disable default scrolling

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1)
        // Opera
        else return -e.detail / 3 // Firefox
      } else return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5) requestFrame(update)
      else moving = false
    }

    var requestFrame = (function() {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50)
        }
      )
    })()
  }
  // ENDS SMOOTH SCROLLING //

  useEffect(() => {
    if (window.innerWidth > 768) {
      init()
    }
    AOS.init({
      disable: "mobile",
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    })
  })

  return (
    <>
      {

        <>
          <Helmet>
            {/* <link rel="icon" href="" /> */}
            <html lang="en" />
          </Helmet>
          <Cursor></Cursor>
          <Header/>
          <div className="addCultureWrapper" id="addCultureWrapper">
            <div id="top"></div>
            <main>{children}</main>
          </div>
          <AddCultureFooter/>
        </>
      }
    </>
  )
}

AddCultureLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AddCultureLayout
