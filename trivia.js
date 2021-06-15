

const question= document.querySelector('.question');
const option1= document.querySelector('#option1'); 

const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const quizDB=[
  {
    question: " Q1: Who invented JavaScript?",
    a: 'Douglas Crockford',
    b: 'Brendan Eich',
    c: 'Sheryl Sandberg',
    d: "Bills Gates",
    ans: 'ans2'
  },
  {
    question:'Q2 : What does CSS stand for?',
    a: 'Cascading Style Sheet',
    b: 'ColorFul Style Sheet',
    c: 'Esin Style Sheet',
    d:"Common Style Sheet",
    ans: 'ans1'
  },
  {
    question:'Q3 : Which one of these are a Javascript package Manager?',
    a: 'TypeScript',
    b: 'Node.js',
    c: 'npm',
    d:"COD",
    ans: 'ans3'
  },
  {
    question:'Q4 : What does SQL stand for?',
    a: "Stylish Question Language",
     b: "Stylesheet Query Language",
     c: "Statement Question Language",
     d: "Structured Query Language",
    ans: 'ans4'
  },
  {
    question:'Q5 : Who is your fav Instructor in General Asembly?',
    a: 'Esin Saribudak',
    b: 'Madeline O Moore',
    c: 'Doug Leinen',
    d:"Mathilda",
    ans: 'ans1'
  },
]

 const startButton=document.getElementById('startbutton');
 startButton.addEventListener('click',()=>{
        const startthegame=document.getElementById('startme');
        startthegame.innerHTML=`<h2> Lets Start the Game Down there </h2>`
        startthegame.style.color='red'
 })

const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
console.log(showscore);

let questioncount=0;
let score=0;


const loadQuestion=()=>{
    const questionlist= quizDB[questioncount]
   question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
   
}
loadQuestion();

 const getcheckanswer=()=>{
    let answer;
    answers.forEach((curentansele)=>{
       if(curentansele.checked){
         answer=curentansele.id
       }
    });
    return answer;

 }

 submit.addEventListener('click',()=>{
  const checkedanswer= getcheckanswer();
  console.log(checkedanswer);

  if(checkedanswer===quizDB[questioncount].ans){
    score++;
  };
  questioncount++;
  if(questioncount<quizDB.length){
    loadQuestion();
  }else{
    gameOver();
  }
   
     const scoredisplay=document.getElementById('scoredisplay');
 scoredisplay.innerHTML=`Your Score is ${score}`;
  
})

const gameOver=()=>{
   let winconditon;
   if(score>3){
     winconditon="YOU WIN";
     showscore.style.color='green'
   }else{
     winconditon="YOU LOSE";
     showscore.style.color='red';
   }
   showscore.innerHTML=`
   <h3> You Scored ${score}/${quizDB.length} </h3>
   <h1 > ${winconditon} </h1>
   <button class='btn btn-primary' onclick="location.reload()"> Play Again</button>
   `
   
}


