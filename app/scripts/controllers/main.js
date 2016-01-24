'use strict';

/**
 * @ngdoc function
 * @name sandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sandboxApp
 */
angular.module('sandboxApp')

  //works
  .controller('MainCtrl', function (UsersSvc, $scope, $interval, Restangular) {

    var vm = this;
    vm.goal = 10000;
    var allUsers;

    //currency
    vm.currentSteps;
    vm.stepBank;

    //life scores
    vm.hunger = {};
    vm.happiness = {};
    //vm.hunger.text;
    //vm.happiness.text;
    vm.mood;
    vm.isSick;
    vm.isDead;

    vm.currentPercentage;
    vm.moreUpdatesAvail = true;

    var currentUser;

    var mealCost = .2;
    var playCost = .1;

    var init = function () {

      UsersSvc.getList().then(function (data) {
        allUsers = data;
      }).then(function () {
        initializeUserData(allUsers[0]);

        $interval(function () {
          //TODO: Don't let this run during bedtime
          vm.hunger.score -= 1;
        }, 3000, 3);

        $interval(function () {
          //TODO: Don't let this run during bedtime
          vm.happiness.score -= 1;
        }, 4000, 3);

      });

    };

    function initializeUserData(initialData) {
      vm.currentSteps = initialData.currentSteps;
      vm.stepBank = initialData.stepBank;
      vm.hunger.score = initialData.hunger.score;
      vm.happiness.score = initialData.happiness.score;
      vm.mood = initialData.mood;
      vm.isSick = initialData.isSick;
      vm.isDead = initialData.isDead;

      vm.currentPercentage = vm.currentSteps / vm.goal * 100;
      currentUser = 0;

      setMood();
    }

    vm.addSteps = function addSteps() {
      currentUser++;

      vm.currentSteps = allUsers[currentUser].currentSteps;
      vm.stepBank = allUsers[currentUser].stepBank;
      vm.currentPercentage = vm.currentSteps / vm.goal * 100;

      vm.moreUpdatesAvail = currentUser < allUsers.length - 1;
    };

    //todo:  add play with fitty
    //todo:  add checks to not go in negatives
    vm.feedFitty = function feedFitty() {
      vm.stepBank -= mealCost * vm.goal;
      vm.hunger.score += 1;
    };

    //$scope.$watch('vm.hunger.score', function (newHungerScore) {
    $scope.$watchGroup(['vm.hunger.score', 'vm.happiness.score'], function (newValues, oldValues, scope) {

      if (newValues[0] != oldValues[0]) {
        var newHungerScore = newValues[0];
        switch (newHungerScore) {
          case 0:
            vm.isDead = true;
            break;
          case 1:
            vm.isDead = false;
            //vm.happiness.score -= 1;  //TODO: FIGURE THIS OUT
            vm.hunger.text = 'Starving';
            break;
          case 2:
            vm.isDead = false;
            vm.hunger.text = 'Hungry';
            break;
          default:
            vm.isDead = false;
            vm.hunger.text = '';
        }
      }
      if (newValues[1] != oldValues[1]) {
        var newHappinessScore = newValues[1];

        switch (newHappinessScore) {
          case 0:
            vm.isDead = true;
            break;
          case 1:
            vm.isDead = false;
            vm.happiness.text = 'Sad';
            break;
          default:
            vm.isDead = false;
            vm.happiness.text = '';
        }

      }

      setMood();


    });

    function setMood() { //Use this later?
      var moodOptions = ['Hungry', 'Hangry', 'Thirsty', 'Bored', 'Lonely', 'Happy'];
      //TODO:  set multiple options for different happiness/hunger levels to keep it interesting

      if (vm.isSick) {
        vm.mood = "Sick";
      }
      else if ((vm.hunger.text) && (vm.happiness.text)) {
        vm.mood = vm.hunger.text + " and " + vm.happiness.text;
      } else if ((vm.hunger.text) || (vm.happiness.text)) {
        vm.mood = vm.hunger.text.concat(vm.happiness.text);
      } else {
        vm.mood = "Elated";
      }

    }

    init();

  });
