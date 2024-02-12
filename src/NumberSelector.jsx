
import { useState } from "react";
import './NumberSelector.css';
function NumberSelector() {
  const [assignedNumbers, setAssignedNumbers] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const selectNumber = () => {
    if (assignedNumbers.length === 10) {
      alert('All numbers have been assigned!');
      return;
    }

    if (buttonDisabled) {
      alert('You cannot select more than once.');
      return;
    }

    let availableNumbers = Array.from({ length: 10 }, (_, index) => index + 1).filter(
      (num) => !assignedNumbers.includes(num)
    );

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers[randomIndex];
    setButtonDisabled(true); 
    setAssignedNumbers([...assignedNumbers, selectedNumber]);
  // Move this line outside of the condition
    alert(`You have been assigned number: ${selectedNumber}`);
  };
 

  return (
    <div className="number-selector-container">
      <div className="number-selector">
        <h2>Click the button below to select a number</h2>
        <button onClick={() => {
      if (!buttonDisabled) {
        selectNumber();
      } else {
        alert('You cannot select more than once.');
      }
    }} disabled={buttonDisabled}>
      Assign Number
    </button>
        <p className="assigned-numbers">Assigned Numbers: {assignedNumbers.join(', ')}</p>
      </div>
    </div>
  );
}

export default NumberSelector;