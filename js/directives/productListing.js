angular.module('awesome-shop').directive('productListing', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movie: '=movie'
    },
    templateUrl: 'views/partials/productDetails.html'
  };
});
