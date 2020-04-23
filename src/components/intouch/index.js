import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

import "./index.css"

const GetInTouch = props => {
  const data = useStaticQuery(graphql`
    query GetInTouchQuery {
      wordpressAcfOptions {
        options {
          get_in_touch_copy
        }
      }
    }
  `)

  let inTouchCopy = false

  if (data.wordpressAcfOptions) {
    inTouchCopy = data.wordpressAcfOptions.options.get_in_touch_copy
  }

  return (
    <div className="container container__custom get_in_touch" id="get_in_touch">
      <div className="row">
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 no__padding">
          <div className="" dangerouslySetInnerHTML={{ __html: inTouchCopy }} />
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 side__column d-flex justify-content-center align-items-center no__padding">
          <div className="up__arrow black__arrow">
            <AnchorLink href="#top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="53"
                viewBox="0 0 33 53"
              >
                <g
                  id="_"
                  data-name=" "
                  transform="translate(-1557.229 -5946.296)"
                >
                  <text
                    id="_2"
                    data-name="↑"
                    transform="translate(1557.229 5990.296)"
                  >
                    <tspan x="0" y="0">
                      ↑
                    </tspan>
                  </text>
                </g>
              </svg>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GetInTouch
