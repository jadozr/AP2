'use strict';

angular.module('autoPrivilegeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehiculeDetail', {
        url: '/vehiculeDetail',
        templateUrl: 'app/vehiculeDetail/vehiculeDetail.html',
        controller: 'VehiculeDetailCtrl'
      });
  });