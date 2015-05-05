'use strict';

angular.module('autoPrivilegeApp', [
  'ngCookies',
  'ngResource',
  'ngAnimate',
  'ngTable',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'uiGmapgoogle-maps'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
