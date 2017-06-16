$(document).ready(function() {
  console.log("jQuery ready");

  var WheelofFortune = {
    wordArray: [{word:"water", hint:"Major source of life"},
                {word:"coffee", hint:"Morning booster"},
                {word:"airplane", hint:"Travel fast"},
                {word:"laptop", hint:"A carrying device"},
                {word:"sandwich", hint:"Lunch"} ],
    currentWord: null,
    totalPoints: 0,

    initialize: function() {
      console.log("==initialize==");
      this.displayLetter();
      this.guessNextLetter();
    },

    // ===== ===== ===== WORD BOX DISPLAY ===== ===== =====
    displayLetter: function() {
      var randomNumber = Math.floor(Math.random()*5);
      var phrase = WheelofFortune.wordArray[randomNumber].word;
      this.currentWord = phrase;
      console.log("currentWord", this.currentWord);
      for (var i = 0; i < phrase.length; i++) {
      var nextLetter = phrase[i];
        console.log(nextLetter);
        // var letterBox = $("<div/>", {id: 'letter_'+i, class: 'letterBox'});
        // var letter = $("<p/>", {class:'letter'});
        var letterBox = "<div id='letter_"+i+"'class='letterBox'><p class='letter'>" + nextLetter + "</p></div>"
        $('#gameboardContainer').append(letterBox);
        $('#gameboardContainer').children().last().html(nextLetter);
      };
    },

    guessNextLetter: function() {
      console.log("==guessNextLetter==");
      var self = this;
      $('#submitBtn').on('click', function(){
        self.checkLetter();
      });
    },
    checkLetter: function() {
      var guessText = $('#guessText').val();
      $('#guessTextDisplay').children().html(guessText);
      for (var i = 0; i < this.currentWord.length; i++) {
        var nextLetterCheck = this.currentWord[i];
        console.log("nextLetterCheck:", nextLetterCheck);
        if (guessText == nextLetterCheck) {
          WheelofFortune.totalPoints = WheelofFortune.totalPoints + 100;
          console.log(WheelofFortune.totalPoints);
        }
      }
    }

  }
  WheelofFortune.initialize();

}); //CLOSES JQUERY
