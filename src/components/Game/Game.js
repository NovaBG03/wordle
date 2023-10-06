import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
  const [guesses, setGuesses] = React.useState([])

  return (
    <>
      <GuessResults guesses={guesses}/>
      <GuessInput onSubmit={(guess) => setGuesses(value => [...value, checkGuess(guess, answer)])}/>
    </>
  );
}

export default Game;
