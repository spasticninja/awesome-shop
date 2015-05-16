'use strict';

angular.module('awesome-shop', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'views/home.html', //Direct to homepage
      controller: 'homeCtrl'
    }).
    otherwise({
      redirectTo: '/' //redirect to home page if something goes wrong
    });
}]);
