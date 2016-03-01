var app = angular.module('madLibModule', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/input.html',
		controller: 'madLibInputs'
	})
	.when('/views/display', {
		templateUrl: 'views/display.html',
		controller: 'madLibDisplay'
	})
	.otherwise({ redirectTo: '/' });
});