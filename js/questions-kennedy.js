window.onload = function () {

  var questionArea = document.getElementsByClassName('questions')[0],

       answerArea  = document.getElementsByClassName('answers')[0],

//array that stores all questions
var allQuestions = [
  "Which of these four is your favorite arcade game?",
  "What is your favorite movie out of these four?",
  "What lyrics resonate best with you?",
  "We gotta know - what's your favorite neon color?",
  "Who is your 80's icon?",
  "Who do you think is the better singer?";
];

//loads all the questions into the questionArea
//grabs the current question based on the 'current'-variable
function loadQuestion(curr) {

    var question = Object.keys(allQuestions)[curr];
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
}

};
