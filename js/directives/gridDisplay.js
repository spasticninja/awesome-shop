angular.module('awesome-shop').directive('gridDisplay', function(){
  return { //grid display directive for the toggle on shop.html
    restrict: 'E',
    replace: true,
    templateUrl: 'views/partials/gridDisplay.html'
  };
});
