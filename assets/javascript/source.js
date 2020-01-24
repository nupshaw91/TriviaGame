
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
    qImg
}