//elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGuage = document.getElementById("timeGuage");


const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");

const progress= document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");



//questions array and rendering
let questions = [
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/naruto.jpg",
        answerA: "Naruto",
        answerB: "",
        answerC: "",
        answerD: "",
        correct: "A"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/asta.jpg",
        answerA: "",
        answerB: "Black Clover",
        answerC: "",
        answerD: "",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/light.jpg",
        answerA: "",
        answerB: "",
        answerC: "Death Note",
        answerD: "",
        correct: "C"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/yusuke.jpg",
        answerA: "Yu Yu Hakusho",
        answerB: "",
        answerC: "",
        answerD: "",
        correct: "A"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/Spike.jpg",
        answerA: "",
        answerB: "",
        answerC: "Cowboy Bebop",
        answerD: "",
        correct: "C"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/dr.stone.jpg",
        answerA: "",
        answerB: "Dr. Stone",
        answerC: "",
        answerD: "",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/champloo.jpg",
        answerA: "",
        answerB: "Samurai Champloo",
        answerC: "",
        answerD: "",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/ichigo.jpg",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "Bleach",
        correct: "D"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/saitama.jpg",
        answerA: "",
        answerB: "",
        answerC: "One Punch Man",
        answerD: "",
        correct: "C"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/luffy.jpg",
        answerA: "One Piece",
        answerB: "",
        answerC: "",
        answerD: "",
        correct: "A"
    },
];

const lastQuestionIndex = questions.length-1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q =questions[runningQuestionIndex];
    qImg.innerHTML= "<img src=" + q.imgSrc + ">";
    question.innerHTML= "<p>" + q.question + "</p>";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
}

//Progression
function progressRender(){
    for(var qIndex =0; qIndex <=lastQuestionIndex; qIndex++){
        progress.innerHTML +="<div class='prog' id=" + qIndex +"></div>";
    }
}

function rightAnswer(){
    document.getElementById(runningQuestionIndex).style.backgroundColor ="green"
}

function wrongAnswer(){
    document.getElementById(runningQuestionIndex).style.backgroundColor ="red"
}

//Timing
const questionTime = 10;
const guageWidth = 150;
let count = 0;
let TIMER;
let score = 0;
const guageProgressUnit = guageWidth/questionTime;

function counterRender() {
    if (
        count <= questionTime) {
        counter.innerHTML = count;
        timeGuage.style.width = guageProgressUnit * count + "px";
        count++
    } else {
        count = 0;
        rightAnswer();
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }

}

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct === answer) {
        score++;
        rightAnswer();
    } else {
        wrongAnswer();
    }
    if (runningQuestionIndex < lastQuestionIndex) {
        count = 0;
        runningQuestionIndex++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}
start.addEventListener("click", startQuiz);



function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block";
    progressRender();
    counterRender();
    TIMER = setInterval(counterRender,1000);
   
}

function scoreRender() {
    scoreContainer.style.display = "block";
    var scorePercent = Math.round(100 * score / questions.length);
    var img = (scorePercent >= 80) ? "../images/happy.jpg" :
        (scorePercent >= 60) ? "../images/straight face.jpg" :
            (scorePercent >= 40) ? "../images/confused.jpg" :
                (scorePercent >= 20) ? "../images/fail.jpg" : "";

    scoreContainer.innerHTML = "<img src=" + img + "><p>" + scorePercent + "%</p>";
}