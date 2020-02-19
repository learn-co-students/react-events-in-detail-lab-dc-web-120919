import React from 'react'

class DelayedButton extends React.Component {

handleDelayClick = event => {
  event.persist()
  window.setTimeout( () => {this.props.onDelayedClick(event)},
  this.props.delay)
  }

  render() {
    return (
        <button onClick={this.handleDelayClick}>Delay</button>
    )
  }
}

export default DelayedButton
