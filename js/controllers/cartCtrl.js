angular.module('awesome-shop').controller('cartCtrl', ['$scope','shoppingCart', function($scope,shoppingCart){
  $scope.cart = shoppingCart;

  $scope.cartTotal = function(){
    var tot = 0;
    angular.forEach($scope.cart.items, function(val){
      tot += val.price * val.quantity;
    });

    return tot;
  }
}]);
