var app = angular.module('authApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'SignupController'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'DashboardController',
            resolve: {
                auth: function ($q, $location, AuthService) {
                    var deferred = $q.defer();
                    if (AuthService.isAuthenticated()) {
                        deferred.resolve();
                    } else {
                        deferred.reject();
                        $location.path('/');
                    }
                    return deferred.promise;
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('LoginController', function ($scope, $location, AuthService) {
    $scope.login = function () {
        // Implement login logic here
        if (AuthService.login($scope.username, $scope.password)) {
            $location.path('/dashboard');
        } else {
            alert('Invalid credentials');
        }
    };
});

app.controller('SignupController', function ($scope, $location, AuthService) {
    $scope.signup = function () {
        // Implement signup logic here
        AuthService.signup($scope.username, $scope.password);
        $location.path('/');
    };
});

app.controller('DashboardController', function ($scope, AuthService) {
    $scope.username = AuthService.getUsername();
});

app.service('AuthService', function () {
    var isAuthenticated = false;
    var username = '';

    return {
        login: function (user, pass) {
            // Mock authentication, replace with real logic
            if (user === 'user' && pass === 'password') {
                isAuthenticated = true;
                username = user;
                return true;
            }
            return false;
        },
        signup: function (user, pass) {
            // Mock signup logic, replace with real logic
            // Here you can store the user data in your backend or localStorage
            console.log('Signed up:', user);
        },
        isAuthenticated: function () {
            return isAuthenticated;
        },
        getUsername: function () {
            return username;
        }
    };
});
