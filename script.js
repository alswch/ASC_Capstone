$(document).ready(function() {
  console.log("jQuery ready");

  var WoF = {
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
      var phrase = WoF.wordArray[randomNumber].word;
      this.currentWord = phrase;
      console.log("currentWord", this.currentWord);
      for (var i = 0; i < phrase.length; i++) {
      var nextLetter = phrase[i];
        console.log(nextLetter);
        // var letterBox = $("<div/>", {id: 'letter_'+i, class: 'letterBox'});
        // var letter = $("<p/>", {class:'letter'});
        var letterBox = "<div id='letter_" + i + "'class='letterBox'><p id='text_" + i + "'class='letter'>" + nextLetter + "</p></div>"
        // var hideLetter = "<div class='hideLetter'></div>"
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
    checkLetter: function() {
      var guessText = $('#guessText').val();
      $('#guessTextDisplay').children().html(guessText);
      for (var i = 0; i < this.currentWord.length; i++) {
        var nextLetterCheck = this.currentWord[i];
        console.log("nextLetterCheck:", nextLetterCheck);
        if (guessText == nextLetterCheck) {
          WoF.totalPoints = WoF.totalPoints + 100;
          $('#gameboardContainer').find("#text_"+i).css('display', 'block');
          console.log(WoF.totalPoints);
        }
      }
      // this.checkLetterIncorrect();
    }
    // checkLetterIncorrect: function() {
    //   console.log(Wof.totalPoints);
    //   // if (Wof.totalPoints == Wof.totalPoints){
    //   //   console.log("incorrect answer");
    //   // }
    //
    // }

  }
  WoF.initialize();

}); //CLOSES JQUERY
