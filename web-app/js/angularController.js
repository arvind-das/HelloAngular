angular.module('helloApp.controllers', []).controller('HomeCntrlr', function($scope,helloAppUserListservice) {

	$scope.name="arvind"
    
		$scope.userList = [];
	helloAppUserListservice.getUsers().success(function (response) {
        //Dig into the responde to get the relevant data	
        $scope.userList = response;
    });
});

routingDataApp.controller('NotificationCntrlr', function($scope) {
	$scope.name = "Yusuke Uromeshi";
	
});

routingDataApp.controller('MessageCntrlr', function($scope,userHierachyService) {
	$scope.name = "Goku";	
	$scope.childName = userHierachyService.getChildName()
});