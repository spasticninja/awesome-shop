app.service('findProductByID', ['$location', 'inventory', function($location, inventory){
  this.findProduct = function(){
    //uses location to grab path and split results based on the number of '/'
    var ID = $location.path().split('/');
    var key = null;

    angular.forEach(inventory,function(pl, ind){
      if(pl.id == ID[2]){
        key = ind;
      }
    });

    return inventory[key];

  };
}]);
