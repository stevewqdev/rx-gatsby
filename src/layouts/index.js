import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Footer from "../components/footer/index"
import MainFloatingScreen from "../components/floatingScreens/main/index"
import MainFloatingMenu from "../components/floatingScreens/menu/index"
import Cursor from "../components/cursor/cursor"

import "../layouts/layout.css"
import "../fonts/stylesheet.css"

const Layout = ({ children, location }) => {
  function removeFixed() {
    let mainElement = document.querySelectorAll(".main__section__wrapper")
    window.onscroll = function() {
      var top =
        (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
      if (mainElement.length > 0) {
        if (
          top >=
          document.querySelectorAll(".main__section__wrapper")[0].offsetTop - 90
        ) {
          document
            .querySelectorAll(".column__top__one")[0]
            .classList.add("force__absolute")
          document
            .querySelectorAll(".column__top__two")[0]
            .classList.add("force__absolute")
        } else {
          document
            .querySelectorAll(".column__top__one")[0]
            .classList.remove("force__absolute")
          document
            .querySelectorAll(".column__top__two")[0]
            .classList.remove("force__absolute")
        }
      }
    }
  }
  // This function draw all lines with class .separator that are inside a parent element with the class .includes__separator
  function drawLines() {
    var lines = [...document.querySelectorAll(".includes__separator")]
    if (lines.length > 0) {
      lines.map((line, index) => {
        var isDrawed = false
        if (!isDrawed) {
          window.addEventListener(
            "scroll",
            function() {
              var top =
                (window.pageYOffset || document.scrollTop) -
                (document.clientTop || 0)
              let innerLine = line.querySelectorAll(".separator")[0]
              if (innerLine) {
                if (top > line.offsetTop + 350) {
                  innerLine.classList.add("full")
                }
              }
            },
            { passive: true }
          )

          return false
        }
      })
    }
  }
  // This function handle the position of the footer, once you scroll more than 1000px the footer become fixed thiw way it reveals at the end
  function changePositionFooter() {
    window.addEventListener(
      "scroll",
      function() {
        var top =
          (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
        if (top > 1000) {
          document.querySelectorAll(".footer")[0].classList.add("fixed__footer")
        } else {
          document
            .querySelectorAll(".footer")[0]
            .classList.remove("fixed__footer")
        }
      },
      { passive: true }
    )
  }
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

  // Add shareable Link
  function addShareLink() {
    Array.from(document.querySelectorAll(".share__project")).map(element => {
      element.dataset.sharelink = window.location.href

      element.addEventListener("click", function(e) {
        var textarea = document.createElement("textarea")
        textarea.textContent = e.target.getAttribute("data-sharelink")
        textarea.style.position = "fixed" // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea)
        textarea.select()
        try {
          return document.execCommand("copy") // Security exception may be thrown by some browsers.
        } catch (ex) {
          return false
        } finally {
          document.body.removeChild(textarea)
        }
      })
      return false
    })
  }

  function hideCopyrights(){
    window.addEventListener(
      "scroll",
      function() {
        var top =
          (window.pageYOffset || document.scrollTop) - (document.clientTop || 0)
        if (top > 1500) {
          document.querySelectorAll(".main__floating__menu .copyright__inner")[0].style.opacity = "0";
        }else{
          document.querySelectorAll(".main__floating__menu .copyright__inner")[0].style.opacity = "1";
        }
      },
      { passive: true }
    )
  }

  useEffect(() => {
    if (window.innerWidth > 768) {
      init()
    }
    removeFixed()
    drawLines()

    hideCopyrights();

    changePositionFooter()
    addShareLink()
    AOS.init({
      disable: "mobile",
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    })

    setTimeout(function(){ 
      var linkMont = document.createElement('link');
      linkMont.id = 'montserrat__font';
      linkMont.rel = 'stylesheet';
      linkMont.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap';
      document.head.appendChild(linkMont);
  
      var linkMul = document.createElement('link');
      linkMul.id = 'muli__font';
      linkMul.rel = 'stylesheet';
      linkMul.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap';
      document.head.appendChild(linkMul);
    }, 100);

  })
  // Next query will return the site data, the master acf fields for whole website data, the logo and the favicon.
  const data = useStaticQuery(graphql`
    query {
      allWordpressSiteMetadata {
        edges {
          node {
            description
            home
            name
            url
          }
        }
      }
      wordpressAcfOptions {
        options {
          web_info_column_one
          web_info_column_two
          copyright_info
          contact_email
          contact_phone
          management_agreements_info
        }
      }
      logo: allWordpressWpMedia(filter: { title: { eq: "logo" } }) {
        nodes {
          source_url
          title
        }
      }
      favicon: allWordpressWpMedia(filter: { title: { eq: "favicon" } }) {
        nodes {
          source_url
          title
        }
      }
      allWordpressMenusMenusItems(filter: { slug: { eq: "legal-menu" } }) {
        edges {
          node {
            id
            items {
              target
              title
              url
              classes
              attr_title
              wordpress_id
            }
          }
        }
      }
    }
  `)

  const siteDataAcf = data.wordpressAcfOptions.options
  let legalMenu = false
  let siteLogo = false
  let siteFavicon = false

  if (data.logo.nodes.length > 0) {
    siteLogo = data.logo.nodes[0]
  }

  if (data.favicon.nodes.length > 0) {
    siteFavicon = data.favicon.nodes[0].source_url
  }

  if (data.allWordpressMenusMenusItems) {
    legalMenu = data.allWordpressMenusMenusItems.edges[0].node.items
  }

  return (
    <>
      
      <Helmet>
        <link rel="icon" href={siteFavicon} />
        <html lang="en" />
        <script>
        {`var ss = ss || [];
          var _ss = ss || [];
          _ss.push(['_setDomain', 'https://koi-3qnmlpda8k.marketingautomation.services/net']);
          _ss.push(['_setAccount', 'KOI-49PC6D4KZS']);
          _ss.push(['_trackPageView']);
          (function() {
              var ss = document.createElement('script');
              ss.type = 'text/javascript'; ss.async = true;
              ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3QNMLPDA8K.marketingautomation.services/client/ss.js?ver=2.4.0';
              var scr = document.getElementsByTagName('script')[0];
              scr.parentNode.insertBefore(ss, scr);
          })();`
        }
        </script>
      </Helmet>

      <Cursor></Cursor>
      <MainFloatingMenu
        agreements={siteDataAcf.management_agreements_info}
        siteLogo={siteLogo}
        siteAcf={siteDataAcf}
      ></MainFloatingMenu>
      <div className="page__wrapper" id="page__wrapper">
        <MainFloatingScreen
          siteLogo={siteLogo}
          siteAcf={siteDataAcf}
        ></MainFloatingScreen>
        <div id="top"></div>
        <main>{children}</main>

        <Footer
          copyright={siteDataAcf.copyright_info}
          menu={legalMenu}
        ></Footer>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
