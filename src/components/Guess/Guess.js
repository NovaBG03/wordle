import React from 'react';
import {range} from "../../utils";

function Guess({value}) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={`cell ${value?.[i]?.status ?? ''}`.trim()}>
          {value?.[i]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
