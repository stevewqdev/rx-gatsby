import React, { Component } from 'react'

import "./cursor.css" 
import { Helmet } from 'react-helmet';

export default class cursor extends Component {
    
    transformCursor(){
        const aLinks = [...document.querySelectorAll("a")];
        const buttons = [...document.querySelectorAll("button")];
        const inputElements = [...document.querySelectorAll("input")];
        const toggler = [...document.querySelectorAll(".brand__menu__toggle")];
        const shareButtons = [...document.querySelectorAll(".share__project")];
        const svgs = [...document.querySelectorAll("svg")];
        const videos = [...document.querySelectorAll("video")];
        const HomeVideo = [...document.querySelectorAll(".video__home__wrapper")]; 
        const iframes = [...document.querySelectorAll("iframe")]; 
        const toggleOffices = [...document.querySelectorAll(".button__office")]; 
        const servicesList = [...document.querySelectorAll(".recognition__list__item")]; 

        
        
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
        allElements.forEach(function(element) {
            element.addEventListener("mouseenter", function() {
              const theCursor = document.querySelector(".cursor");
              theCursor.classList.add("morphed--cursor");
            });
            element.addEventListener("mouseleave", function() {
              const theCursor = document.querySelector(".cursor");
              theCursor.classList.remove("morphed--cursor");
            });
        });
    }
    
    componentDidMount(){


        this.transformCursor();
    }

    render() {
        return (
            <>
            <Helmet>
              <script src="https://raxo.tv/custom-cursor/cursor.js"></script>
            </Helmet>
            <div
            className="cursor body__wrapper"
            id="cursor"
            >
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
