import React from 'react';

function GuessInput({onSubmit}) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        required
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
