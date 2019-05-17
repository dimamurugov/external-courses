function Hangman(word) {
  var guessedString, errorsLeft, wrongSymbols;

  startGame(word);


  function startGame(newWord) {
        guessedString = '_'.repeat(newWord.length);
        errorsLeft = 6;
        wrongSymbols = [];
    }

  this.guess = function(symbol) {
    if (!errorsLeft) {
      console.log("Game over");
      return this;
    }

    var guessed = false; //флаг проверящий наличие буквы

    guessedString = guessedString.split('');

    if (word.indexOf(symbol) > -1) {
        word.split('').forEach(function(char, i) {
            if (symbol === char) {
                guessed = true;
                guessedString[i] = word[i];
            }
        });
    }

    
    guessedString = guessedString.join('');

    if (guessed) {
        console.log(guessedString);
    } else {
        errorsLeft--;
        wrongSymbols.push(symbol);
        console.log("Wrong letter, errors left " +  errorsLeft "/" + "wrongSymbols");
    }


     return this;
  }

  this.getGuessedString = function() {
     return guessedString;
  };

  this.getErrorsLeft = function() {
     return errorsLeft;
  };

  this.getWrongSymbols = function() {
     return wrongSymbols;
  };

  this.getStatus = function() {
     return guessedString + "| errors left " + errorsLeft;
  }

  this.startAgain = function(newWord) {
     startGame(newWord);
  }
};


var hangman = new Hangman('webpurple');
