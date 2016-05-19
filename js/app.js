"use strict";

var app = angular.module('app', ['ui.router']);

    app.constant('version', 1.2);

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state('info', {
                url: "/info",
                templateUrl: "views/info.html",
                controller: "info"
            });
    });

    app.controller('home', ['$scope', function($scope){
        $scope.state = {
            title: "Welcom to the home page.",
            description: function(){ return "home description" }
        }
    }]);

    app.controller('info', ['$scope', function($scope){
        $scope.state = {
            title: "Welcom to the info page.",
            description: function(){ return "info description" }
        }
    }]);
