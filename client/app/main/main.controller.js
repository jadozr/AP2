'use strict';

angular.module('autoPrivilegeApp')
  .controller('MainCtrl', function ($scope, $http) {


    $scope.map = {center: {latitude: 47.300014, longitude: -1.750570}, zoom: 14};
    $scope.options = {scrollwheel: false};
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 47.300014,
        longitude: -1.750570
      },
      options: {draggable: true, animation: 1},
      events: {
        dragend: function (marker) {
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $scope.marker = {
            'id': 1,
            'latitude': $scope.marker.coords.latitude,
            'longitude': $scope.marker.coords.longitude,
            animation: 1,
            'showWindow': true
          };
          $scope.marker.options = {
            animation: 1,
            draggable: false,
            labelContent: 'lat: ' + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: '100 0',
            labelClass: 'marker-labels'
          };
        }
      }
    };

    $scope.awesomeThings = [];

    $http.get('/api/cars').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/cars', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/cars/' + thing._id);
    };
  });
