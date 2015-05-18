angular.module('awesome-shop')
.filter('offset', function(){
  //pagination filter
  return function(input,start){
    start = parseInt(start,10);
    return input.slice(start);
  };
})
.filter('search', function(){
  //search filter
  return function(input,searchStore){
    if(!searchStore){
      return input;
    }else{
      var result = [];
      searchStore = searchStore.toLowerCase();

      angular.forEach(input, function(it){
        if(it.name.toLowerCase().indexOf(searchStore) !== -1){
          result.push(it);
        }
      });
      return result;
    }
  }

})
.controller('storeCtrl', ['$scope', 'inventory', 'shoppingCart', function($scope, inventory, shoppingCart){
  $scope.inventory = inventory;
  $scope.cart = shoppingCart;
  $scope.currentPage = 0;
  $scope.itemsPerPage = 10; //number of listings per page.

  //pagination
  $scope.prevPage = function(){
    if($scope.currentPage > 0){
      $scope.currentPage--;
    }
  };
  $scope.firstPage = function(){
    if($scope.currentPage > 0){
      $scope.currentPage=0;
    }
  };
  $scope.prevPageDisabled = function(){
    return $scope.currentPage === 0 ? "disabled":" ";
  };
  $scope.pageCount = function(){
    return Math.ceil($scope.inventory.length / $scope.itemsPerPage)-1;
  };
  $scope.nextPage = function(){
    if($scope.currentPage < $scope.pageCount()){
      $scope.currentPage++;
    }
  };
  $scope.lastPage = function(){
    if($scope.currentPage < $scope.pageCount()){
      $scope.currentPage = $scope.pageCount();
    }
  };
  $scope.nextPageDisabled = function(){
    return $scope.currentPage === $scope.pageCount() ? "disabled":" ";
  };
  $scope.setPage = function(set){
    $scope.currentPage = set;
  };

  //list vs gridview
  $scope.view = 1;
  $scope.selectView = function(setView){
    $scope.view = setView;
  };
  $scope.isSelected = function(checkView){
    return $scope.view === checkView;
  };

}]);
