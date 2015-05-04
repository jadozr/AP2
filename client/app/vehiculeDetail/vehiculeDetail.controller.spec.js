'use strict';

describe('Controller: VehiculeDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('autoPrivilegeApp'));

  var VehiculeDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VehiculeDetailCtrl = $controller('VehiculeDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
