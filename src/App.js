import React from "react";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    textBoxRef, 
    handleText, 
    text, 
    isTimeRunning, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useWordGame(5)

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleText}
        value={text}
        disabled={!isTimeRunning}
      >

      </textarea>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
