angular.module('myApp',[] )
.service('todoService' , function () {
	var self = this

	self.contacts = [
		{ title : "Eark" , done : false},
		{ title : "Beer" , done : true}
	]

	self.list = function () {
		return self.contacts
	}

	self.add = function (contact) {
		self.contacts.push(contact)
	}
	self.remove = function (contacts){
		self.contacts.delete(contact)
	}
})
.controller('listTodo' , function ($scope , todoService){
	$scope.contacts = todoService.list()
})
.controller('addTodo' , function ($scope , todoService){
	$scope.save = function () {
	if ( $scope.newtodo != undefined && $scope.newtodo != ""){
			var contact = {
				title : $scope.newtodo,
				done : false
			}
			console.log($scope.newtodo)
			todoService.add(contact)
			reset()
		}
	}
	$scope.remove = function (){
	if ( $scope.newtodo != undefined && $scope.newtodo != ""){
			var contact = {
				title : $scope.newtodo
			}
			console.log($scope.newtodo)
			todoService.remove(contact)
			reset()
		}
	}

	function reset() {
		$scope.newtodo = undefined
	}
})
