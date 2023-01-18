import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <button
        data-testid="btnInc"
        onClick={() => {
          setCounter(counter + 1);
        }}>
        +
      </button>
      {/* data-test-id to access the element while writing test cases. */}
      <input data-testid="txtCounter" type="text" value={counter}></input>
      <button
        data-testid="btnDec"
        onClick={() => {
          setCounter(counter - 1);
        }}>
        -
      </button>
    </div>
  );
}

export default Counter;
