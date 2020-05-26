import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Footer from "../components/footer/index"
import MainFloatingScreen from "../components/floatingScreens/main/index"
import MainFloatingMenu from "../components/floatingScreens/menu/index"

import "../layouts/layout.css"
import "../fonts/stylesheet.css"

const Layout = ({ children, location }) => {
  // This function controls the redirect on the menu, to avoid a direct redirection, first closes the menu and after that it makes the redirection. 
  function hrefRedirect(){
    let aElements = document.querySelectorAll(".menu__full__screen a"); 
    aElements.forEach(element => {
      element.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelectorAll(".page__wrapper")[0].classList.add("on-transition");

        let redirectLink = event.target.getAttribute("href");

        setTimeout(function() {
          if(redirectLink === null){
            window.location.href = `/`;
          }else{
            if(redirectLink.includes("facebook") || redirectLink.includes("twitter") || redirectLink.includes("instagram") || redirectLink.includes("behance") || redirectLink.includes("vimeo")){

            }else{
              window.location.href = `${event.target.getAttribute("href")}`;

            }
          }
        },620);
      })
    });
  }
  // This function adds and remove an absolute position in the main content, this way the top section hides behind the other sections
  function removeFixed(){
    window.onscroll = function(){
      var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
      if(top >= document.querySelectorAll(".main__section__wrapper")[0].offsetTop - 90){
        document.querySelectorAll(".column__top__one")[0].classList.add("force__absolute");
        document.querySelectorAll(".column__top__two")[0].classList.add("force__absolute");
      }else{
        document.querySelectorAll(".column__top__one")[0].classList.remove("force__absolute");
        document.querySelectorAll(".column__top__two")[0].classList.remove("force__absolute");
      }
    };
  }
  // This function draw all lines with class .separator that are inside a parent element with the class .includes__separator
  function drawLines(){
    var lines = [...document.querySelectorAll(".includes__separator")]; 
    if(lines.length > 0){
      lines.map((line, index) => {
        var isDrawed = false; 
        if(!isDrawed){
          window.addEventListener("scroll", function(){
            var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
            let innerLine = line.querySelectorAll(".separator")[0];
            if(innerLine){
              if(top  > line.offsetTop + 350){ 
                innerLine.classList.add("full");
              }
            }
          }, {passive: true});
        }
      })
    }
  }
  // This function handle the position of the footer, once you scroll more than 1000px the footer become fixed thiw way it reveals at the end
  function changePositionFooter(){
    window.addEventListener("scroll", function(){
      var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
      if(top > 1000){
        document.querySelectorAll(".footer")[0].classList.add("fixed__footer");
      }else{
        document.querySelectorAll(".footer")[0].classList.remove("fixed__footer");
      }
    }, {passive: true});
  }
  // START SMOOTH SCROLLING //
  function init(){
    new SmoothScroll(document,90,20)
  }
  
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement 
                || document.documentElement 
                || document.body.parentNode 
                || document.body) // cross browser support for document scrolling
        
    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body 
                && document.documentElement 
                ? document.documentElement 
                : target // safari is the new IE
    
    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })
  
    function scrolled(e) {
      e.preventDefault(); // disable default scrolling
  
      var delta = normalizeWheelDelta(e)
  
      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
  
      if (!moving) update()
    }
  
    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta)
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        else
          return -e.detail/3 // Firefox
      }else
        return e.wheelDelta/120 // IE,Safari,Chrome
    }
  
    function update() {
      moving = true
      
      var delta = (pos - target.scrollTop) / smooth
      
      target.scrollTop += delta
      
      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }
  
    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }
  // ENDS SMOOTH SCROLLING //
  useEffect(() => {
    init();
    removeFixed();
    drawLines();
    hrefRedirect();
    changePositionFooter();

    AOS.init({
      disable: 'mobile', 
      mirror: true,
      once: true, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });

  });
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
      </Helmet>
      <MainFloatingMenu
        agreements={siteDataAcf.management_agreements_info}
        siteLogo={siteLogo}
        siteAcf={siteDataAcf}
      ></MainFloatingMenu>
      <div className="page__wrapper" id="page__wrapper">
      <MainFloatingScreen siteLogo={siteLogo} siteAcf={siteDataAcf}></MainFloatingScreen>
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
