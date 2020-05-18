import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./index.css"

const SocialMenu = props => {
  const data = useStaticQuery(graphql`
    query SocialMenuQuery {
      wordpressAcfOptions {
        options {
          social_networks {
            network
            network_link
            network_logo {
              source_url
              title
            }
          }
        }
      }
    }
  `)

  let socialItems = false
  const layoutType = props.layout

  if (data.wordpressAcfOptions) {
    socialItems = data.wordpressAcfOptions.options.social_networks
  }

  return (
    <>
      {socialItems.map((network, index) => (
        <div
          className={`brand__social__network --${network.network} ${layoutType} social-${index}`}
          id={`${network.network}`}
          key={index}

          data-aos="fade-up"
          data-aos-easing="ease-in-back"
          data-aos-delay={`${(index + 1 )* 100}`}
          data-aos-offset="0"
          data-aos-duration="1200"
        >
          <a
            href={`${network.network_link}`}
            target="_BLANK"
            rel="noopener noreferrer"
          >
            {/* If layout is lateral__menu we only show the network icon */}
            {layoutType === "lateral__menu" ? (
              <>
                {network.network_logo ? (
                  <img
                    src={network.network_logo.source_url}
                    alt={network.network_logo.title}
                  />
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
            {/* If layout is full__screen__menu we only show the the network name */}
            {layoutType === "full__screen__menu" ? (
              <>
                <p className={props.fontSize ? props.fontSize : "reg__font"}>{network.network}</p>
              </>
            ) : (
              ""
            )}
          </a>
        </div>
      ))}
    </>
  )
}
export default SocialMenu
