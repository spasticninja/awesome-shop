angular.module('awesome-shop').directive('listDisplay', function(){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/partials/listDisplay.html'
  };
});
