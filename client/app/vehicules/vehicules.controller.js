'use strict';

angular.module('autoPrivilegeApp')
  .controller('VehiculesCtrl', function ($scope,$http, $state) {
    $scope.awesomeThings = [];

    $http.get('/api/cars').success(function (awesomeThings) {
      $scope.message = awesomeThings;
    });

    // Show Car detail
    $scope.showCarDetail = function (_id) {
      $state.go('vehiculeDetail', {id: _id});
    };
  });
