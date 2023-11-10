
let currentQuestionIndex = 0;

function startGame() {
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.querySelector('.container');
    const question = questions[currentQuestionIndex];

    if (question) {
        const optionsHTML = question.options.map(option => `<button onclick="checkAnswer('${option}')">${option}</button>`).join('');
        questionContainer.innerHTML = `
            <h1>${question.question}</h1>
            ${optionsHTML}
        `;
    } else {
        questionContainer.innerHTML = '<h1>Игра завершена. Спасибо за участие!</h1>';
    }
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (question && answer === question.correctAnswer) {
        alert('Правильный ответ!');
    } else {
        alert('Неправильный ответ. Конец игры.');
        currentQuestionIndex = questions.length; // Завершение игры после неверного ответа
    }

    currentQuestionIndex++;
    displayQuestion();
}
var questionnow = 2;
function nextquestion(){
    var question1 = document.getElementById('question1');
    var question2 =  document.getElementById('question2');
    if(questionnow==2){
        questionnow +=1;
        question1.style.visibility = 'hidden';
        question2.style.visibility = 'visible';
    }
}








function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];

    if (question && answer === question.correctAnswer) {
        alert('Правильный ответ!');
        document.querySelector(`button[data-answer="${answer}"]`).style.backgroundColor = '#4CAF50'; // Зеленый цвет
    } else {
        alert('Неправильный ответ. Конец игры.');
        currentQuestionIndex = questions.length; // Завершение игры после неверного ответа
    }

    currentQuestionIndex++;
    displayQuestion();
}
