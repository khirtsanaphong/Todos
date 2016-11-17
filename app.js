angular.module('myApp',[] )
.service('todoService' , function () {
	var self = this

	self.contacts = [
		{ title : "Jom" , done : false},
		{ title : "Ben" , done : true}
	]

	self.list = function () {
		return self.contacts
	}

	self.add = function (contact) {
		self.contacts.push(contact)
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
			todoService.add(contact)
			reset()
		}
	}


	function reset() {
		$scope.newtodo = undefined
	}
})
