//card variables
let cardValue = ['Ace', 'King', 'Queen', 'Jack',
                 'Ten', 'Nine', 'Eight', 'Seven',
                 'Six', 'Five', 'Four', 'Three', 'Two'];
let suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

// DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted = false;
let gameOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function() {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

function createDeck() {
    let deck=[];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {

        for ( let valueIdx = 0; valueIdx < cardValue.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: cardValue[valueIdx],
            };
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to BlackJack!';
        return;
    }
    for (let i = 0; i < deck.length; i++) {
        textArea.innerText += '\n' + getCardString(deck[i]);
    }
}

// ========================================
