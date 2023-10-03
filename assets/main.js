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
                 {text:"Boolean", correct: false}
        ]
    },

    {
        question:"A boolean data type can only eqaul to true/false values?",
        answers:[
                {text:"True", correct: true},
                {text:"False", correct: false}
                ]
    },

    {
        question:"Which property is used to get the amount of items in an array?",
        answers:[
                 {text:"Concat", correct:false},
                 {text:"Push", correct:false},
                 {text:"Length", correct:true} ,
                 {text:"Size", correct:false}
                ]
    },

    {
        question:"Which method is used to merge two or more arrays?",
        answers:[
                {text:"For Each", correct:false},
                {text:"Concat", correct:true}, 
                {text:"Slice", correct:false},
                {text:"Sort", correct:false}
                ]
    },

    {
        question:"Can array data types hold in other data types inside?",
        answers:["True",  "False"]
    },
   
]

//setting this variable to index 0 so the var currentQuestions is eqaul to questions[0]//


function startQuiz(){
    startButton.style.display = "none"
    mainHeader.style.display = "none"
    instructions.style.display = "none"
    showQuestionAndAnswers();
}

var currentQuestionIndex = 0;
function showQuestionAndAnswers(){
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;
  //resetState()
  currentQuestion.answers.forEach(answer=>{
    var answerList = document.createElement("li");
    answerElement.appendChild(answerList);
    var answerButton = document.createElement("button");
    answerList.appendChild(answerButton);
    answerButton.innerHTML = answer.text;
    answerButton.addEventListener("click", function(){
    resultMessage()
    resetState()
    if (currentQuestionIndex < questions.length){
        currentQuestionIndex++  
        showQuestionAndAnswers();
    }
    
})

  })
}

function resetState(){
    questionElement.removeChild(questionElement.firstChild)
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

function resultMessage(){


    
}

startButton.addEventListener("click", startQuiz);




   
