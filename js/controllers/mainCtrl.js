angular.module('awesome-shop')
.controller('mainCtrl', ['$scope', 'shoppingCart', function($scope, shoppingCart){
  $scope.shopDetails = shoppingCart;

}]);
