var yardSale = angular.module('yardApp', []);


yardSale.controller('mainController', function($scope){

  $scope.products = [];

  $scope.addProduct = function(){
    $scope.products.push($scope.item);
    $scope.item = {};
  }

});
