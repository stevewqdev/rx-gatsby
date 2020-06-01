import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
const timeout = 1000
const getTransitionStyles = {
  entering: {
    position: `relative`,
    right: `-5000px`,
    width: `100%`,
  },
  entered: {
    position: `relative`,
    right: `0px`,
    width: `100%`,
  },
  exiting: {
    position: `relative`,
    left: `-5000px`,
    width: `100%`,
  },
}
class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props
    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
