# TriviaGame

<p>This app is a trivia game that was created using JavaScript for the logic and jQuery to manipulate the HTML. Specifically, the trivia questions, possible answers/choices, and correct answers are stored in an array. The game begins by clicking the "START" button. 5 multiple choice questions will be displayed and the user will have 50 seconds to answer all of them before the time runs out. The app uses a timer to count down from 50 seconds. Specifically, it uses the setInterval method to decrement the timer every 1 second and the clearInterval method to stop the timer when it reaches 0. When the timer reaches 0, the questions and choices are hidden from the HTML, and the results will be displayed. As you go through the questions in the game, the app keeps track of the number of correct answers, the number of incorrect answers, and the number of questions left unanswered. If all the questions are answered before the time expires, click the "DONE" button to finish the game.<p>

## Live
https://evanmorisato.github.io/TriviaGame/

## Screenshots
![Trivia Screen](https://github.com/evanmorisato/TriviaGame/blob/master/assets/images/triviaGame.PNG?raw=true)

## Technologies Used
- JavaScript
- jQuery
- HTML
- CSS

## Getting started
The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to  https://evanmorisato.github.io/TriviaGame/.

To set up this application locally on your computer, perform the following steps:
  1. Clone the repository
  The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone https://github.com/evanmorisato/TriviaGame.git
  cd TriviaGame
</pre>
  2. Open index.html file in Default Browser
  
## Future feature enhancements 
<ul>
	<li>Include a "Try Again" button to let user improve their score.</li>
	<li>Add more questions.</li>
	<li>When user gets 100% correct, a gif shows at end of game.</li>
</ul>  
