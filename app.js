var app = angular.module('quizApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'quiz.html',
            controller: 'QuizController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('QuizController', function ($scope) {
    $scope.questions = [
        {
            text: 'What is the capital of France?',
            answers: [
                { text: 'London', correct: false },
                { text: 'Paris', correct: true },
                { text: 'Berlin', correct: false }
            ]
        },
        {
            text: 'What is 2 + 2?',
            answers: [
                { text: '3', correct: false },
                { text: '4', correct: true },
                { text: '5', correct: false }
            ]
        }
    ];

    $scope.score = 0;

    $scope.checkAnswer = function (question, answer) {
        if (answer.correct) {
            $scope.score++;
        }
        question.answered = true;
    };

    $scope.resetQuiz = function () {
        $scope.questions.forEach(function (question) {
            question.answered = false;
        });
        $scope.score = 0;
    };
});
