var app = angular.module('madLibModule');

app.controller('madLibInputs', function($scope, madLibService) {

	$scope.save = function(){
		madLibService.saveName($scope.name);
		madLibService.saveNoun1($scope.noun1);
		madLibService.saveAdjective1($scope.adjective1);
		madLibService.saveAdjective2($scope.adjective2);
		madLibService.saveNoun2($scope.noun2);
		madLibService.saveVerb1($scope.verb1);
		madLibService.saveVerb2($scope.verb2);
	};
});