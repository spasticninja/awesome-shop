app.controller('homeCtrl', ['$scope', 'inventory', function($scope, inventory){
  $scope.imageCarousel = [inventory[0].imgs[0],inventory[2].imgs[0],inventory[6].imgs[0],inventory[8].imgs[0],inventory[11].imgs[0]];

}]);
