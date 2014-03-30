angular.module('helloApp.services', []).
  factory('helloAppUserListservice', function($http) {

	  
	  var userListAPI = {};

	  userListAPI.getUsers = function(){
	  
	  $http({method: 'GET', url: '/HelloAngular/home/list'}).
	    success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	    	return data;
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	    }
	  return userListAPI;
  });