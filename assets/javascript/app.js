//Initiates the start of the game when start is clicked
$('#start-button').on('click', function () {
    game.start();
})
//Game is completed when end button is clicked
$(document).on('click', "#end", function () {
    game.done();
    console.log("The game has ended");
})
//Array that contains each question with answers
var questions = [{
    question: "What is the state flower for Hawaii?",
    answers: ["Lotus ", "Orchid ", "Yellow Hibiscus ", "Jasmine "],
    correctAnswer: "Yellow Hibiscus "
},
{
    question: "What year did Hawaii become a state?",
    answers: ["1941 ", "1959 ", "1939 ", "1995 "],
    correctAnswer: "1959 "
},
{
    question: "How many islands are a part of Hawaii?",
    answers: ["7 ", "6 ", "5 ", "8 "],
    correctAnswer: "8 "
},
{
    question: "Which island has the most tourism?",
    answers: ["Oahu ", "Maui ", "Kauai ", "Big Island "],
    correctAnswer: "Oahu "
},
{
    question: "How many shark attacks per year does Hawaii average?",
    answers: ["3 ", "12 ", "36 ", "118 "],
    correctAnswer: "3 "
}];
//Game object 
var game = {
    correct: 0,
    incorrect: 0,
    counter: 50,
    //Function that will be used as timer when game is started
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter == 0) {
            //console.log("Time is up!");
            game.done();
        }
    },
    //This will begin the game and add all questions and answers on display
    start: function () {
        timer = setInterval(game.countdown, 1000);
        //Time countdown display
        $('#subwrapper').prepend('<h2 id="tRem">Time Remaining: <span id="counter">50</span> Seconds</h2>')
        //Displays questions
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
            //Displays answers
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        //Done button to end game if questions answered before time runs out
        $("#subwrapper").append("<br><br><button id='end'>DONE</button>");
    },
    //Done is used when time runs out or "Done" button clicked
    done: function () {
        //Checks if answers are correct
        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });

        this.result();
    },
    // Clears the page from questions and displays results
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2 id='gameOva'>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}