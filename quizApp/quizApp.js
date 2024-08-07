const questions = [
    {
        question:"Who is the main singer?",
        answers: [
            {text: "Tony", correct: false},
            {text: "Beto", correct: true},
            {text: "Fofo", correct: false},
            {text: "Abeja", correct: false}
        ]
    },
    {
        question:"When started rawayana?",
        answers: [
            {text: "2009", correct: true},
            {text: "2008", correct: false},
            {text: "2012", correct: false},
            {text: "2000", correct: false}
        ]
    },
    {
        question:"Which song is the most famous?",
        answers: [
            {text: "bikini", correct: false},
            {text: "tucacas", correct: false},
            {text: "HomeAlone", correct: false},
            {text: "high", correct: true}
        ]
    },
    {
        question:"Where rawayana from?",
        answers: [
            {text: "Mexico", correct: false},
            {text: "Chile", correct: false},
            {text: "Venezuela", correct: true},
            {text: "Colombia", correct: false}
        ]
    },{
        question:"Which vegetable iconic on rawayana?",
        answers: [
            {text: "broccoli", correct: true},
            {text: "spinach", correct: false},
            {text: "onion", correct: false},
            {text: "parsley", correct: false}
        ]
    }
];

const questionElement  =document.getElementById("question");
const answerButton  =document.getElementById("anser-buttons");
const nextButton  =document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

//quiz start function
function starQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//function show question
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let quetionNo = currentQuestionIndex +1;
    questionElement.innerHTML = quetionNo + ". " + currentQuestion.question;

    //despleagando answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//limpia repuestas
function resetState(){
    nextButton.style.display ="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

//verifica que resueusta selecciono
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//funcion score
function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

//pasar al siguiente pregunta
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//cuando se presiona el boton next
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length ){
        handleNextButton();
    }else{
        starQuiz();
    }
})


starQuiz();