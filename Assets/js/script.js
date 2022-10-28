var startBttn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content");
var qEl = document.getElementById("questions");

var time = 100;
var timerInterval;

var quizIndex = -1;

function startQuiz () {
    timerEl.textContent = time;
    timerInterval = setInterval(function() {
        
        time--;
        timerEl.textContent = time;
      
    }, 1000);
    
    quizIndex++;
    showQuestion();
}


function endQuiz() {
    clearInterval(timerInterval);
    var initials = prompt("Enter your initials.");
    var highscore = timerEl.textContent;
    console.log(highscore);

    if ( initials !== "" ) {
        var scores = JSON.parse(localStorage.getItem("highscores")) || [];
        var userScore = {
            initials,
            highscore
        }
        scores.push(userScore);
        localStorage.setItem("highscores", JSON.stringify(scores));
        window.location.href = "high_scores.html";
    }
}



function showQuestion() {
    var question = questions[quizIndex];
    qEl.innerHTML = '';
    var questionEl = document.createElement("div");
    var titleP = document.createElement ("div");
    titleP.innerHTML = question.title;
    questionEl.append(titleP);

    for (var i = 0; i < question.choices.length; i++) {
        var bttnEl = document.createElement("button");
        var choice = question.choices[i];
        bttnEl.textContent = choice;
        bttnEl.onclick = checkAnswer;
        bttnEl.setAttribute("value", question.choices[i]);
        questionEl.append(bttnEl);
    }
    qEl.append(questionEl);
}


function checkAnswer(){
    if (this.value !== questions[quizIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
    }

    quizIndex++;
    if (quizIndex === questions.length || time <= 0) {
        endQuiz();
    } else {
        showQuestion();
    }
}

startBttn.onclick = startQuiz;