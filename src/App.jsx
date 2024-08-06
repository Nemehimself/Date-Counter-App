import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <span>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </span>
      <div className="card">
        <button onClick={() => setStep((count) => count - 1)}> - </button>
        <span>step : {step}</span>
        <button onClick={() => setStep((count) => count + 1)}> + </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - step)}> - </button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((count) => count + step)}> + </button>
      </div>
      <span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </span>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
      <div className="card">
        <span>
          {count === 0
            ? "Today is "
            : count === 1
            ? `${count} day from today is `
            : count > 1
            ? `${count} days from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}

export default App;
