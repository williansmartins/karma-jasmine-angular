describe('Users factory', function() {
  var Users;
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
  var singleUser = {
    id: '3',
    name: 'Jim',
    role: 'Developer',
    location: 'Chicago',
    twitter: 'jimbo'
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_Users_) {
    Users = _Users_;
  }));

  it('should exist', function() {
    expect(Users).toBeDefined();
  });

	it('remove item', function() {
		var tamanhoInicial = Users.all().length;
		console.info(">>>" + tamanhoInicial);
    	expect(tamanhoInicial).toEqual(4);

		var tamanhoFinal = Users.delete().length;
		console.info(">>>" + tamanhoFinal);
    	expect(tamanhoFinal).toEqual(3);
  	});

  // 	it('injection', inject(function($http, $httpBackend){
  // 		var url = "http://sistema.memphisnet.com.br/barramento3/api/v1/banner";
  // 		url = "http://localhost:9876/?id=32897252";
  // 		var $scope = {};

  //   	console.info("ANTES");
    	
		//   $http.get(url).then(
		//   	function mySuccess(response) {
		// 	 	$scope.valid = true;
		//       	$scope.response = response;
  //   			console.info("SSSSSSSSS");
  //   			console.info(response.data);

	 //    	}, function myError(response) {
	 //    		$scope.valid = true;
		//       	$scope.response = response;
	 //    		console.info("EEEEEEEEEEEEEEE");
  //   			console.info(response);
	 //    });

		// $httpBackend
		// .when('GET', url)
		// .respond(200, { foo: 'bar' });
		// $httpBackend.flush();

  //   	console.info("DEPOIS");

	 //  	expect($scope.valid).toBe(true);
  // 	}));  

  	it('injection', inject(function($http, $httpBackend){
    	console.info("ANTES");
    	var $scope = {};

	  	Users.getData().then(
		  	function(response) {
			 	$scope.valid = true;
		      	$scope.response = response;
    			console.info("SSSSSSSSS");
    			console.info(response.data);

	    	}, function(response) {
	    		$scope.valid = true;
		      	$scope.response = response;
	    		console.info("EEEEEEEEEEEEEEE");
    			console.info(response);
	    });

    	console.info("DEPOIS");

	  	expect($scope.valid).toBe(true);
  	}));  	

  	// it('buscar banners na api', function(){
  	// 	Users.buscarBannerNoBarramento().then( 
  	// 		function(){
  	// 			console.info("SUCESSO");
  	// 		}, function(){
  	// 			console.info("FALHA");
  	// 		});

  	// 			console.info("FINAL >>>>>>>>>>>");
  	// 	// console.info(">>>>>>>>>" + Users.getBanners())

  	// 	// totalDebanners = Users.banners.length;
  	// 	// expect(totalDebanners).toEqual(4);
  	// });



  describe('.all()', function() {
    it('should exist', function() {
      expect(Users.all).toBeDefined();
    });

    it('should return a hard-coded list of users', function() {
      expect(Users.all()).toEqual(userList);
    });
  });

  describe('.findById()', function() {
    it('should exist', function() {
      expect(Users.findById).toBeDefined();
    });

    it('should return one user object if it exists', function() {
      expect(Users.findById('3')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
      expect(Users.findById('ABC')).not.toBeDefined();
    });
  });
});
