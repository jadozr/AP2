'use strict';

angular.module('autoPrivilegeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vehicules', {
        url: '/vehicules',
        templateUrl: 'app/vehicules/vehicules.html',
        controller: 'VehiculesCtrl'
      });
  });