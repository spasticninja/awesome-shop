angular.module('awesome-shop',[])
.filter('offset', function(){
  return function(input,start){
    start = parseInt(start,10);
    return input.slice(start);
  };
})
.controller('storeCtrl', ['$scope', 'inventory', function($scope, inventory){
  $scope.currentPage = 0;
  $scope.itemsPerPage = 10; //number of listings per page.

  $scope.range = function() {
    //rangeSize is the number of pages (in numerical form) displayed in the pagination.
    var rangeSize = 3; //This should be an odd number.
    var ret = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-rangeSize ) {
      start = $scope.pageCount()-rangeSize+1;
    }

    for (var i=start; i<start+rangeSize; i++) {
      ret.push(i);
    }
    return ret;
  };
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
    return Math.ceil($scope.comicList.length/$scope.itemsPerPage)-1;
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

}]);
