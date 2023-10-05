//DOM Selectors
var questionElement = document.querySelector(".questions");
var answerElement = document.querySelector(".answers");
var startButton = document.querySelector(".start-btn");
var timerElement = document.querySelector(".countdown");
var resultTextContainer = document.querySelector(".results")
var mainHeader = document.querySelector(".main-header");
var instructions = document.querySelector(".instructions");
var currentQuestionIndex = 0;
var instructionSection = document.querySelector(".start")
var results = document.querySelector(".results")
var scorePage = document.querySelector(".score-page");
var score = 0;
var scoreDisplay = document.querySelector(".scoredisplay")
var timeLeft = 30;

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
    resetState()

    var resultText = document.getElementById("result-text");
    resultText.textContent = " ";
    
    currentQuestion.answers.forEach(answer=>{
        var answerButton = document.createElement("button");
        answerElement.appendChild(answerButton);
        answerButton.innerHTML = answer;
        answerButton.addEventListener("click", answerClick);{
            if(currentQuestionIndex > 4){
                scorePage.setAttribute('class', 'start')
            }
        }
    })
    //console.log(`correct==> ${questions[currentQuestionIndex].correct}`)
    //console.log(`event ==> ${event.target.textContent}`)
}

function answerClick(event){
    var resultText = document.getElementById("result-text");
    var buttonElement =event.target;
    if(buttonElement.innerHTML !== questions[currentQuestionIndex].correct){
        resultText.innerText = "Answer is incorrect!"
        timeLeft = timeLeft - 10;
    }
    else{
        resultText.innerText = "Answer is correct!"
        score = score + 10;
        scoreDisplay.textContent = "Your score is " + score;
    }

    setTimeout(() =>{
        currentQuestionIndex++
        showQuestionsAndAnswers()
    }, 1000)
    
}


function countdown(){
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerElement.textContent = `Time: ` + timeLeft + ' seconds';
            timeLeft--;
        }
        else if(timeLeft === 1) {
            timerElement.textContent = `Time: ` + timeLeft + ' second';
            timeLeft--;
        }
        else{timerElement.textContent = " ";
            clearInterval(timeInterval);
            questionElement.setAttribute('class', 'hide')
            answerElement.setAttribute('class', 'hide')
            scorePage.setAttribute('class', 'start') 
        }
        if(currentQuestionIndex > 4){
            questionElement.setAttribute('class', 'hide')
            answerElement.setAttribute('class', 'hide')
            scorePage.setAttribute('class', 'start')    
        }
    }, 1000
)}
function resetState(){
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

function resetStateLast(){
    questionElement.removeChild(questionElement.firstChild)
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}
