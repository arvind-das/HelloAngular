angular.module('helloApp.services', []).factory('helloAppUserListservice', function($http) {

	  var userListAPI = [];
	  
	  userListAPI.getUsers = function() {
	      return $http({
	        method: 'GET', 
	        url: '/HelloAngular/home/list'
	      });
	    }
	    return userListAPI;
	  
  });