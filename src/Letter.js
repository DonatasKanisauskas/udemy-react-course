import { Component } from "react";


class Letter extends Component{
  render(){
    return(
      <p className='Letter'>{this.props.letter}</p>
    )
  }
}

export default Letter;