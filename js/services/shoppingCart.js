angular.module('awesome-shop').service('shoppingCart', [function(){
  this.items =[];
  this.newCart = [];

  this.addItem = function(item, amt){
    console.log('adding item to cart', item, this.items);
    var itemExists = false;
    var key = 0;

    angular.forEach(this.items,function(it, index){
      if(it.id == item.id){
        itemExists = true;
      }else{
        key = index;
        console.log(key)
      }
    });

    if(itemExists){
      this.items[key].quantity += amt;
    } else{
      this.items.push({
        id: item.id,
        name: item.name,
        quantity: amt,
        price: item.price
      });
    }
  }

  this.cartTotal = function(){
    var tot = 0;
    angular.forEach(this.items, function(val){
      tot += val.price * val.quantity;
    });

    return tot;
  }

  this.removeItem = function(index) {
    this.items.splice(index, 1);
  }

  this.emptyCart = function(){
    this.items = this.newCart;
  }

}]);
