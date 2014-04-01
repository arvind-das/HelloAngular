<!DOCTYPE html>
<html>
<head>
<g:javascript src="jquery-2.1.0.min.js" />
<g:javascript src="angular.js" />
<g:javascript src="angular-route.js" />
<g:javascript src="app.js" />
<g:javascript src="angularServices.js" />
<g:javascript src="angularController.js" />
</head>
<body>

<div ng-app="helloApp" ng-controller="HomeCntrlr">
{{name}} {{nick}}
<div id="userata" ng-repeat="user in userList">
<tr>
<td>
{{$index + 1}}
</td>
<td>
name : {{user.name}}
</td>
<td>
nick : {{user.nick}}
</td>
</tr>
</div>
</div>



</body>

</html>
