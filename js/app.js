'use strict';

angular.module('awesome-shop', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);
