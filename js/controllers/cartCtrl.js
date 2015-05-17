angular.module('awesome-shop').controller('cartCtrl', ['$scope','shoppingCart', function($scope,shoppingCart){
  $scope.cart = shoppingCart;
  console.log($scope.cart.items);
}]);
