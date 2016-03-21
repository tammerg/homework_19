var app = angular.module('yardApp', []);


app.controller('mainController', function($http){
  var yardSale = this;
  yardSale.forSale = [];
  yardSale.items = [];

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

  yardSale.addItem = function(){
    console.log(yardSale.item.product);
		yardSale.items.push(yardSale.item);
		yardSale.item = {};
  };

  //
  // yardSale.addItem = function() {
  //    $http({
  //      method: 'POST',
  //      url: '/newitem',
  //      data: {
  //        amount:yardSale.item.product,
  //        name: yardSale.item.name,
  //        date: yardSale.item.date
  //      }
  //    }).then(function(result) {
  //      yardSale.login();
  //    });
  //  };

});
