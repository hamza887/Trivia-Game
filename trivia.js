

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

const answers=document.querySelectorAll('.answer');
//console.log(answers);

let questioncount=0;
let score=0;


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

  if(checkedanswer===quizDB[quetioncount].ans){
    score++;
  };
  questioncount++;
  if(quetsioncount<quizDB.length){
    loadQuestion();
  }
})
