angular.module('helloApp.controllers', []).controller('HomeCntrlr', function($scope,$http) {

	$scope.name="arvind"
    
    $http({method: 'GET', url: '/HelloAngular/home/list'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    	$scope.userdata = data;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
});
