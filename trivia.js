
  //u gotta add event listener for the stuff and then you have to add the stuff in htere
//add a function with startgame
//add a function eith next question
//i think we have to add the array where you have to add all the wuestions for me \
//i think have to add the questions 

const question= document.querySelector('.question');
const option1= document.querySelector('#option1'); 

const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

// console.log(question);
// console.log(option3);
// console.log(submit)

const quizDB=[
  {
    question:'hello how are you ',
    a: 'hello',
    b: 'dkhfldkhf',
    c: 'dhjdd',
    ans: 'ans4'
  },
  {
    question:'this is second question ',
    a: 'hello',
    b: 'dkhfldkhf',
    c: 'dhjdd',
    ans: 'ans1'
  },
]

let questioncount=0;


const loadQuestion=()=>{
     // console.log(quizDB[0].question);

    const questionlist= quizDB[questioncount]
   question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
   
}
loadQuestion();