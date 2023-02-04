import { Component } from "react";
import { customId } from "./Helpers";
import Letter from "./Letter";


class Word extends Component {
  render() {
    const word = this.props.word.split('');
    return (
      <div className="Word">
        {word.map( letter =>
          <Letter 
            letter={this.props.letters.includes( letter ) ? letter : '_'} 
            key={customId()} 
          />
        )}
      </div>
    )
  }
}

export default Word;