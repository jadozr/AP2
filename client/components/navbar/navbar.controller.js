'use strict';

angular.module('autoPrivilegeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Accueil',
      'link': '/'
    },{
      title : "Véhicules",
      link : "/vehicules"
    }, {
      title : "Contact",
      link : "contact"
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
