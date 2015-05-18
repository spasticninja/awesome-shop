app.controller('productCtrl', ['$scope','shoppingCart','findProductByID',function($scope, shoppingCart, findProductByID){
  //product page controller

  //finds the product's information and gets inventory information
  $scope.productItem = findProductByID.findProduct();
  $scope.productCart = shoppingCart;

}]);
