//variables to track quiz state
var currentQuestion = 0;
var time = questions.length * 15;
var timerId;

//variable to ref Dom elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//starting quiz
const startQuiz = () => {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    //unhide questions
    questionsEl.removeAttribute("class");
    //start timer
    timerId = setInterval(clockTick, 1000);
    //show starting time
    timerEl.textContent = time;

    getQuestion();
}

const getQuestion = () => {
    //current question from array
    var currentQ = questions
    [currentQuestion];

    //update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQ.title;

    //clear out any old question choices
    choicesEl.innerHTML = "";

    //loop over choices
    currentQ.choices.forEach(function(choices, i) {
        //create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class","choices");
        choiceNode.setAttribute("value", choices);

        choiceNode.textContent = i + 1 + ". " + choices;

        //attach click event listener to each choice
        choiceNode.onclick = questionClick;

        //display on the page
        choicesEl.appendChild(choiceNode);
    });
}
const questionClick = () => {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestion].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page and if right or wrong answer
      timerEl.textContent = time;
      feedbackEl.textContent = "Wrong!";
    } else {  
      feedbackEl.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    currentQuestion++;
  
    // check if we've run out of questions
    if (currentQuestion === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  
  const quizEnd = () => {
    // stop timer
    clearInterval(timerId);
  
    // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");
  
    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
  
    // hide questions section
    questionsEl.setAttribute("class", "hide");
  }
  
  const clockTick = () => {
    // update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }
  
  const saveHighscore = () => {
    // get value of input box
    var initials = initialsEl.value.trim();
  
    // make sure value wasn't empty
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "highscores.html";
    }
  }
  
  const checkForEnter = (event) => {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveHighscore();
    }
  }
  
  // user clicks button to submit initials
  submitBtn.onclick = saveHighscore;
  
  // user clicks button to start quiz
  startBtn.onclick = startQuiz;
  
  initialsEl.onkeyup = checkForEnter;
  