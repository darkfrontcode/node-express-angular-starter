"use strict";

var app = angular.module('app', ['app.filters', 'app.services', 'app.directives']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home',
            controller: index
        }).
        when('/add', {
            templateUrl: 'partials/add',
            controller: add
        }).
        when('/post/:id', {
            templateUrl: 'partials/post',
            controller: post
        }).
        when('/edit/:id', {
            templateUrl: 'partials/edit',
            controller: edit
        }).
        when('/delete/:id', {
            templateUrl: 'partials/delete',
            controller: delete
        }).
        otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
}]);



// var app = angular.module('app', ['ui.router']);
//
//     app.constant('version', 1.2);
//
//     app.config(function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//             .state('home', {
//                 url: "/",
//                 templateUrl: "views/home.html",
//                 controller: "home"
//             })
//             .state('info', {
//                 url: "/info",
//                 templateUrl: "views/info.html",
//                 controller: "info"
//             });
//     });
//
//     app.controller('home', ['$scope', function($scope){
//         $scope.state = {
//             title: "Welcom to the home page.",
//             description: function(){ return "home description" }
//         }
//     }]);
//
//     app.controller('info', ['$scope', function($scope){
//         $scope.state = {
//             title: "Welcom to the info page.",
//             description: function(){ return "info description" }
//         }
//     }]);
