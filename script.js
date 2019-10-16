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

//Create all the elements into variables

var quizContainer = document.querySelector(".container")
var startBtn = document.querySelector(".startbutton")
var submitBtn = document.querySelector(".submitbutton")
var answerBtn = document.querySelector(".answerbutton")
var resultsDiv = document.querySelector(".results")
var button = document.createElement("button")

// Create functions

function buildquiz(){
  const output = []
  myQuestions.forEach(
    (currentQuestion, questionNumber) =>{
      const answers = []
      for(letter in currentQuestion.answers){
        answers.push(
          //create an event listener here instead
            ${currentQuestion.answers[letter]}
        );
      }
    }
  )
}
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
quizContainer.innerHTML = output.join('');

function showResults(){

}

buildquiz();

submitBtn.addEventListener('click', showResults);

// displaying quiz questions

var myQuestions = [
{
  question: "What is an object literal?"

  answers: {
    a: "A list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).",
    b: "A pattern enclosed between slashes.",
    c: "Zero or more characters enclosed in double or single quotation marks."
  },
  correctAnswer: "a"
},
{
  question: "Which of the following is not a data type?"

  answers: {
    a: "Boolean",
    b: "String",
    c: "Element"
  },
  correctAnswer: "c"
},
{
  question: "Which of the following converts strings to numbers?"
  
  answers: {
    a: "parseInt",
    b: "convertNum",
    c: "string2num"
  },
  correctAnswer: "a"
}

]