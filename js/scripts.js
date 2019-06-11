$(document).ready(function() {
  var reverse = []
  $(".formOne").submit(function(event) {
    var userInput = $("#input1").val();

    var userInput2 = userInput.split(""); 
    userInput2 = userInput2.reverse();
    userInput2 = userInput2.join("");
    console.log(userInput);
    console.log(userInput2);
    if (userInput === userInput2) {
      $("#output").text("Good Job!")
    } else {
      $("#output").text("Try again!")
    }
      event.preventDefault();
  });
  });
