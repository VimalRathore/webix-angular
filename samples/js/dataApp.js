'use strict';

/* App Module */

var app = angular.module('webixApp', [ "webix" ]);

app.controller("webixTestController", function($scope){
  $scope.records = [
		{ id:1, firstName:"The Shawshank Redemption", lastName:'Singh', gender:'male', email:'vimal@gmail.com', 
		city:'Alaska', country:'America'},
		{ id:2, firstName:"The SVimal", lastName:'Rathore', gender:'female', email:'vimal123@gmail.com', 
		city:'Alaska2', country:'America3'},
		{ id:3, firstName:"The SertVimal", lastName:'Rathore3', gender:'female', email:'vimal123@gmail.com', 
		city:'Alaska2', country:'America3'},
		{ id:4, firstName:"The SertVimal", lastName:'Rathore3', gender:'female', email:'vimal123@gmail.com', 
		city:'Alaska2', country:'America3'},
		{ id:5, firstName:"The SertVimal", lastName:'Rathore3', gender:'female', email:'vimal123@gmail.com', 
		city:'Alaska2', country:'America3'},
		{ id:6, firstName:"The SertVimal6", lastName:'Rathore6', gender:'female', email:'vimal16@gmail.com', 
		city:'Alaska2', country:'America3'},
  ];

  $scope.lines = [
  	{ id:1, sales:20, year:"02"},
  	{ id:2, sales:55, year:"03"},
  	{ id:3, sales:40, year:"04"},
  	{ id:4, sales:78, year:"05"},
  	{ id:5, sales:61, year:"06"},
  	{ id:6, sales:35, year:"07"},
  	{ id:7, sales:80, year:"08"},
  	{ id:8, sales:50, year:"09"},
  	{ id:9, sales:65, year:"10"},
  	{ id:10, sales:59, year:"11"}
  ];

  $scope.addRecord = function(){
  	$scope.records.push({
  		id:'New Record',
  		firstName:'Test',
  		lastName:'Test1',
	    gender:'Male',
	    email:'vimal@gmail.com',
		city:'Bangalore',
		country:'India'
  	});
  };

  $scope.changeLine = function(type){
  	$$("mychart").define("type", type);
  	$$("mychart").render();
  };

  $scope.showDetails = function(id, details){
  	$scope.selectedId = id.row;
    $scope.eventType = details[1].type;
    $scope.nativeElement = details[2].nodeName;
    $scope.$digest();
  };

  $scope.showHeaderDetails = function(id, details){
    $scope.sortedCol = id;
    $scope.sortDir = details[1];
    $scope.sortType = details[2];
    $scope.$digest();
  };
});

