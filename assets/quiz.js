//creating variables to store and show data
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click', showResults);

// create questions for quiz
const questions = [
    {
        question: "Which of these is used to set a variable that doesn't change",
        answers: {
            a: "let",
            b: "const",
            c: "var"
        },
        correctAnswer: "b"
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },


]