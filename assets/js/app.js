const app = {
    counter: 45,
    gameStart: false,
    cardsActivePair: [],
    matchCounter: 0,
    init: function() {
        // Display timer
        const timerEl = document.querySelector('.timer');
        timerEl.textContent = app.counter;

        // Retrieve and listen all the cards
        const cards = document.querySelectorAll('.card');
        for(let card of cards) {
           card.addEventListener('click', app.handleCardClick);
        }
    },
    beginGame: function() {
        app.gameStart = true;

        // Set the timer 
        app.startOrStopTimer();
    },
    checkActivePair: function(pairArray) {
        // Retrieve the card image from both cards
        const previousCardImage = pairArray[0].querySelector('.card__image');
        const currentCardImage = pairArray[1].querySelector('.card__image');

        // Check src match
        if(previousCardImage.src === currentCardImage.src) {
            return true;
        }

        return false;
    },
    checkGameOver: function() {
        // Target the game wrapper
        const gameWrapperEl = document.querySelector('.game-wrapper');

        if(app.matchCounter === 10) {
            // create and append a div with the game over message
            const gameOverEl = document.createElement('p');
            gameOverEl.classList.add('game-over');
            gameOverEl.textContent = "Well done!";

            gameWrapperEl.appendChild(gameOverEl);

            // stop timer
            app.gameStart = false;
            app.checkGameIsOn(document.querySelector('.timer'));
        } 
    },
    startOrStopTimer: function() {
        const timerEl = document.querySelector('.timer');

        app.checkGameIsOn(timerEl)
    },
    checkGameIsOn: function(timerEl) {
        console.log(app.gameStart);
        let timer;

        if(app.gameStart === true) {
            timer = setInterval(function() {
                app.counter -= 1;
                timerEl.textContent = app.counter;  
                
                if(app.gameStart === false) {
                    clearInterval(timer);
                }

                if(app.counter === 0) {
                    clearInterval(timer);
                    app.handleLosing();
                }
            }, 1000); 
        }
    },
    displayLosingMessage: function() {
        const gameWrapperEl = document.querySelector('.game-wrapper');

        // create and append a div with the game over message
        const loseEl = document.createElement('p');
        loseEl.classList.add('game-over');
        loseEl.textContent = "Game over, try again!";

        gameWrapperEl.appendChild(loseEl);
    },
    handleCardClick: function(evt) {
        // Flip the card 
        const currentCard = evt.currentTarget;
        currentCard.classList.add('clicked');

        // Push the currentCard to the pair array
        app.cardsActivePair.push(currentCard);

        if(app.cardsActivePair.length < 2) {
            // Beginning of the game, set the timer
            app.beginGame();
        } else if(app.cardsActivePair.length > 2) {
            // Remove the first element of the array if length is over 2
            app.cardsActivePair.shift();
        }  
        
        // Check the active pair
        if(app.cardsActivePair.length === 2 && (app.cardsActivePair[0] !== app.cardsActivePair[1])) {
            let doMatch = app.checkActivePair(app.cardsActivePair);
        
            // if match
            if(doMatch === true) {
                app.matchCounter++;

                for(let card of app.cardsActivePair) {
                    card.classList.add('match');
                }
            } 
        }

        // Flip the card back
        setTimeout(function() {
            currentCard.classList.remove('clicked');
        }, 1500);
        
        app.checkGameOver();
    },
    handleLosing: function() {
        // Check if time is up without all the cards flipped
            const cards = document.querySelectorAll('.card');
            for(let card of cards) {
                card.classList.add('timesup');
            }

            app.displayLosingMessage();
    }

}

document.addEventListener('DOMContentLoaded', app.init);