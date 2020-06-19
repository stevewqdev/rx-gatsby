import React, { Component } from "react"
import Link from "gatsby-link"

class InternalButton extends Component {
  render() {
    const props = this.props
    return (
      <button
        class={"page__button"}
        tabIndex={-1}
        className={props.buttonClass}
      >
        <Link to={props.redirectionLink}>{props.buttonText}</Link>
      </button>
    )
  }
}
export default InternalButton
