// Create variables for each HTML element we may need reference to
let head = document.getElementById("question-heading");
let content = document.getElementById("question-content");
let optionA = document.getElementById("option-a");
let optionB = document.getElementById("option-b");
let optionC = document.getElementById("option-c");
let optionD = document.getElementById("option-d");
let buttonA = document.getElementById("button-a");
let buttonB = document.getElementById("button-b");
let buttonC = document.getElementById("button-c");
let buttonD = document.getElementById("button-d");
let feedback = document.getElementById("feedback");
let nextQuestionButton = document.getElementById("next-question");

// Create a variable to represent what question we're on
let curQuestion = 1;

// Create event listeners for buttons
nextQuestionButton.addEventListener("click", showNextQuestion);
buttonA.addEventListener("click", function() { handleAnswerClick('a') });
buttonB.addEventListener("click", function() { handleAnswerClick('b') });
buttonC.addEventListener("click", function() { handleAnswerClick('c') });
buttonD.addEventListener("click", function() { handleAnswerClick('d') });


function showQuestion1() {

}

function showQuestion2() {

}

function reset() {

}

function showNextQuestion() {

}


function handleAnswerClick(choice) {

}

reset();