angular.module('awesome-store').factory('shoppingCart', ['inventory', function(inventory){
  var myStore = inventory;
  var myCart = new shoppingCart('awesome-store');
  return {
    store: myStore,
    cart: myCart
  };
}]);
