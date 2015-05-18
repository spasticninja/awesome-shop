'use strict';

angular.module('awesome-shop', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).when('/shop', {
    templateUrl: 'views/shop.html',
    controller: 'storeCtrl'
  }).when('/product/:productID', {
    templateUrl: 'views/product.html',
    controller: 'productCtrl'
  }).when('/cart', {
    templateUrl: 'views/cart.html',
    controller: 'cartCtrl'
  }).otherwise({
    redirectTo: '/'
  });
}]);
