const GameSelector = ({onGameSelect}) => {
    return(
      <div>
        <h2>Select a Game</h2>
        <button onClick = {() => onGameSelect("RockPaperScissors")}>Rock-Paper-Scissors</button>
        <button onClick = {() => onGameSelect("HigherOrLower")}>Higher or Lower Guessing Game</button>
        <button onClick = {() => onGameSelect("Hangman")}>Hangman Game</button>
        <button onClick = {() => onGameSelect("TriviaGame")}>Trivia Game</button>
      </div>
    );
  };

  export default GameSelector;
  