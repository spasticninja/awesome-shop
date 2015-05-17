angular.module('awesome-shop').controller('cartCtrl', ['$scope','shoppingCart', function($scope,shoppingCart){
  $scope.cart = shoppingCart;
  console.log($scope.cart.items);

  $scope.cartTotal = function(){
    var tot = 0;
    angular.forEach($scope.cart.items, function(){
      tot += $scope.cart.items.price;
    });
    console.log(tot);
  }
}]);
