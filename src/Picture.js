import { Component } from "react";


class Picture extends Component{
  render(){
    return(
      <div className='Picture'>
        <h4>{this.props.victory === 'playing' 
          ? `Lives ${this.props.lives}`
          : this.props.victory
        }</h4>
      </div>
    )
  }
}

export default Picture;