'use strict';

angular.module('autoPrivilegeApp')
  .controller('VehiculesCtrl', function ($scope,$http, $window) {
    $scope.awesomeThings = [];

    $http.get('/api/cars').success(function (awesomeThings) {
      $scope.message = awesomeThings;
    });

    // Show Car detail
    $scope.showCarDetail = function (_id) {
      $window.location = '#/vehiculeDetail/';
    };
  });
