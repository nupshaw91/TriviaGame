//elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImg");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGuage = document.getElementById("timeGauge");


const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");

const progress= document.getElementById("progress");

const result= document.getElementById("result");
const restart= document.getElementById("restart");
const scoreContainer = document.getElementById("scoreContainer");



//questions array and rendering
let questions = [
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/naruto.jpg",
        answerA: "Naruto",
        answerB: "Dragon Ball Z",
        answerC: "Getbackers",
        answerD: "Hellsing",
        correct: "A"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/asta.jpg",
        answerA: "Black Butler",
        answerB: "Black Clover",
        answerC: "Vampire Knight",
        answerD: "Sword Art online",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/light.jpg",
        answerA: "Code Geass",
        answerB: "Psycho-Pass",
        answerC: "Death Note",
        answerD: "Ghost in the shell",
        correct: "A"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/yusuke.jpg",
        answerA: "Beserk",
        answerB: "The Big O",
        answerC: "Cybuster",
        answerD: "Yu Yu Hakusho",
        correct: "D"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/Spike.jpg",
        answerA: "Cowboy Bebop",
        answerB: "Trigun",
        answerC: "Rurouni Kenshin",
        answerD: "Inuyasha",
        correct: "A"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/drstone.jpg",
        answerA: "Fairy Tail",
        answerB: "Dr. Stone",
        answerC: "Kill La Kill",
        answerD: "Case Closed",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/champloo.jpg",
        answerA: "Afro Samurai",
        answerB: "Samurai Champloo",
        answerC: "Gintama",
        answerD: "Not an anime",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/ichigo.jpg",
        answerA: "Hunter x Hunter",
        answerB: "D.Grayman",
        answerC: "S-CRY-ed",
        answerD: "Bleach",
        correct: "D"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/saitama.jpg",
        answerA: "FLCL",
        answerB: "One Punch Man",
        answerC: "Black Lagoon",
        answerD: "Fate stay Night",
        correct: "B"
    },
    {
        question: "What anime is this character from?",
        imgSrc: "assets/images/luffy.jpg",
        answerA: "One Piece",
        answerB: "Full Metal Alchemist",
        answerC: "Food Wars",
        answerD: ".hack",
        correct: "A"
    },
];

const lastQuestionIndex = questions.length - 1;
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
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
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
const gaugeWidth = 150;
let count = 0;
let TIMER;
let score = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender() {
    if (
        count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeProgressUnit + "px";
        count++
    } else {
        count = 0;
        wrongAnswer();
        timeUpRender();
        setTimeout(function(){
            if (runningQuestionIndex < lastQuestionIndex) {
                runningQuestionIndex++;
                renderQuestion();
            } else {
                clearInterval(TIMER);
                scoreRender();
            }
        },1000)
       
    }

}

function checkAnswer(answer) {
    if (answer === questions[runningQuestionIndex].correct) {
        score++;
        resultRender(answer);
        rightAnswer();
    } else {
       resultRender();
        wrongAnswer();
    }
    setTimeout(function(){
        count = 0;
        if (runningQuestionIndex < lastQuestionIndex) {
            runningQuestionIndex++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }},1000)
    
}
start.addEventListener("click", startQuiz);
restart.addEventListener("click",restartQuiz)


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
    const scorePercent = Math.round(100 * score / questions.length);
    let img = (scorePercent >= 80) ? "assets/images/happy.jpg" :
        (scorePercent >= 60) ? "assets/images/straightface.jpg" :
            (scorePercent >= 40) ? "assets/images/confused.jpg" :
                (scorePercent >= 20) ? "assets/images/fail.jpg" : "assets/images/gon.jpg";

    scoreContainer.innerHTML = "<img src=" + img + ">" + "<p>" + scorePercent + "%</p>";
    setTimeout(restartRender,2000)

}

function resultRender(answer){
    result.style.display ="block";
    let info = (questions[runningQuestionIndex].correct === answer) ? "Correct!!!" : "Wrong!!!";
    let img = (questions[runningQuestionIndex].correct === answer) ? "assets/images/Lsmile.jpg" : "assets/images/Lwhy.jpg";
    result.innerHTML = "<img src=" + img + ">" + "<p>" + info + "</p>"
    setTimeout(resultUnrender,1000)
}

function resultUnrender() {
    result.style.display = "none";
}
function restartRender() {
    restart.style.display = "block";
}
function restartQuiz() {
    restart.style.display = "none";
    scoreContainer.style.display = "none";
    start.style.display = "block";
    quiz.style.display = "none";
    score = 0;
    runningQuestionIndex = 0;
    qIndex = 0;
    $(".prog").remove();
}
function timeUpRender(){
    timeUp.style.display ="block";
    setTimeout(timeUpUnrender,1000)
}
function timeUpUnrender() {
    timeUp.style.display = "none";
}
