let startQuizbtn = document.querySelector('.start-quiz-btn');
let container = document.querySelector('.container');
let question = document.querySelector('.ques-text');
let option_list = document.querySelector('.option-div');
let time_line = document.querySelector('.time_line');
let timeCount = document.querySelector('.time-left');
let next_ques_btn = document.querySelector('.next-ques-btn');
let topQuestionCounting = document.querySelector('.question-counter');
const result = document.querySelector('.replay-quiz-btn');

let correctIcon = ' <div class="icon correct-icon><i class="fa-solid fa-xmark"></i></div>';
let incorrectIcon = ' <div class="icon wrong-icon><i class="fa-solid fa-xmark"></i></div>';

let question_count = 0;

let ques_number =1;
let timeValue = 15;
let widthValue = 0;
let score = 0;
 let count;
 let countLine;


 startQuizbtn.addEventListener('click', () =>{
    container.style.display = 'block';
    showQuestions(0);
    QuestionCounter(1);
    timerStart(15);
    timerLine(0);
    startQuizbtn.style.display = 'none';
 });


 next_ques_btn.onclick = () =>{
    if(question_count < questions.length -1){
     question_count++;
     ques_number++;
     showQuestions(question_count);
     QuestionCounter(ques_number);
     clearInterval(count);
     timerStart(timeValue);
     clearInterval(countLine);
     timerLine(widthValue);
     next_ques_btn.classList.add('click-disable');
    }else{
        console.log('Quiz Completo')
        showResult();
    }
    };

function showQuestions(index){
    let question_tag = `<span>`+questions[index].number + ", " +
    questions[index].question+`<\span>`;
    let option_tag = `<div class="option"><span>`+questions[index].options[0]+`</span>
    </div>`+
            `<div class="option"><span>`+questions[index].options[2]+`</span>
    </div>`+ `<div class="option"><span>`+questions[index].options[3]+`</span>
    </div>`;
    question.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll('.option');
    for(let i=0;i<option.length;i++){
        option[i].setAttribute('onclick', 'optionSelect(this)');
    }
}

function optionSelect(answer){
clearInterval(count);
clearInterval(countLine);
const user_answer = answer.textContent;
let correctAns = questions[question_count].answer;
let Alloption = option_list.children.length;
if(user_answer = correctAns){
    score += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", correctIcon);
}else{
answer.classList.add("incorrect");
answer.insertAdjacentHTML("beforeend", incorrectIcon);
for (i=0;i<Alloption;i++){
if(option_list.children[i].textContent = correctAns){
    option_list.children[i].setAttribute("class", "option correct");
    option_list.children[i].insertAdjacentHTML("beforeend", correctIcon);
}
}
}

for(let i=0;i < Alloption;i++){
    option_list.children[i].classList.add('disabled');
}
next_ques_btn.classList.remove('click-disable');
};


function QuestionCounter(index){
    let totalQuesCount = `<span>`+index+`<span> of </span>
    <span>`+questions.length+`</span> Question</span>`;
    topQuestionCounting.innerHTML = topQuesCount; 
};

