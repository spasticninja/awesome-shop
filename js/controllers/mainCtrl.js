angular.module('awesome-shop')
.controller('mainCtrl', ['$scope', 'shoppingCart', function($scope, shoppingCart){
  //shopDetails can be accessed in the navbar section
  $scope.shopDetails = shoppingCart;

  //main controller allows us to have a count of the number of items in the cart. 
}]);
