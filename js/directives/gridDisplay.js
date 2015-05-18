angular.module('awesome-shop').directive('gridDisplay', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/partials/gridDisplay.html'
  };
});
