  // inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let intro = input.question("Let's play some Scrabble!\n\n Enter the word: ")
  return intro;
}
  
// let simpleScore;
function simpleScore(word) {
  return word
}
// console.log(simpleScore);

function vowelBonusScore(word) {
  word = word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let score = 0;
  for(i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;

} 

function scrabbleScore(word) {
  word = word.toUpperCase();
  let score = 0
  for(let i = 0; i < word.length; i++) {
    score += Number(newPointStructure[word[i]])
  }
  return score;

} 

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoreFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3pts, consonants are 1 pt.",
    scoreFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoreFunction: scrabbleScore
  },
];

function scorerPrompt() {
  console.log(`\nWhich scoring algorithm would you like to use?\n`);
  for(let i = 0; i < scoringAlgorithms.length; i++){
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
    let scoreQuestion = Number(input.question(`\nEnter 0, 1, or 2: `));
    return `Score for ${word}: ${scoringAlgorithms[scoreQuestion].scoreFunction(word)}`;
}

function transform(words) {
  let newWordPoints = {};
  for (let i in words) {
    let newOrder = words[i];
    for (let v = 0; v < newOrder.length; i++) {
      newWordPoints[newOrder[v].toUpperCase()] = Number(i)
    }
  }
  return newWordPoints;
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
  initialPrompt();
  scorerPrompt();   
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

