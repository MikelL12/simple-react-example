import { useState } from "react";

const HigherOrLower = ({ updateScores, onSetGameResult }) => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());
  const [result, setResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleGuess = (guess) => {
    const newNumber = generateRandomNumber();

    if (guess == "higher" && newNumber > currentNumber) {
      setResult("You guessed correct!");
      updateScores("Player");
      setPlayerScore(playerScore + 1);
      onSetGameResult("You guessed correct!"); 
      setWinner('Player');
      console.log("You guessed correct!");
    } else if (guess == "lower" && newNumber < currentNumber) {
      setResult("You guessed correct!");
      updateScores("Player");
      setPlayerScore(playerScore + 1);
      onSetGameResult("You guessed correct!"); 
      setWinner('Player');
      console.log("You guessed correct!");
    } else {
      setResult("You guessed wrong!");
      updateScores("Computer");
      setComputerScore(computerScore + 1);
      onSetGameResult("You guessed wrong!"); 
      setWinner('Computer');
      console.log("You guessed wrong!");
    }
    setCurrentNumber(newNumber);
  };
return (
    <div>
       <h1>Higher or Lower</h1>
       <p>Current Number: {currentNumber}</p>
       <div>
          <button onClick={() => handleGuess("higher")}>Higher</button>
          <button onClick={() => handleGuess("lower")}>Lower</button>
       </div>
       {result && <h2>{result}</h2>}
</div>
);
};

export default HigherOrLower;