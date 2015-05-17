angular.module('awesome-shop').service('shoppingCart', [function(){
  this.items = [];
  this.itemTotal = 0;

  this.addItem = function(item, amt){
    console.log('adding item to cart', item, this.items);
    this.items.push({
      id: item.id,
      name: item.name,
      quantity: amt,
      price: item.price
    });
    console.log(this.items);
  }

  this.total = function(){
    for(var i = 0; i < this.items.length ; i++){
      this.itemTotal += this.items[i].quantity;
    }
    console.log('cart total: ' + this.itemTotal);
  }

  this.removeItem = function(index) {
    this.items.splice(index, 1);
  }

}]);
