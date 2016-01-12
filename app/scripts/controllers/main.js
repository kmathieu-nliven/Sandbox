'use strict';

/**
 * @ngdoc function
 * @name sandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sandboxApp
 */
angular.module('sandboxApp')
  .controller('MainCtrl', function ($scope) {
    var vm = this;
    vm.currentSteps = 0;
    vm.goal = 0;
    vm.stepBank = 0;
    vm.currentPercentage = 0;
    $scope.date= new Date();


    var startStepTracker = function() {
      vm.currentSteps = 5000;
      vm.goal = 10000;
      vm.stepBank = vm.currentSteps + 2450;
      vm.currentPercentage = vm.currentSteps / vm.goal *100;

    };

    vm.addSteps = function addSteps() {
      vm.currentSteps += 500;
      vm.stepBank += 500;
      vm.currentPercentage = vm.currentSteps / vm.goal*100;

    };

    vm.feedFitty = function feedFitty(){
      vm.stepBank -= 2000;

    };

    var init = function() {
      startStepTracker();
    };

    init();

  });
