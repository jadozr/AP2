'use strict';

angular.module('autoPrivilegeApp', [
  'ngCookies',
  'ngResource',
  'ngAnimate',
  'ngTable',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'uiGmapgoogle-maps'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    window.angular
    $locationProvider.html5Mode(true);
  });
