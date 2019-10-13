//timer

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById(".maintime");

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTime();

timeEl.setAttribute("style", "margin:auto; width:50%; text-align:right;");
mainEl.setAttribute("style", "margin:auto; width:50%; text-align:right;");

//start button
