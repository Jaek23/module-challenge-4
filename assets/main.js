//DOM Selectors
var questionElement = document.querySelector(".questions");
var answerElement = document.querySelector(".answers");
var startButton = document.querySelector(".start-btn");
var mainHeader = document.querySelector(".main-header");
var instructions = document.querySelector(".instructions");

//This is the questions variable that is holding all the quiz questions and answer options//
var questions = [
    {
        question: "Which data type has quotation marks?",
        answers:[
                 {text:"Strings", correct: true}, 
                 {text:"Objects", correct: false}, 
                 {text:"Arrays", correct: false}, 
                 {text:"Boolean", correct: false}, 
                ]
    },

    {
        question:"A boolean data type can only eqaul to true/false values?",
        answers:["True", "False"]
    },

    {
        question:"Which property is used to get the amount of items in an array?",
        answers:["Concat", "Push", "Length", "Size"]
    },

    {
        question:"Which method is used to merge two or more arrays?",
        answers:["For Each", "Concat", "Slice", "Sort"]
    },

    {
        question:"Can array data types hold in other data types inside?",
        answers:["True", "False"]
    },
]

//setting this variable to index 0 so the var currentQuestions is eqaul to questions[0]//
var currentQuestionIndex = 0;

function showQuestions(){
    var questionText = document.createElement("h3");
    questionText.setAttribute("style", "font-size:32px");
    questionElement.appendChild(questionText)
    var currentQuestion = questions[currentQuestionIndex];
//this will now display the questions[].questions when you click the startButton//
    questionText.innerHTML = currentQuestion.question;
    startButton.style.display = "none"
    mainHeader.style.display = "none"
    instructions.style.display = "none"

    for (var i=0; i <currentQuestion.answers.length; i++){
        var answerButton = document.createElement("button");
        answerElement.appendChild(answerButton)
        answerButton.innerHTML = currentQuestion.answers.text
    
    }

}

startButton.addEventListener("click", showQuestions);