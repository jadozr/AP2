'use strict';

angular.module('autoPrivilegeApp')
  .controller('VehiculeDetailCtrl', function ($scope,$stateParams,$http) {
    $http.get('/api/cars/'+ $stateParams.id).success(function(car) {
      $scope.message = car;
    });
  });
