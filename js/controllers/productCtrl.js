angular.module('awesome-shop')
.controller('productCtrl', ['$scope','findProductByID', function($scope, findProductByID){
  $scope.productItem = findProductByID.findProduct();

  console.log($scope.productItem);

}]);
