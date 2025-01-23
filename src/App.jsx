import { useState } from 'react';
import './App.css';
import RockPaperScissors from './games/RockPaperScissors';
import HigherOrLower from './games/HigherOrLower';
import GameSelector from './components/GameSelector';
import Scoreboard from './components/Scoreboard';
import Result from './components/Result';
import Hangman from './games/Hangman';
import TriviaGame from './games/TriviaGame';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState(null);

  console.log(selectedGame);
  
  const updateScores = (winner) => {
    if(winner === "Player"){
    setPlayerScore(playerScore + 1);
    } else if (winner === "Computer"){
    setComputerScore(computerScore + 1);
    }
  };

  const resetGame = () => {
    setSelectedGame(null);
    setPlayerScore(0);
    setComputerScore(0);
    setGameResult(null);
  };

  return (
    <div>
      <h1> My Mini Game Hub!!!</h1>
      <Scoreboard playerScore={playerScore} computerScore={computerScore} />
      <Result result = {gameResult}/>
      <button onClick={resetGame}>Reset Game</button>
      <hr />
      <GameSelector onGameSelect = {setSelectedGame}/>
      {selectedGame === "RockPaperScissors" && <RockPaperScissors updateScores = {updateScores} onSetGameResult = {setGameResult}/>}
      {selectedGame === "HigherOrLower" && <HigherOrLower updateScores = {updateScores} onSetGameResult = {setGameResult}/>}
      {selectedGame === "Hangman" && <Hangman onSetGameResult = {setGameResult}/>}
      {selectedGame === "TriviaGame" && <TriviaGame onSetGameResult = {setGameResult}/>}
      {!selectedGame && <p>Please select a game to start playing!</p>}
    </div>
  );
};

export default App;
