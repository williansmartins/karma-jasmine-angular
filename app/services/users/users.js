(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('Users', function($http) {
    var banners = "quantidade inicial";
    var url = "http://sistema.memphisnet.com.br/barramento3/api/v1/banner";
    var Users = {};
    var userList = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
      },
      {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
      }
    ];

    Users.all = function() {
      return userList;
    };

    Users.delete = function(){
		userList.pop();
		return userList;
    }

    Users.getBanners = function(){
		return banners;
    }

 	Users.getData = function () {
        var result = $http.get(url);

        console.info(result);
        return result; //deferrer
    };

    Users.buscarBannerNoBarramento = function(){
		alert("antes de fazer o request");

		return $http({
	        method : "GET",
	        url : url
	    }).then(function mySuccess(response) {
			alert("SSSSSSSS");
	    	console.info("SSSSSSSSS");
	        banners = response.data;
	    }, function myError(response) {
	    	console.info("EEEEEEEEEEEEEEE");
	    	alert("EEEEEEEEEEEEEEE");
	        banners = response.statusText;
	    });
    }

    Users.findById = function(id) {
      return userList.find(function(user) {
        return user.id === id;
      });
    };

    return Users;
  });
})();
