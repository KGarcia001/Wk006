

const SUITS = ["♣", "♦" , "♥", "♠"]
const VALUES = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
]

export default class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards 
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i-- ){
            const newIndex = Math.floor (Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suits, values) {
        this.suits= suits
        this.values = values
    }
}

function freshDeck() {
    return SUITS.flatMap(suits => {
        return VALUES.map(values => {
            return new Card (suits, values)
        })
    })
}