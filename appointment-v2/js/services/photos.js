app.factory('photos',['$http', function($http){
	return $http({
		method: 'GET',
		url:'http://52.86.144.65/api/v1/public/physicians/2'	
	})
	.success(function(data){
		return data;
	})
	.error(function(data){
		return data;
	});
}]);