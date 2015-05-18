angular.module('awesome-shop').directive('productListing', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      product: '=product'
    },
    templateUrl: 'views/partials/productDetails.html'
  };
});
