import { useState } from "react";

function StateChanger() {
  const [myState, setMyState] = useState("");

  const handleButtonClick = () => {
    // Generate a new state (for example, a random number)
    const newState = Math.random().toString(36).substring(7);

    // Update the state and log the changed state
    setMyState(newState);
    console.log("State changed:", newState);
  };

  return (
    <div>
      <h2>State Change Logger</h2>
      <p>Current State: {myState}</p>
      <button onClick={handleButtonClick}>Change State</button>
    </div>
  );
}

export default StateChanger;
