//DOM Selectors
var questionElement = document.querySelector(".questions");
var answerElement = document.querySelector(".answers");
var startButton = document.querySelector(".start-btn");
var timerElement = document.querySelector(".countdown");
var resultText = document.querySelector(".results")
var mainHeader = document.querySelector(".main-header");
var instructions = document.querySelector(".instructions");
var currentQuestionIndex = 0;

//This is the questions variable that is holding all the quiz questions and answer options//
var questions = [
    {
        question: "Which data type has quotation marks?",
        answers:[
                 {text:"Strings"}, 
                 {text:"Objects"}, 
                 {text:"Arrays"}, 
                 {text:"Boolean"}
                ],
        correct:"Strings"
    },

    {
        question:"A boolean data type can only eqaul to true/false values?",
        answers:[
                {text:"True"},
                {text:"False"}
                ],
        correct:"True"        
    },

    {
        question:"Which property is used to get the amount of items in an array?",
        answers:[
                 {text:"Concat"},
                 {text:"Push"},
                 {text:"Length"} ,
                 {text:"Size"}
                ],
        correct:"Length"
    },

    {
        question:"Which method is used to merge two or more arrays?",
        answers:[
                {text:"For Each"},
                {text:"Concat"}, 
                {text:"Slice"},
                {text:"Sort"}
                ],
        correct:"Concat"
    },

    {
        question:"Can array data types hold in other data types inside?",
        answers:[
                {text:"True"},  
                {text:"False"}
                ],
        correct:"True"
    },
   
]

//setting this variable to index 0 so the var currentQuestions is eqaul to questions[0]//

startButton.addEventListener("click", function(){
    startButton.style.display = "none"
    mainHeader.style.display = "none"
    instructions.style.display = "none"
    var firstQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = firstQuestion.question

firstQuestion.answers.forEach(answer=>{
    var firstAnswerList = document.createElement("li");
    answerElement.appendChild(firstAnswerList);
    firstAnswerButton = document.createElement("button");
    firstAnswerList.appendChild(firstAnswerButton);
    firstAnswerButton.innerHTML = answer.text;
    firstAnswerButton.addEventListener("click", function(event){
        if(event.target.textContent === questions[currentQuestionIndex].correct){
            resultText.textContent= "Correct!"    
        }
            resetStateFirst()
            showQuestionAndAnswers()
    })
    countdown();
    })
})

var newCurrentQuestionIndex = 1;
function showQuestionAndAnswers(){
    var currentQuestion = questions[newCurrentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        var answerList = document.createElement("li");
        answerElement.appendChild(answerList);
        var answerButton = document.createElement("button");
        answerList.appendChild(answerButton);
        answerButton.innerHTML = answer.text;
console.log(`correct==> ${questions[newCurrentQuestionIndex].correct}`)
console.log(`event ==> ${event.target.textContent}`)
    answerButton.addEventListener("click", function(event){
        resetState()
        if (newCurrentQuestionIndex < questions.length){ 
            newCurrentQuestionIndex++
            showQuestionAndAnswers();       
        }
        if(event.target.textContent === questions[newCurrentQuestionIndex].correct){
            resultText.textContent= "Correct!" 
            
        }
     
        })

    })
   
    
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

function resetStateFirst(){
    questionElement.removeChild(questionElement.firstChild)
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}



//function nextQuestionAndAnswers(e){
//    if (currentQuestionIndex < questions.length){
//        currentQuestionIndex++  
//        showQuestionAndAnswers();
        
//    }
   
