var app = angular.module('madLibModule');

app.controller('madLibDisplay', function($scope, madLibService) {
	$scope.displayName = madLibService.getName();
	$scope.displayNoun1 = madLibService.getNoun1();
	$scope.displayAdjective1 = madLibService.getAdjective1();
	$scope.displayAdjective2 = madLibService.getAdjective2();
	$scope.displayNoun2 = madLibService.getNoun2();
	$scope.displayVerb1 = madLibService.getVerb1();
	$scope.displayVerb2 = madLibService.getVerb2();
});