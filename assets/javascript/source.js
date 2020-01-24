//elements
var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var qImg = document.getElementById("qImg")
var question = document.getElementById("question")
var counter = document.getElementById("counter")
var timeGuage = document.getElementById("timeGuage")


var answerA = document.getElementById("A")
var answerB = document.getElementById("B")
var answerC = document.getElementById("C")
var answerD = document.getElementById("D")

var progress= document.getElementById("progress")

var scoreContainer = document.getElementById("scoreContainer")

//questions array and rendering
var questions =[
    {
question : "",
imgSrc : "",
answerA : "",
answerB : "",
answerC : "",
answerD : "",
correct : ""
    },
    {
        question : "",
        imgSrc : "",
        answerA : "",
        answerB : "",
        answerC : "",
        answerD : "",
        correct : ""
    },
];

var lastQuestionIndex = questions.length-1;
var runningQuestionIndex = 0;

function renderQuestion(){
    var q =questions[runningQuestionIndex];
    qImg.innerHTML= "<img src=" + q.imgSrc + ">";
    question.innerHTML= "<img src=" + q.question + ">";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
};

//Progression
function progressRender(){
    for(var qIndex =0; qIndex <=lastQuestionIndex; qIndex++){
        progress.innerHTML +="<div class='prog' id="+qIndex+"></div>";
    }
}

function rightAnswer(){
    document.getElementById(runningQuestionIndex).style.backgroundColor ="green"
};

function wrongAnswer(){
    document.getElementById(runningQuestionIndex).style.backgroundColor ="red"
};

//Timing
var questionTime = 10;
var guageWidth = 150;
var count = 0;
var TIMER =
setInterval(counterRender,1000);
var guageProgressUnit = guageWidth/questionTime;

function counterRender(){
    if(
        count <= questionTime){
            counter.innerHTML = count;
            timeGuage.style.width=guageProgressUnit*count + "px"
            count++;
        }else
        {
            count =0
            rightAnswer();
            if(runningQuestionIndex< lastQuestionIndex){
                runningQuestionIndex++;
                renderQuestion();
            }else{
                clearInterval(TIMER);
                scoreRender();
            }
}

}
