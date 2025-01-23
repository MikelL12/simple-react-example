import { useState } from 'react';
import './RockPaperScissors.css';
import Counter1 from './Counter1';
import Scoreboard from '../components/Scoreboard';

const user = {
  name: "Mikel",
  lastName: "Lewis"
};

const Greeting = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

const Header = ({ title, instruction, prompt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className="instructions">{instruction}</p>
      <p className="prompt">{prompt}</p>
    </div>
  );
};

const Choices = ({ choices, onPlayerChoice }) => {
  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onPlayerChoice(choice)}>
          {choice.icon} {choice.name} {choice.icon}
        </button>
      ))}
    </div>
  );
};


const Footer = () => {
  return <p>"Made By Mikel, Powered by React"</p>;
};

const RockPaperScissors = ({updateScores, onSetGameResult}) => {
    const choices = [
     
    { name: 'Rock', icon: '✊ ' },
    { name: 'Paper', icon: '✋ ' },
    { name: 'Scissors', icon: '✌ ' },
  ];

  const [result, setResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const title = "Rock Paper Scissors Game";
  const instructions = "Choose your move and see if you can beat the computer!";
  const prompt = "May the odds be ever in your favor!";

  const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinner("Tie");
      onSetGameResult("It's a tie!");
      return "It's a tie!";
    }

    if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setWinner("Player");
      onSetGameResult('You win!');
      setPlayerScore(prevScore => prevScore + 1);
      return 'You win!';
    }
    setWinner("Computer");
    onSetGameResult('Computer wins!');
    setComputerScore(prevScore => prevScore + 1);
    return 'Computer wins!';
  };


  // onSetGameResult(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}, ${gameResult}`);

  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(playerChoice.name, computerChoice);

    setResult({
      player: `Player chose: ${playerChoice.name}`,
      computer: `Computer chose: ${computerChoice}`,
      outcome: gameResult
    });

    if (gameResult === 'You win!') {
      updateScores("Player");
      setPlayerScore(playerScore + 1);
      setWinner('Player');
    } else if (gameResult === 'Computer wins!') {
      updateScores("Computer");
      setComputerScore(computerScore + 1);
      setWinner('Computer');
    } else {
      updateScores("Tie");
      setTieScore(tieScore + 1);
      setWinner('Tie');
    }
  };

 
  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setResult(null);
    setWinner(null);
  };

  return (
    <div>
      <Header title={title} instruction={instructions} prompt={prompt} />
      <Greeting name="Mikel" />
      <Scoreboard playerScore={playerScore} computerScore={computerScore} winner={winner} />
      <Choices choices={choices} onPlayerChoice={handlePlayerChoice} />
      <button id="reset" onClick={resetGame}>Reset Game</button>
      <Footer />
    </div>
  );
};

export default RockPaperScissors;