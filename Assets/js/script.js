var startBttn = document.querySelectorAll("start");
var timerEl = document.querySelectorAll("timer");
var contentDiv = document.querySelectorAll("content");
var qsDiv = document.querySelectorAll("questions");

var time = 100;
var timerInterval;

var quizIndex = -1;

function startQuiz () {
    timerEl.textContent = time;
    timerInterval = setInterval(function() {
        
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);
    
    gameIndex++;
    showQuestion();
}


function showQuestion() {
    var question = questions[gameIndex];
    qsDiv.innerHTML = '';
    var questionDiv = document.createElement("div");
    var titleP = document.createElement ("p");
    titleP.textContent = question.title;
    questionDiv.append(titleP);

    for (var i = 0; i < question.choices.length; i++) {
        var bttnEl = document.createElement("button");
        var choice = question.choices[i];
        bttnEl.textContent = choice;
        bttnEl.onclick = checckanswer;
        bttnEl.setAttribute("value", question.choices[i]);
        questionDiv.append(bttnEl);
    }
    qsDiv.append(questionDiv);
}


function checkAnswer(){
    if (this.value !== questions[gameIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
    }

    gameIndex++;
    if (gameIndex === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}


function endQuiz() {
    clearInterval(timerInterval);
    var names = prompt("Enter your name.");
    var highscore = timerEl.textContent;
    console.log(highscore);

    if ( names !== "" ) {
        var scores = JSON.parse(localStorage.getItem("highscores")) || [];
        var userScore = {
            initials,
            highscore
        }
        scores.push(userScore);
        localStorage.setItem("highscores", JSON.stringify(scores));
        window.location.href = "scores.html";
    }
}


startBttn.onclick = startQuiz;