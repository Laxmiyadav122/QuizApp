
const questions = [
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers: [
            { text: "variable x", correct: false },
            { text: "var x", correct: true },
            { text: "v x", correct: false },
            { text: "declare x", correct: false },
        ]
    },
    {
        question: " Which array method can be used to join two or more arrays?",
        answers: [
            { text: "concat()", correct: true },
            { text: "push()", correct: false },
            { text: "pop()", correct: false },
            { text: "join()", correct: false },
        ]
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        answers: [
            { text: "Compares values for equality", correct: false },
            { text: "Compares values and types for equality", correct: true },
            { text: "Assigns a value to a variable", correct: false },
            { text: "Checks if a variable is 'undefined'", correct: false },
        ]
    },
    {
        question: "How do you remove the last element from an array in JavaScript?",
        answers: [
            { text: "arr.pop()", correct: true },
            { text: "arr.shift()", correct: false },
            { text: "arr.push()", correct: false },
            { text: "arr.unshift()", correct: false },
        ]
    },
    {
        question: "What does Math.random() do in JavaScript?",
        answers: [
            { text: "Generates a random number between 1 and 10", correct: false },
            { text: "Generates a random number between 0 and 1", correct: true },
            { text: "Generates a random integer", correct: false },
            { text: "Generates a random number between 0 and 100", correct: false },
        ]
    },
    {
        question: "How do you get the current date and time in JavaScript?",
        answers: [
            { text: "new Date().now()", correct: false },
            { text: "new Date().getTime()", correct: false },
            { text: "Date()", correct: false },
            { text: "new Date()", correct: true },
        ]
    },
    {
        question: "What is the data type of 'NaN' in JavaScript?",
        answers: [
            { text: "Number", correct: true },
            { text: "String", correct: false },
            { text: "Object", correct: false },
            { text: "Undefined", correct: false },
        ]
    },
    {
        question: "What is the default return value of a function that does not explicitly return anything?",
        answers: [
            { text: "null", correct: false },
            { text: "undefined", correct: true },
            { text: "0", correct: false },
            { text: "false", correct: false },
        ]
    },
    {
        question: " Which method converts a JSON string into a JavaScript object?",
        answers: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.toObject()", correct: false },
        ]
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Object", correct: true },
            { text: "Number", correct: false },
        ]
    },
 ];
 
 
 const questionElement = document.getElementById("quesiton");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");
 
 
 let currentQuestionIndex = 0;
 let score = 0;
 
 
 function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


   currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButtons.appendChild(button);
       if (answer.correct) {
           button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
   });
}


function resetState() {
   nextButton.style.display = "none";
   while (answerButtons.firstChild) {
       answerButtons.removeChild(answerButtons.firstChild);
   }
}
function selectAnswer(e) {
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if (isCorrect){
       selectedBtn.classList.add("correct");
       score++;
   } else {
       selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button => {
       if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}


function showScore() {
resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}


function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}
}


nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
    handleNextButton();
} else {
    startQuiz();
}
});


startQuiz();
