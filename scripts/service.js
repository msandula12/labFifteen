var app = angular.module('madLibModule');

app.factory('madLibService', function() {
	var nameInput;
	var noun1Input;
	var adjective1Input;
	var adjective2Input;
	var noun2Input;
	var verb1Input;
	var verb2Input;

	return {
		saveName: function(name){
			nameInput = name;
		},
		getName: function(){
			return nameInput;
		},
		saveNoun1: function(noun1){
			noun1Input = noun1;
		},
		getNoun1: function(){
			return noun1Input;
		},
		saveAdjective1: function(adjective1){
			adjective1Input = adjective1;
		},
		getAdjective1: function(){
			return adjective1Input;
		},
		saveAdjective2: function(adjective2){
			adjective2Input = adjective2;
		},
		getAdjective2: function(){
			return adjective2Input;
		},
		saveNoun2: function(noun2){
			noun2Input = noun2;
		},
		getNoun2: function(){
			return noun2Input;
		},
		saveVerb1: function(verb1){
			verb1Input = verb1;
		},
		getVerb1: function(){
			return verb1Input;
		},
		saveVerb2: function(verb2){
			verb2Input = verb2;
		},
		getVerb2: function(){
			return verb2Input;
		}
	};
});