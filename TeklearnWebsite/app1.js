function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("When did Columbus find america", ["1492", "1776","1584", "1494"], "1492"),
    new Question("Who was the first Western explorer to reach China", ["Magellan", "Francis Drake", "Columbus", "Marco Polo"], "Marco Polo"),
    new Question("Which English Philosopher was known as the 'Father of Liberalism'", ["John Wayne", "John Snow","John Locke", "John Doe"], "John Locke"),
    new Question("World War I began in which year", ["1923", "1914", "1938", "1917"], "1914"),
    new Question("The Magna Carta was published by  the king of which country", ["France", "Italy", "Austria", "England"], "England")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();