angular.module('helloApp.services', []).service('helloAppUserListservice', function($http) {

	  var userListAPI = [];
	  
	  userListAPI.getUsers = function() {
	      return $http({
	        method: 'GET', 
	        url: '/HelloAngular/home/list'
	      });
	    }
	    return userListAPI;
  });

angular.module('routingDataAppServices', []).service('userHierachyService', function() {
var childName = {};

childName.getChildName = function(){
	return "Gohan"; 
}
return childName;
});