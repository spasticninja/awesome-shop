angular.module('awesome-shop').directive('productListing', ['shoppingCart', function(shoppingCart){

  return {
    restrict: 'E',
    replace: true,
    scope: {
      product: '=shoppingCart.items.id'
    },
    templateUrl: 'views/partials/productDetails.html'
  };
}]);
