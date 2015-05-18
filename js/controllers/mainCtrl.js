angular.module('awesome-shop')
.controller('mainCtrl', ['$scope', 'shoppingCart', function($scope, shoppingCart){
  //shopDetails can be accessed in the navbar section
  $scope.shopDetails = shoppingCart;

}]);
