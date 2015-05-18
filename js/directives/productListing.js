angular.module('awesome-shop').directive('productListing', function(){
  //directive to allow product pages. Products have a unique ID (aka SKU) so they can have their own unique page
  return {
    restrict: 'E',
    replace: true,
    scope: {
      product: '=product'
    },
    templateUrl: 'views/partials/productDetails.html'
  };
});
