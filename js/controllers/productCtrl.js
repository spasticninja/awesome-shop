app.controller('productCtrl', ['$scope','shoppingCart','findProductByID',function($scope, shoppingCart, findProductByID){
  $scope.productItem = findProductByID.findProduct();
  $scope.productCart = shoppingCart;

}]);
