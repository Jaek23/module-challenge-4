//DOM Selectors
var questionElement = document.querySelector(".questions");
var answerElement = document.querySelector(".answers");
var startButton = document.querySelector(".start-btn");
var timerElement = document.querySelector(".countdown");
var resultText = document.querySelector(".results")
var mainHeader = document.querySelector(".main-header");
var instructions = document.querySelector(".instructions");
var scoreInputSection = document.querySelector (".score-page");
var currentQuestionIndex = 0;
var instructionSection = document.querySelector(".start")

//This is the questions variable that is holding all the quiz questions and answer options//
var questions = [
    {
        question: "Which data type has quotation marks?",
        answers:["Strings","Objects", "Arrays","Boolean"],       
        correct:"Strings"
    },

    {
        question:"A boolean data type can only eqaul to true/false values?",
        answers:["True","False"],        
        correct:"True"        
    },

    {
        question:"Which property is used to get the amount of items in an array?",
        answers:["Concat","Push", "Length","Size"],    
        correct:"Length"
    },

    {
        question:"Which method is used to merge two or more arrays?",
        answers:["For Each","Concat", "Slice","Sort"],      
        correct:"Concat"
    },

    {
        question:"Can array data types hold in other data types inside?",
        answers:["True", "False"],       
        correct:"True"
    },
   
]

startButton.addEventListener("click", function(){
    countdown();
    showQuestionsAndAnswers();
    });   

    
function showQuestionsAndAnswers(){
    instructionSection.setAttribute('class', 'hide')
    questionElement.setAttribute('class', 'start')
    answerElement.setAttribute('class', 'start')
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestionIndex++
    resetState()

    var resultText = document.getElementById("result-text");
    resultText.textContent = " ";
    
    currentQuestion.answers.forEach(answer=>{
        var answerButton = document.createElement("button");
        answerElement.appendChild(answerButton);
        answerButton.innerHTML = answer;
        answerButton.addEventListener("click", answerClick);
    })
    //console.log(`correct==> ${questions[currentQuestionIndex].correct}`)
    //console.log(`event ==> ${event.target.textContent}`)
}
function answerClick(event){
    var buttonElement = event.target;
    if(buttonElement.innerhHTML === questions[currentQuestionIndex -1].correct){
        var resultText = document.getElementById("result-text");
        resultText.textContent = "Answer is correct!"
    }
}

function countdown(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerElement.textContent = `Time: ` + timeLeft + ' seconds';
            timeLeft--;
        }else if(timeLeft === 1) {
            timerElement.textContent = `Time: ` + timeLeft + ' second';
            timeLeft--;
        }else {
            timerElement.textContent = " ";
            clearInterval(timeInterval);
        }
    }, 1000);
    
}
function resetState(){
    //questionElement.removeChild(questionElement.firstChild)
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

//function nextQuestion(){
//    
//    var currentQuestion = questions[currentQuestionIndex];
//    questionElement.innerHTML = currentQuestion.question;

//    currentQuestion.answers.forEach(answer=>{
//        var answerButton = document.createElement("button");
//        answerElement.appendChild(answerButton);
//        answerButton.innerHTML = answer.text;
//        answerButton.addEventListener("click", showNextQuestion);{
           
//      }
//    });   
// }


//function showNextQuestion (event){
//    //currentQuestionIndex++
//    if(currentQuestionIndex<questions.length){
//        nextQuestion();
//    }
//    if(event.target.textContent === questions[currentQuestionIndex].correct){
//        resultText.textContent = "Correct!"
//    }
    
// console.log(`correct==> ${questions[currentQuestionIndex].correct}`)
//    console.log(`event ==> ${event.target.textContent}`)