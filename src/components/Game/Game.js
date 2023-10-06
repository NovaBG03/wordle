import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {checkGuess} from "../../game-helpers";
import Banner from "../Banner";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

const getRandomAnswer = () => {
  // Pick a random word on every page load.
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({answer});
  return answer;
}

function Game() {
  const [answer, setAnswer] = React.useState(getRandomAnswer);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = (guess) => {
    if (guess === answer) {
      setGameStatus('win');
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('lost');
    }

    setGuesses(value => [...value, checkGuess(guess, answer)]);
  }

  const restart = () => {
    setGuesses([]);
    setGameStatus('running');
    setAnswer(getRandomAnswer());
  }

  return (
    <>
      {gameStatus === 'win' && (
        <Banner variant='happy'>
          <p><strong>Congratulations!</strong> Got it
            in <strong>{guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}</strong>.</p>
          <button onClick={restart}>Start a new game</button>
        </Banner>
      )}
      {gameStatus === 'lost' && (
        <Banner variant='sad'>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <button onClick={restart}>Start a new game</button>
        </Banner>
      )}
      <GuessResults guesses={guesses}/>
      <GuessInput disabled={gameStatus !== 'running'} onSubmit={handleSubmitGuess}/>
    </>
  );
}

export default Game;
