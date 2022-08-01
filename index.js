const questions = [
	{
		question: "What is the capital of Poland?",
		answers: ["Prague", "Berlin", "Vilnius", "Warsaw"],
		correct: 4,
	},
	{
		question: "What is the capital of Turkey?",
		answers: [	"Istanbul","Ankara","Damascus","Baku",],
		correct: 2,
	},
	{
		question: "What is the capital of Canada?",
		answers: [	"Ottawa","Toronto","Monreal","Chicago",],
		correct:1,
	},
	{
		question: "What is the capital of Egypt?",
		answers: [	"Hurghada","Cairo","Tripoli","Baghdad",],
		correct:2,
	},
	{
		question: "What is the capital of Australia?",
		answers: ["Sydney", "Melbourne", "Aukland", "Canberra"],
		correct: 4,
	},
	{
		question: "What is the capital of Peru?",
		answers: ["La Paz", "Santa Cruz", "Lima", "Ica"],
		correct: 3,
	},
	{
		question: "What is the capital of Ukraine?",
		answers: ["Charkiv", "Minsk", "Kyiv", "Riga"],
		correct: 3,
	},
	{
		question: "What is the capital of Vietnam?",
		answers: ["Hanoi", "Da Nang", "Bangkok", "Taipei"],
		correct: 1,
	},
	{
		question: "What is the capital of Kenia?",
		answers: ["Lusaka", "Nairobi", "Juba", "Luanda"],
		correct: 2,
	},
	{
		question: "What is the capital of Nicaragua?",
		answers: ["San Jose", "Mexico", "Tocoa", "Managua"],
		correct: 4,
	},
];

const header=document.querySelector('.quiz-header');
const list=document.querySelector('.quiz-list');
const buttonSub=document.querySelector('.submit');
const progress=document.querySelector('.progress');
const progressBg=document.querySelector('.progress_bg');
let score=0;
let questionI=0;

function clearHtml(){
   header.innerHTML='';
   list.innerHTML='';
}

function showQuiz(){
   let title=`<h2 class="title">${questions[questionI]["question"]}</h2>`;
   header.innerHTML=title;

   let ansewers=questions[questionI]["answers"];
   let val=1;
   for(item of ansewers){
     let answer=`
      <li>
         <label>
            <input  value="${val}" type="radio" class="answer" name="answer" />
            <span>${item}</span>
         </label>
      </li>`; 
  list.innerHTML+=answer;
  val++;
   }
}
let width=10;
function progressBar(){
   if (width<=90){
      width+=10;
      progress.style.width=width +'%';
   }
}

function checkAnswer(){
   let selected=document.querySelector('input[type="radio"]:checked');
   if(!selected){
      buttonSub.blur();
      return
   };
  let selectedAnswer=parseInt(selected.value);
 if(selectedAnswer===questions[questionI]['correct']){
   score++
 }
 if(questionI!==questions.length-1){
   questionI++;
   clearHtml();
   progressBar();
   showQuiz();
 }else{
  clearHtml();
  results();
  progressBg.style.display='none';
 }
}

function results(){
   let message='';
   let src='';
   if ( score>=9){
      message="You have rich knowledge, you deserve a vacation in any country, choose a ticket, you definitely will not get lost!";
      src='./images/pass.jpg';
   } else if(score<9 && score>4){
      message="Your knowledge needs to be improved, take this gift and go explore the world!";
      src='./images/tent.jpg';
   }else{
      message="You have a lot to learn, this gift will help you!";
      src='./images/globe.jpg'
   }

   let  result=`<h2 class="title">Your resulst is ${score}</h2>
               <h4 class="summary">${message}</h4>
               <img src=${src} alt="img"></img>`
   header.innerHTML=result;
   buttonSub.blur();
   buttonSub.innerText="Retry";
   buttonSub.onclick=function(){
      location.reload();
   }
}

clearHtml();
showQuiz();
buttonSub.onclick=checkAnswer;