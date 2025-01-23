import { useState } from 'react'
const wordList = [
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Grasshopper",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stork",
    "Swallow",
    "Swan",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Yak",
    "Zebra"
];

// Generates a random word from the word list.
const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
};

// Displays the keyboard for the player to make guesses.
const Keyboard = ({onBtnClick}) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <p className="hangman-keyboard">
        {buttons.map((letter)=>{
            return (
                <button className="hangman-button" onClick={onBtnClick} key={letter} value={letter}>{letter}</button>
            )
        })}
        </p>
        )
};

// Displays the current guessed word with correct letters filled in.
const GuessedWord =({guessedWord}) => {
    return (
            guessedWord.map((letter,index)=> {
            return (
                <span className="hangman-word" key={index}> {letter} </span>
            )
        })
    )
  };

// Main Hangman game component.
const Hangman = ({onSetGameResult}) => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());
    const [guessedWord, setGuessedWord] = useState(new Array(secretWord.length).fill('-'));
    const [wrongCount, setWrongCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameResult, setGameResult] = useState("");  

    // Resets the game to start over with a new word.
    const resetGame = () => {
        const newSecretWord = randomSecretWord();
        setSecretWord(newSecretWord); //set a new secretWord
        setGuessedWord(new Array(newSecretWord.length).fill('-')); //set a new guessedWord
        setWrongCount(0);
        setGameOver(false);
        setGameResult(""); 
        onSetGameResult(null);
    };

    // Handles letter clicks and updates the guessed word or wrong count.
    const handleClick = (event) => {
        if (gameOver) return;

        const guessedLetter = event.target.value.toLowerCase();
        console.log(guessedLetter);
        console.log(secretWord);
        console.log(guessedWord);

        if (secretWord.includes(guessedLetter)) {
            // Complete the code here:
            // - Update the guessedWord array by replacing the dash ('-') with the correct letter at the appropriate positions.
            // - Ensure the updated guessedWord array is passed as props to the GuessedWord component for display.
            let updatedGuessedWord = [...guessedWord];
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === guessedLetter) {
                    updatedGuessedWord[i] = guessedLetter;
                }
            }
            setGuessedWord(updatedGuessedWord);

            // Check to see if player has won
            if (!updatedGuessedWord.includes('-')) {
                setGameOver(true);
                setGameResult("Congratulations, You Won!");
                onSetGameResult("You Win!");
            }
        } else {
            setWrongCount(prevCount => prevCount + 1);

            // Check to see if player has lost
            if (wrongCount + 1 >= 5) {
                setGameOver(true);
                setGameResult(`Game Over! The word was: ${secretWord}`);
                onSetGameResult("Game Over!");
            }
        }
    };

    return (
        <div>
            <h1>Hangman Game</h1>
            <GuessedWord guessedWord={guessedWord} />
            <br />
            <Keyboard onBtnClick={handleClick} />
            <p>Wrong guesses: {wrongCount}/5</p>
            {gameResult && <p>{gameResult}</p>}  
            <button onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default Hangman;