import React, { Component } from 'react'
import Layout from "../layouts/index"
import SEO from "../components/seo/seo"
import "../layouts/pages/404.css"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"
export default class NotFoundPage extends Component {

  componentDidMount(){
    let aElements = [...document.querySelectorAll(".left a")]; 

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
        },10);
      })
    });
  }

  render() {
    var customStyles =
    `
    footer{
      display: none!important;
    }
    html, body{
      overflown: hidden!important;
    }
    section#one{
      pointer-events: all!important;
    }
    button:before {
      content: "Go back to home";
    }
    `;
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <style>{customStyles}</style>
          <meta name="description" content={ 'We were not able to find the page you are looking for' }/>
        </Helmet>
        <SEO title="404: Not found" />
        <div className="main__section__wrapper not__found__page">
          <section id="one" className="">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left d-flex justify-content-center  flex-column no__padding">
                  <div className="internal">
                    <h1 className={`xxl__font bold__font`}
                      data-aos="fade-up"
                      data-aos-easing="ease-in-back"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                
                    >Error 404</h1>
                    <br></br>
                    <Link to={`/`}
    
                    
                    ><button className={`sm__font reg__font`}
                    
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                    >Go back to home</button></Link>
                  </div>
                  
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 right no__padding  d-flex justify-content-center  flex-column ">
                  <div className="internal"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" width="320.041" height="475.16" viewBox="0 0 320.041 475.16">
                    <g id="Grupo_329" data-name="Grupo 329" transform="translate(-2022.974 171.411)">
                      <g id="Grupo_329-2" data-name="Grupo 329" transform="translate(2022.974 -171.411)">
                        <path id="Trazado_91" data-name="Trazado 91" d="M2259.624-95.11l-63.479,45.032,63.479,45.032V71.241L2141.3-12.711,2022.974,68.745V-6.765l62.912-43.313-62.912-43.313v-75.524L2141.3-87.446l118.324-83.966Z" transform="translate(-2022.974 171.411)" fill="#f4f4f4"/>
                      </g>
                      <path id="Trazado_92" data-name="Trazado 92" d="M2239.486,122.879a32.468,32.468,0,1,0,32.481,32.468,32.254,32.254,0,0,0-32.481-32.468Z" transform="translate(71.048 113.604)" fill="#f4f4f4"/>
                      <path id="Trazado_93" data-name="Trazado 93" d="M2144.1,85.033c63.382,0,121.126,51.173,121.13,119.722h-59.153c0-39.439-28.647-64.784-61.977-64.784s-61.957,25.345-61.961,64.784h-59.161c0-68.549,57.747-119.722,121.122-119.722Z" transform="translate(0 98.994)" fill="#f4f4f4"/>
                    </g>
                  </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
