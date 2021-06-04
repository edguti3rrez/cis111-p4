/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Project 4: DOM, timers, and random cards
*/

const cardObject = {
    _timerID: null,
    _intialCounter: 0,
    _counter: 0,

    cardNumbers: "0A23456789JKQ".split(''),
    cardSuits: "HDCS".split(''),

    getRandomCard: function() {
        // Return a random card value from the cards array
        // If card is 0, then use 10 to account for actual image file
        let randomCardNumber = this.cardNumbers[this.getRandomNumber (0, 12)];
        if (randomCardNumber === '0') {
            randomCardNumber = '10';
        }
        return randomCardNumber;
    },
    getRandomSuit: function() {
        // Return a random suit value from the suits array
        return this.cardSuits[this.getRandomNumber (0,3)];
    },
    loadImages: function() {
        // Update img element src attribute with a randomly generated card and suit image file name
        document.querySelector('#card').src = "cards/" + this.getRandomCard() + this.getRandomSuit() + ".png";
    },
    countDown: function() {
        // Decrement and display count down value, and upon reaching 0 stop timer and display card image
        this.displayCountDown (this._counter);
        if (this._counter === 0) {
            this.loadImages();
            this.stopCountDownTimer();
        }
        this._counter -= 1;
    },
    displayCountDown: function(num) {
        // Update countdown div element with current countdown value
        document.querySelector('#countDownSpan').textContent = `${num}`;
    },
    startCountDownTimer: function(start) {
        // Start timer, setting any appropriate object properties, with an interval of one second
        this._initialCount = start;
        this._counter = this._initialCount - 1;
        this.displayCountDown (this._initialCount);
        this._timerID = setInterval(this.countDown.bind(this), 1000);
    },
    stopCountDownTimer: function() {
        // Stop timer using object timer property
        clearInterval(this._timerID);
    },
    getRandomNumber: function(min, max) {
        // Generate a random integer between min (included) and max (excluded)
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
    }
}
const timedCard = Object.create(cardObject);
timedCard.startCountDownTimer(5);