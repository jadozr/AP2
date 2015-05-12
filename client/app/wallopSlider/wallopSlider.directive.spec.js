'use strict';

describe('Directive: wallopSlider', function () {

  // load the directive's module and view
  beforeEach(module('autoPrivilegeApp'));
  beforeEach(module('app/wallopSlider/wallopSlider.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wallop-slider></wallop-slider>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the wallopSlider directive');
  }));
});