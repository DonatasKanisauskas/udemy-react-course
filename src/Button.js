import { Component } from "react";


class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.handler}
        disabled={this.props.disabled}
        className='Button'
      >
        {this.props.letter}
      </button>
    )
  }
}

export default Button;