'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute']);

view1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
  }).when('view1/:param', {
  	templateUrl: '/view1/view1-details.html',
    controller: 'View1Ctrl'
  }).otherwise({redirectTo: '/view1'});
}]);
view1.controller('View1Ctrl', function($scope, $http, $routeParams) {
	$scope.employeeData;
	$scope.deleteUserName;
	$scope.param = $routeParams.param;

	function getEmployeeData(){	
	    $http.get("http://localhost:3000/employee")
	    .then(function(response) {
	    	$scope.employeeData = response.data;
	    });
	}
	getEmployeeData();

    $scope.deleteUser = function(){
    	if($scope.deleteUserName){
		    	for(var i = 0; i < $scope.employeeData.length; i++){
		    		if ($scope.deleteUserName == $scope.employeeData[i].firstName) {
		    				$http.delete("http://localhost:3000/employee/" + $scope.employeeData[i].id, $scope.employeeData[i]).then(function(response){
		    					getEmployeeData();
		    				},function(error){
		    					alert("delete error"+ error)
		    				});
		    				break;
		    		}
		    	}
    	} 
    	else{
    		alert("field can not be empty!")
    	} 
    };

    $scope.employeeDetails = function(id){
    	//angular.element('').location.href = 'view1/details/'+ id;
    	//$location.path( "" + id);
    }

});
