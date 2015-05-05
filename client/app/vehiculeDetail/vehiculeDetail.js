'use strict';

angular.module('autoPrivilegeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculeDetail', {
        url: '/vehiculeDetail/{id}',
        templateUrl: 'app/vehiculeDetail/vehiculeDetail.html',
        controller: 'VehiculeDetailCtrl'
      });
  });
