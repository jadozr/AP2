'use strict';

angular.module('autoPrivilegeApp')
  .controller('VehiculeDetailCtrl', function ($scope,$stateParams,$http) {

    $http.get('/api/cars/'+ $stateParams.id).success(function(car) {
      $scope.message = car;
    });

    $scope.index = 0;

    $scope.images = [
      'http://distilleryimage9.ak.instagram.com/6113581809eb11e39e3522000a9f18ab_7.jpg',
      'http://distilleryimage4.ak.instagram.com/e27029bc1d4211e3852e22000ae90903_7.jpg',
      'http://distilleryimage3.ak.instagram.com/67345d703be411e3b3da22000aa804fa_8.jpg'
    ];

    // callbacks for change in slides
    $scope.updateTsPrevious = function() {
      $scope.tsPrevious = +new Date();
    };
    $scope.updateTsNext = function() {
      $scope.tsNext = +new Date();
    };

  });
