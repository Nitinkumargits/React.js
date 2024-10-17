/*
  And so let's paste that out here outside of the component.So this data doesn't depend on anything that is inside the component. And so it should be located outside because otherwise each time that dysfunction here  is executed, this data, so this array will be created again  but we will learn all about that a bit later, of course.
  So when objects are created and when these functions are executed and so on. 
*/
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Steps {step}: {step === 0 ? "No step" : messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}>
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}>
          {" "}
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
