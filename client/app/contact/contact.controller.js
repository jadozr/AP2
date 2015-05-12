'use strict';

angular.module('autoPrivilegeApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.sampledata = [
      {"firstName":"Curly",
        "lastName":"Howard",
        "address":"4524 Fulton Avenue",
        "city":"Van Nuys",
        "state":"CA",
        "phone":"555-555-1111",
        "email":"curly@3stooges.com",
        "zip":91401	},
      { "firstName":"Moe",
        "lastName":"Howard",
        "address":"9061 Thrasher Avenue",
        "city":"Los Angeles",
        "state":"CA",
        "phone":"555-555-3333",
        "email":"moe@3stooges.com",
        "zip":91555 },
      {"firstName":"Larry",
        "lastName":"Fine",
        "address":"Knickerbocker Hotel",
        "city":"Hollywood",
        "state":"CA",
        "phone":"555-555-2222",
        "email":"larry@3stooges.com",
        "zip":91999	}]

    // Used to compare current and new data
    $scope.visitorInfo = {};
    $scope.storedInfo = {};

    // Used to make sure the same sample doesn't appear twice in a row
    $scope.lastSampleIndex = 0;


    // Update visitor object with submitted info
    $scope.update = function(formData) {
      $scope.storedInfo = angular.copy(formData);
    };

    // Reset form will last submitted info
    $scope.reset = function() {
      $scope.visitorInfo = angular.copy($scope.storedInfo);
    };

    // Check for difference between last submitted info
    // and info currently in form fields
    $scope.isUnchanged = function(formData) {
      return angular.equals(formData,$scope.storedInfo);
    };

    // Used solely to fill pick sample data
    $scope.populateSample = function() {
      var randomnumber;
      do {
        randomnumber=Math.floor(Math.random()*$scope.sampledata.length);
      } while (randomnumber == $scope.lastSampleIndex);
      $scope.lastSampleIndex = randomnumber;
      $scope.visitorInfo = angular.copy($scope.sampledata[randomnumber]);
    };

    // Set form to last submitted data
    $scope.reset();
  });
