angular.module('awesome-shop').controller('cartCtrl', ['$scope','shoppingCart', function($scope,shoppingCart){
  $scope.cart = shoppingCart;
  //cart controller. It allows us to access the functions in the shoppingCart service.
}]);
