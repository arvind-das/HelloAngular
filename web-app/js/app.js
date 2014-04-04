angular.module('helloApp', ['helloApp.controllers','helloApp.services']);


var routingDataApp = angular.module('routingDataApp', ['ngRoute','routingDataAppServices'])
.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/',{
	templateUrl: '/partials/home.html',
    controller: 'NotificationCntrlr'
}).when('/routing',{
	templateUrl: '/partials/home.html',
    controller: 'MessageCntrlr'
}).when('/home',{
	templateUrl: '/partials/user.html',
    controller: 'MessageCntrlr'
});
	
}])

