(function() {

  'use strict';
	
	var controllers = angular.module('AppControllers', ['AppServices']);

  // instantiate new controller with controllers module
  controllers.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = "Hello, AngularJS!";
    $scope.input = null;
  }]);

})();
