"use strict";

// 'app.filters', 'app.services', 'app.directives'

var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "partials/home",
            controller: controllers.home
        })
        .state('add', {
            url: "/add",
            templateUrl: "partials/add",
            controller: controllers.add
        })
        .state('post', {
            url: "/post/:id",
            templateUrl: "partials/post",
            controller: controllers.post
        })
        .state('edit', {
            url: "/edit/:id",
            templateUrl: "partials/edit",
            controller: controllers.edit
        })
        .state('delete', {
            url: "/delete/:id",
            templateUrl: "partials/delete",
            controller: controllers.delete
        })

    $locationProvider.html5Mode(true);
}]);
