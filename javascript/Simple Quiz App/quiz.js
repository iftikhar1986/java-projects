// Quiz questions array

var questions = [
    {
        question: 'What is the capital of Qatar?',
        options: ['Rayyan', 'Doha', 'Cournish', 'Old Airport'],
        correctAnswer: 'Doha'
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
      },
      {
        question: 'Who wrote "Hamlet"?',
        options: ['Mark Twain', 'J.K. Rowling', 'William Shakespeare', 'Charles Dickens'],
        correctAnswer: 'William Shakespeare'
      }

];

  // Keep track of the current question and score
  var currentQuestionIndex = 0;
  var score = 0;


// Load the first question when the page loads
window.onload = loadQuestion;

function loadQuestion() {
    var questionElement = document.getElementById('question');
    var optionsElement = document.getElementById('options');

  // Display the question
  questionElement.textContent = questions[currentQuestionIndex].question;

   // Display the answer options
   optionsElement.innerHTML = '';
   questions[currentQuestionIndex].options.forEach(function(option) {
     var optionElement = document.createElement('input');
     optionElement.type = 'radio';
     optionElement.name = 'option';
     optionElement.value = option;
     optionsElement.appendChild(optionElement);
     optionsElement.appendChild(document.createTextNode(option));
     optionsElement.appendChild(document.createElement('br'));
   });
}

// Function to handle submitting the answer
function submitAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
  
    // If no option is selected, alert the user
    if (!selectedOption) {
      alert('Please select an answer!');
      return;
    }
    var answer = selectedOption.value;

    // Check if the answer is correct and update the score
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      score++;
      document.getElementById('feedback').textContent = 'Correct!';
    } else {
      document.getElementById('feedback').textContent = 'Wrong! The correct answer is ' + questions[currentQuestionIndex].correctAnswer;
    }
  
    // Move to the next question
    currentQuestionIndex++;
  
    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
      loadQuestion(); // Load the next question
    } else {
      endQuiz(); // End the quiz and display the score
    }
  
    // Clear feedback after a short delay
    setTimeout(function() {
      document.getElementById('feedback').textContent = '';
    }, 1000);
  }
  
  // Function to end the quiz and display the final score
  function endQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('final-score').style.display = 'block';
    document.getElementById('score').textContent = score + ' / ' + questions.length;
  }
  
  // Function to restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('final-score').style.display = 'none';
    loadQuestion(); // Load the first question again
  }