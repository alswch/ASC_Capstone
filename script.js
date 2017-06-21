$(document).ready(function() {
  console.log("jQuery ready");

  var WoF = {
    wordArray: [{word:"water", hint:"Major source of life"},
                {word:"coffee", hint:"Morning booster"},
                {word:"airplane", hint:"Travel fast"},
                {word:"laptop", hint:"A carrying device"},
                {word:"sandwich", hint:"Lunch"},
                {word:"pencil", hint:"Lunch"},
                {word:"sunshine", hint:"Lunch"},
                {word:"monday", hint:"Lunch"} ],
    currentWord: null,
    totalPoints: 0,
    guessedLetter: [],

    initialize: function() {
      console.log("==initialize==");
      this.displayLetter();
      this.guessNextLetter();
    },

    // ===== ===== ===== WORD BOX DISPLAY ===== ===== =====
    displayLetter: function() {
      var randomNumber = Math.floor(Math.random()*8);
      var phrase = WoF.wordArray[randomNumber].word;
      this.currentWord = phrase;
      console.log("currentWord", this.currentWord);
      for (var i = 0; i < phrase.length; i++) {
      var nextLetter = phrase[i];
        console.log(nextLetter);
        // var letterBox = $("<div/>", {id: 'letter_'+i, class: 'letterBox'});
        // var letter = $("<p/>", {class:'letter'});
        var letterBox = "<div id='letter_" + i + "'class='letterBox'><p id='text_" + i + "'class='letter'>" + nextLetter + "</p></div>"
        $('#gameboardContainer').append(letterBox);
        // $('#gameboardContainer').children().last().html(nextLetter);
      };
    },

    guessNextLetter: function() {
      console.log("==guessNextLetter==");
      var self = this;
      $('#submitBtn').on('click', function(){
        self.checkLetter();
      });
    },
    // ===== ===== ===== CHECKINGTHE GUESSED LETTER ===== ===== =====
    // ===== ===== If the entered text is correct, display the text on the box and add 100 points
    checkLetter: function() {
      var guessText = $('#guessText').val();
      WoF.guessedLetter.push(guessText);
      var guessedLetterString = "";
      for (var i = 0; i < WoF.guessedLetter.length; i++) {
        var x = WoF.guessedLetter[i]
        guessedLetterString = guessedLetterString + x + "&nbsp" + "&nbsp";
      }
      $('#guessTextDisplay').children().html(guessedLetterString);

      var currentPoint = this.totalPoints
      console.log("currentPoint:", currentPoint);
      for (var i = 0; i < this.currentWord.length; i++) {
        var nextLetterCheck = this.currentWord[i];
        // console.log("nextLetterCheck:", nextLetterCheck);
        if (guessText == nextLetterCheck) {
          WoF.totalPoints = WoF.totalPoints + 100;
          $('#gameboardContainer').find("#text_" + i).css('display', 'block');
          // console.log(WoF.totalPoints);
        }
      }
        if (currentPoint == WoF.totalPoints ) {
          alert("Please try again")
        }
    }

  } //CLOSES WoF
  WoF.initialize();
}); //CLOSES JQUERY
