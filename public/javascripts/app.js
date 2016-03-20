var app = angular.module('yardApp', []);


app.controller('mainController', function($http){
  var yardSale = this;
  yardSale.products = [];

  yardSale.login = function(){
    yardSale.loggedIn = true;

    $http({
      method: "POST",
      url: "/user",
      data: { username:yardSale.username }
    }).then(function(result){
      console.log(result.data);
      yardSale.userId = result.data._id;
      yardSale.userId = result.data.username;
    });

  };

  yardSale.addProduct = function(){
    yardSale.products.push(yardSale.item);
    yardSale.item = {};
  };
});
