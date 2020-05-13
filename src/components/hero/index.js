import React from "react"
import "./index.css"

const Hero = props => {
  return (
    <section className={`hero__component ${props.theme} ${props.customClass}`}>
        <div className="container container__custom">
            <div className="row">
                <div className="col-lg-12 hero__title no__padding">
                    {
                        props.title
                        ?
                        <h1
                            className="xxl__font"
                            dangerouslySetInnerHTML={{ __html: props.title }}
                        />
                        :""
                    }
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 hero__subtitle hero__first__subtitle no__padding">
                    {
                        props.firstSubtitle
                        ?<p className="bold__font md__font">{props.firstSubtitle}</p>
                        :""
                    }
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 hero__subtitle hero__second__subtitle no__padding">
                    {
                        props.secondSubtitle
                        ?<p className="bold__font md__font">{props.secondSubtitle}</p>
                        :""
                    }
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                <div className="col-xs-12 col-sm-12 col-md-6"></div>
                <div className="col-xs-12 col-sm-12 col-md-6 hero__extra__info no__padding">
                    {
                        props.extraInfo
                        ?<div
                            className="sm__font reg__font"
                            dangerouslySetInnerHTML={{ __html: props.extraInfo }}
                            />
                        :""
                    }
                </div>
                
            </div>
        </div>
    </section>
  )
}
export default Hero
