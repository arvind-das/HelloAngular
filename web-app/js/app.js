angular.module('helloApp', ['helloApp.controllers','helloApp.services']);

var routingDataApp = angular.module('routingDataApp', ['ngRoute'])
.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/',{
	templateUrl: '/HelloAngular/partials/home.html',
    controller: 'NotificationCntrlr'
}).when('/routing',{
	templateUrl: '/HelloAngular/partials/home.html',
    controller: 'NotificationCntrlr'
}).when('/home',{
	templateUrl: '/HelloAngular/partials/home.html',
    controller: 'NotificationCntrlr'
});;
	
}])

