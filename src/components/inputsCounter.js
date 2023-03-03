import { useState } from "react";
import { WebDetailsInput } from "./Panell.styled";

export default function InputsCounter({ setNumber }) {
  const [counter, setCounter] = useState(1);

  function adjustCounter(amount) {
    setCounter((currentState) => {
        if ((currentState + amount) < 1) alert('Números mayores a 0')
        return (
            (currentState + amount) < 1 ? alert('Números mayores a 0') : 
       currentState + amount);
    });
  }

  setNumber(counter);

  return (
    <div>
      <button onClick={() => adjustCounter(-1)}>-</button>
      <WebDetailsInput
        type="number"
        value={counter}
        min={1}
        pattern="^[1-9]"
        onChange={(e) => setCounter(e.target.valueAsNumber)}
      />
      <button onClick={() => adjustCounter(1)}>+</button>
    </div>
  );
}
