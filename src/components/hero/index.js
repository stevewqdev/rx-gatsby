import React, { useState, useEffect } from 'react';
import "./index.css"

const Hero = props => {
  useEffect(() => {
    setTimeout(function(){
        document.querySelectorAll(".hero__component .separator")[0].classList.add("full");
    }, 1500)
  });
  return (
    <section className={`hero__component ${props.theme} ${props.classes} `}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 no__padding"></div>
                <div className="col-lg-8 hero__title no__padding">
                    <div className="separator --black "></div>
                    {
                        props.title
                        ?
                        <h1
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-duration="1200"
                            className="xxl__font"
                            dangerouslySetInnerHTML={{ __html: props.title }}
                        />
                        :""
                    }
                </div>
                <div className="col-lg-2 no__padding"></div>
            </div>
            <div className="row">
                <div className="col-lg-2 no__padding"></div>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 hero__subtitle hero__first__subtitle no__padding">
                    {
                        props.firstSubtitle
                        ?<p 
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="800"
                            data-aos-duration="1200"
                            className="bold__font md__font">{props.firstSubtitle}</p>
                        :""
                    }
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3 hero__subtitle hero__second__subtitle no__padding">
                    {
                        props.secondSubtitle
                        ?<p 
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="900"
                            data-aos-duration="1200"
                            className="bold__font md__font">{props.secondSubtitle}</p>
                        :""
                    }
                </div>
                <div className="col-lg-2 no__padding"></div>
            </div>
            <div className="row">
                <div className="col-lg-2 no__padding"></div>
                <div className="col-lg-2 no__padding"></div>
                <div className="col-lg-2 no__padding"></div>
                <div className="col-xs-12 col-sm-12 col-md-4 hero__extra__info no__padding">
                    {
                        props.extraInfo
                        ?<div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="700"
                            data-aos-duration="1200"
                            className="sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: props.extraInfo }}
                            />
                        :""
                    }
                </div>
                <div className="col-lg-2 no__padding"></div>
            </div>
        </div>
        
    </section>
  )
}
export default Hero
