$(document).ready(function() {
  console.log("jQuery ready");

  var WheelofFortune = {

    initialize: function() {
      console.log("==initialize==");
      this.displayLetter();
      this.guessNextLetter();
    },

    // ===== ===== ===== WORD BOX DISPLAY ===== ===== =====
    // empty array that contains words

    displayLetter: function() {
      var words = "water";
      for (var i = 0; i < words.length; i++) {
      var nextLetter = words[i];
        console.log(nextLetter);
        // var letterBox = $("<div/>", {id: 'letter_'+i, class: 'letterBox'});
        // var letter = $("<p/>", {class:'letter'});
        var letterBox = "<div id='letter_"+i+"'class='letterBox'><p class='letter'>" + nextLetter + "</p></div>"
        $('#gameboardContainer').append(letterBox);
        // $('#gameboardContainer').children().last().html(nextLetter);
      };
    },

    guessNextLetter: function() {
      console.log("==guessNextLetter==");
      var self = this;
      $('#submitBtn').on('click', function(){
        console.log("==submitBtn==");
        var guessText = $('#guessText').val();
        $('#guessTextDisplay').html(guessText);
        // self.displayGuessText();
      })
    },
    // displayGuessText: function() {
    //   console.log("==displayGuessText==");
    // }

  }
  WheelofFortune.initialize();

}); //CLOSES JQUERY
