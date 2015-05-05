'use strict';

angular.module('autoPrivilegeApp')
  .controller('VehiculesCtrl', function ($scope, $q, $http, $state, $filter, ngTableParams) {
    $scope.awesomeThings = [];

    var qDocs = $q.defer();
    qDocs.resolve($http.get('/api/cars').success(function (awesomeThings) {
      $scope.message = awesomeThings;
      $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 12           // count per page
      }, {
        total: qDocs.length, // length of data
        getData: function ($defer, params) {
          qDocs.promise.then(function (result) {
            // use build-in angular filter
            var orderedData = params.sorting ?
              $filter('orderBy')(result.data, params.orderBy()) :
              result.data;
            orderedData = params.filter ?
              $filter('filter')(orderedData, params.filter()) :
              orderedData;
            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
            $scope.totalsCars = orderedData.length;
            if (orderedData.slice(0, 3).length === 1) {
              $scope.colonne1 = true;
            } else {
              $scope.colonne1 = false;
            }
            if (orderedData.slice(0, 3).length === 2) {
              $scope.colonne2 = true;
            } else {
              $scope.colonn2 = false;
            }
            $defer.resolve($scope.users);
          });
        }
      });
    }));

    var inArray = Array.prototype.indexOf ?
      function (val, arr) {
        return arr.indexOf(val);
      } :
      function (val, arr) {
        var i = arr.length;
        while (i--) {
          if (arr[i] === val) {
            return i;
          }
        }
        return -1;
      };

    $scope.names = function (column) {
      var def = $q.defer(),
        arr = [],
        names = [];
      qDocs.promise.then(function (result) {
        angular.forEach(result.data, function (item) {
          if (inArray(item.Marque, arr) === -1) {
            arr.push(item.Marque);
            names.push({
              'id': item.Marque,
              'title': item.Marque
            });
          }
        });
      });
      def.resolve(names);
      return def;
    };

    $scope.getSrc = function (photos) {
      if (photos) {
        return photos.split('|')[0];
      } else {
        return '../photos/noPic.png';
      }
    };

    // Show Car detail
    $scope.showCarDetail = function (_id) {
      $state.go('vehiculeDetail', {id: _id});
    };

  });
