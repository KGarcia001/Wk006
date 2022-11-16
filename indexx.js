//WAR CARDGAME
//Creating classes such as Card, Deck & Player
//Keeping in mind what fields and methods each class might have
//Deal 26 Cards to 2 Players from a Deck
//Iterate through the turns where each Player plays a Card
//Award a point to the Player with the higher Card
//Ties result in zero points for both Players
//After all cards have been played, display the score and declare the winner.



import Deck from "./deck.js"

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
}

const playerPoints = [0];
const computerPoints = [0];
let playerTotal = 0;

let playerDeck, computerDeck;

function averageArray(array1) {
    playerTotal = array1.reduce((previousValue, currentValue) => {
       return previousValue + currentValue
    })
      if (typeof array1 != 'object'){
        throw new Error ("array1 is not an array.");
  }; 

//error in commented statement above appaear and ruin code.


//;if (typeof array1 == undefined){
       // throw new Error ("array1 is undefined");
    //};
    //console.log ('typeof', typeof array1, array1);

return playerTotal;

};


//Splitting Deck

const deck = new Deck();
deck.shuffle();

const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
playerDeck = new Deck (deck.cards.slice(0, deckMidpoint));
computerDeck = new Deck (deck.cards.slice(deckMidpoint, deck.numberOfcards));

// Pulling One Card

//const playerCard = playerDeck.pop()
//const computerCard = computerDeck.pop()
//
//console.log (playerDeck);
///console.log (computerDeck);

//Game Rounds

for (let i= 1; i <= 26; i++) {
    const playerCard = playerDeck.pop();
    const computerCard = computerDeck.pop();

    console.log(
        `Round ${i}, Fight! 
        Player: ${CARD_VALUE_MAP[playerCard.values]}`);

    console.log(
        `Computer: ${CARD_VALUE_MAP[computerCard.values]}
         Round ${i} Complete!`);
    


if (CARD_VALUE_MAP[playerCard.values] > CARD_VALUE_MAP[computerCard.values]){
    playerPoints.push(CARD_VALUE_MAP[computerCard.values],
        CARD_VALUE_MAP[playerCard.values]);
      console.log(`Player Wins!`);
    } else if (CARD_VALUE_MAP[playerCard.values] < CARD_VALUE_MAP[computerCard.values]) {
        computerPoints.push(CARD_VALUE_MAP[computerCard.values],
            CARD_VALUE_MAP[playerCard.values]);
            console.log(`Computer Wins!`);
    }else {
        console.log("Tied No points for anybody.");
    }

}
//add cards into player wins console log
// Score Board and Points(Game Conclusion)

console.log(`    
     Final Scores
     Player: ${averageArray(playerPoints)} Computer: ${averageArray(computerPoints)}`);


let playerTotalSum = averageArray(playerPoints);
let computerTotalSum = averageArray(computerPoints);

if (playerTotalSum > computerTotalSum) {
    console.log(`War Over:
    Player Wins with a total of ${playerTotalSum}!`);
} else if (playerTotalSum < computerTotalSum) {
  console.log( `War Over:
    Computer Wins with a total of ${computerTotalSum}!`)
}
 else if (playerTotalSum === computerTotalSum) {
 console.log("Tied Game")};


console.log (playerPoints);
console.log (computerPoints);


///Test///
// function doSomething(x, y) {
//     if (typeof x != 'string'){
//         throw new error('x must be a string');
//   }
//     return x + y;
// }








