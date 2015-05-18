angular.module('awesome-shop').directive('listDisplay', function(){
  //list display directive for the toggle on shop.html
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/partials/listDisplay.html'
  };
});
