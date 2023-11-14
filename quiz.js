const questions=[
    {
        question: "what is fullform of pdf ?",
        answers:[
            {text:"portable document file",correct:false},
            {text:"portable document format",correct:true},
            {text:"pictured document file",correct:false},
            {text:"personalised document format",correct:false},

        ]

    },
    {
        question: "what is fullform of RBI ?",
        answers:[
            {text:"RIVER BANK OF INDIA",correct:false},
            {text:"REVERSE BANK OF INDIA",correct:false},
            {text:"RESERVE BANK OF INDIA",correct:true},
            {text:"REST BANK OF INDIA",correct:false},

        ]

    },
    {
        question: "when is my birth day  ?",
        answers:[
            {text:"22sept",correct:false},
            {text:"25dec vese to christmas h is din ",correct:false},
            {text:"22 nov mere kartik aaryan ka bday h",correct:false},
            {text:"one and onlyy 23 nov",correct:true},

        ]
    },
    {
        question: "world cup kon jeetega  ?",
        answers:[
            {text:"south africa",correct:false},
            {text:"pakistan kher ye to vapis haar gye",correct:false},
            {text:"nz k semi ka dar h",correct:false},
            {text:"definitely India",correct:true},

        ]
    },
    {
        question: "AAYEINN?",
        answers:[
            {text:"GOBHI",correct:false},
            {text:"BRINJAL",correct:false},
            {text:"PALAKKK ",correct:false},
            {text:"BAINGANN ",correct:true},

        ]
    }
];

const questionElement =document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
           button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}
 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }


 }
 function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

   }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct =="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display ="block";
 }
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";

}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


 nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 });

startQuiz();


