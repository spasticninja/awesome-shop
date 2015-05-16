'use strict';

var myApp = angular.module('awesome-shop',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html', //homepage
    //controller: 'homeCtrl'
  });
}]);
