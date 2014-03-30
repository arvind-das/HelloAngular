angular.module('helloApp.controllers', []).controller('HomeCntrlr', function($scope,helloAppUserListservice) {

	$scope.name="arvind"
    
		$scope.userList = [];
	helloAppUserListservice.getUsers().success(function (response) {
        //Dig into the responde to get the relevant data	
        $scope.userList = response;
    });
});
