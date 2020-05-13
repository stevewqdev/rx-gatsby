import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Footer from "../components/footer/index"
import MainFloatingScreen from "../components/floatingScreens/main/index"
import MainFloatingMenu from "../components/floatingScreens/menu/index"
import GetInTouch from "../components/intouch/index"

import "../layouts/layout.css"
import "../fonts/stylesheet.css"

const Layout = ({ children, location }) => {
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
        },500);
      })
    });
  }
  function removeFixed(){
    window.onscroll = function(){
      var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
      if(top > document.querySelectorAll(".main__section__wrapper")[0].offsetTop){
        document.querySelectorAll(".column__top__one")[0].classList.add("force__absolute");
        document.querySelectorAll(".column__top__two")[0].classList.add("force__absolute");
      }else{
                document.querySelectorAll(".column__top__one")[0].classList.add("force__absolute");
        document.querySelectorAll(".column__top__two")[0].classList.add("force__absolute");
      }
    };
  }
  useEffect(() => {
    removeFixed();

    hrefRedirect();

    AOS.init({
      disable: 'mobile', 
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
      <GetInTouch></GetInTouch>
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
