import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // State -> data that a component can hold over time for inforamation that it need to be remembered
  // State is preserver throughout re renders
  // Component will re rendered if the value of the state is changed
  // State is actually isolated inside the component
  // With state, we view UI as A reflection of data changing over time
  // Dont use useState for the data that no need to trigger re render
  const [stepState, setStepState] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (stepState + 1 > 3) {
      setStepState(1);
    } else {
      setStepState((s) => s + 1); // this is the best practice to update the state
    }
  }

  function handleBack() {
    if (stepState - 1 < 1) {
      setStepState(3);
    } else {
      setStepState((s) => s - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${stepState >= 1 ? "active" : ""}`}>1</div>
            <div className={`${stepState >= 2 ? "active" : ""}`}>2</div>
            <div className={`${stepState >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step : {stepState}: {messages[stepState - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handleBack}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
