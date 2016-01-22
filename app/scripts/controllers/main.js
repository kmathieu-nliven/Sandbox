'use strict';

/**
 * @ngdoc function
 * @name sandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sandboxApp
 */
angular.module('sandboxApp')
  .controller('MainCtrl', function ($scope, $interval, Restangular) {
  //.controller('MainCtrl', function (usersData, UsersSvc, $scope, $interval, Restangular) {
    var vm = this;
    vm.currentSteps = 0;
    vm.goal = 0;
    vm.stepBank = 0;
    vm.currentPercentage = 0;
    vm.hungerScore = 100;
    vm.mood;
    vm.allUsers;


    var startStepTracker = function() {

      Restangular.all('users').getList().then(function(data){
        vm.allUsers = data.plain();
      });

      vm.currentSteps = 5000;
      vm.goal = 10000;
      vm.stepBank = vm.currentSteps + 2450;
      vm.currentPercentage = vm.currentSteps / vm.goal *100;

      $interval(function () {
        //TODO: Don't let this run during bedtime
        vm.hungerScore -= 50;
      }, 3000, 3);

    };

    vm.addSteps = function addSteps() {
      vm.currentSteps += 500;
      vm.stepBank += 500;
      vm.currentPercentage = vm.currentSteps / vm.goal*100;

    };

    vm.feedFitty = function feedFitty(){
      vm.stepBank -= 2000;
      vm.hungerScore += 50;


    };

    $scope.$watch('vm.hungerScore', function (newScore) {
      vm.mood = newScore <= 50 ? 'Hungry' : 'Happy';

    });

    var init = function() {
      startStepTracker();
    };

    function setMood() { //Use this later?
      var moodOptions = ['Hungry', 'Hangry', 'Thirsty', 'Bored', 'Lonely', 'Happy'];
      //TODO:  maybe set this as object with type, label, and scores associated to trigger?

    }

    init();

  });
