angular.module('awesome-shop').service('shoppingCart', [function(){
  this.items =[];
  this.newCart = []; //an empty cart for clearing the cart

  //adds item to cart
  this.addItem = function(item, amt){
    var itemExists = false;
    var key = 0;

    //checks to see if an item is already in the shopping cart
    angular.forEach(this.items,function(it, index){
      if(it.id == item.id){
        //records key information if item does exist
        itemExists = true;
        key = index;
      }
    });

    //if item exists just change amount, if not, push item into array
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

  //checks cart total
  this.cartTotal = function(){
    var tot = 0;
    angular.forEach(this.items, function(val){
      tot += val.price * val.quantity;
    });

    return tot;
  }

  //removes item from cart
  this.removeItem = function(index) {
    this.items.splice(index, 1);
  }

  //empties cart
  this.emptyCart = function(){
    this.items = this.newCart;
  }

  //counts all the items in the cart via quantity
  this.totalItems = function(){
    var tItems = 0;

    angular.forEach(this.items, function(count){
      tItems += count.quantity;
    })

    return tItems;
  }


}]);
