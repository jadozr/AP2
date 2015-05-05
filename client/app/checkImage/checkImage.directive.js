'use strict';

angular.module('autoPrivilegeApp')
  .directive('checkImage', function ($http) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        attrs.$observe('ngSrc', function (ngSrc) {
          $http.get(ngSrc).success(function () {
          }).error(function () {
            element.attr('src', '../images/no_pic_available.png'); // set default image
          });
        });
      }
    };
  });
