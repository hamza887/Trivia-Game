const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let questions = [
    {
    
    question: "Who invented JavaScript?",
    answer: "Brendan Eich",
    options: [
      "Douglas Crockford",
      "Brendan Eich",
      "Sheryl Sandberg",
      "Bills Gates"
    ]
  },
    {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    question: "Which one of these is a JavaScript package manager?",
    answer: "npm",
    options: [
      "TypeScript",
      "Node.js",
      "npm",
      "ALG"
    ]
  },
    {
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  };
  //u gotta add event listener for the stuff and then you have to add the stuff in htere
//add a function with startgame
//add a function eith next question
//i think we have to add the array where you have to add all the wuestions for me \
//i think have to add the questions 