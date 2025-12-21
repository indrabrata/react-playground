import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // State -> data that a component can hold over time for inforamation that it need to be remembered
  const [stepState, setStepState] = useState(1);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${stepState === 1 ? "active" : ""}`}>1</div>
        <div className={`${stepState === 2 ? "active" : ""}`}>2</div>
        <div className={`${stepState === 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step : {stepState}: {messages[stepState - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
          onClick={() => setStepState(stepState - 1)}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
          onClick={() => setStepState(stepState + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
