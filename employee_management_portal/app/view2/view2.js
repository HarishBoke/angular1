'use strict';
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $http) {
		 var postEmployeeData = {
              "id": "",
		      "firstName": "",
		      "lastName": "",
		      "salary": "",
		      "department": "",
		      "designation": "",
		      "address": "",
		      "telephone": ""
		  }
        
		$scope.employeeData = [];
		$scope.employeeData.firstName = "";
		$scope.employeeData.lastName = "";
		$scope.employeeData.salary = "";
		$scope.employeeData.department = "";
		$scope.employeeData.designation = "";
		$scope.employeeData.address = "";
		$scope.employeeData.telephone = "";

		$scope.assignData = function(){
			postEmployeeData.firstName	=			$scope.employeeData.firstName;
			postEmployeeData.lastName	=			$scope.employeeData.lastName;
			postEmployeeData.salary		=			$scope.employeeData.salary;
			postEmployeeData.department	=			$scope.employeeData.department;
			postEmployeeData.designation	=			$scope.employeeData.designation;
			postEmployeeData.address		=			$scope.employeeData.address;
			postEmployeeData.telephone	=			$scope.employeeData.telephone;
			console.log(postEmployeeData);
			return postEmployeeData;
		}
		$scope.addUser = function(){
			if ($scope.employeeData.firstName) {
				$http.post("http://localhost:3000/employee", $scope.assignData()).success(function(data, status) {
	           	// $scope.hello = data;
						alert('User successfully Added!');
	        	});
			}else{
				alert("FirstName field can not be empty!");
			}
				
			    
		}
});