import { Component } from "react";
import Button from "./Button";
import { customId, randomVal } from './Helpers';
import './Hangman.css';
import Word from "./Word";
import Picture from "./Picture";


class Hangman extends Component {
  letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  words = ['apple', 'banana', 'kiwi', 'pear', 'orange', 'pumpkin', 'melon', 'carrot', 'strawberry', 'cherry', 'peas', 'onnion', 'beatroot'];
  victory = 'playing';
  chances = 10;
  word = randomVal(this.words);

  state = {
    gussedLetters: [],
  }

  handleClick = ( letter ) => {
    this.chances -= 1;
    this.setState( st => ( {
      gussedLetters: [...st.gussedLetters, letter]
    } ) );
  }

  render() {
    if ( !this.chances ) {
      this.victory = 'You lose';
    } else {
      let count = 0;
      this.word.split( '' ).forEach( letter => {
        if ( !this.state.gussedLetters.includes( letter ) ) {
          count++;
        }
      } )
      if ( !count ) this.victory = 'You win!!!';
    }

    return (
      <div className="Hangman">
        
        <h3>Hangman</h3>

        <Picture lives={this.chances} victory={this.victory} />

        <Word word={this.word} letters={this.state.gussedLetters} />

        {this.victory === 'playing' &&
          <div className="keyboard">
            {this.letters.map( letter =>
              <Button
                disabled={this.state.gussedLetters.includes( letter )}
                handler={() => this.handleClick( letter )}
                letter={letter.toUpperCase()}
                key={customId()}
              />
            )}
          </div>
        }

      </div>
    )
  }
}

export default Hangman;