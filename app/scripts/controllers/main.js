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
  .controller('MainCtrl', function (UsersSvc, $scope, $interval, Restangular, $timeout) {

    var vm = this;
    vm.goal = 10000;
    var allUsers;

    //currency
    vm.currentSteps;
    vm.stepBank;

    var mealCost = .1;
    vm.mealCostSteps, vm.playCostSteps;
    var playCost = .05;
    vm.waterCount = 0;

    //life scores
    //vm.hunger = {};
    //vm.happiness = {};
    //vm.hunger.text;
    //vm.happiness.text;
    //vm.isSick;
    //vm.isDead;

    var sadCount = 0;
    var sadDelay = 4000;
    var actionDelay = 3000;
    var hungrySadTimeout;

    vm.mood;
    var actionCompleted;
    var hungry = "Hungry";
    var sad = "Sad";
    var chillin = "Chillin'";

    vm.currentPercentage;
    vm.moreUpdatesAvail = true;
    vm.alerts = [];

    vm.showChillinFitty = false;
    vm.showWavingFitty = false;
    vm.showSadFitty = false;
    vm.showPlayingFitty = false;
    vm.showEatingFitty = false;
    vm.showDefaultFitty = true;

    var currentUser;

    var init = function () {

      UsersSvc.getList().then(function (data) {
        allUsers = data;
      }).then(function () {
        initializeUserData(allUsers[0]);
        vm.mood = chillin;

        $timeout(makeFittyHungryOrSad, sadDelay);

        //$interval(function () {
        //  if (vm.hunger.score > 0) {
        //    vm.hunger.score -= 1;
        //  }
        //}, 3000, 3);
        //
        //$interval(function () {
        //  if (vm.happiness.score > 0) {
        //    vm.happiness.score -= 1;
        //  }
        //}, 5000, 3);

      });

    };

    function makeFittyHungryOrSad(){
      sadCount++;
      if (sadCount % 3 == 2) {
        vm.mood = sad;
      } else {
        vm.mood = hungry;
      }
      vm.fittySad();
    }

    vm.fittyDefault = function fittyDefault(){
      vm.showDefaultFitty = true;
      vm.showChillinFitty = false;
      vm.showWavingFitty = false;
      vm.showSadFitty = false;
      vm.showPlayingFitty = false;
      vm.showEatingFitty = false;

      vm.mood = chillin;

      hungrySadTimeout = $timeout(makeFittyHungryOrSad, sadDelay);

    };

    vm.fittySad = function fittySad(){
      vm.showSadFitty = true;
      vm.showChillinFitty = false;
      vm.showWavingFitty = false;
      vm.showPlayingFitty = false;
      vm.showEatingFitty = false;
      vm.showDefaultFitty = false;
    };

    vm.fittyWave = function fittyWave(){
      vm.showWavingFitty = true;
      vm.showChillinFitty = false;

      vm.showSadFitty = false;
      vm.showPlayingFitty = false;
      vm.showEatingFitty = false;
      vm.showDefaultFitty = false;
    };

    vm.fittyPlay = function fittyPlay(){
      vm.showPlayingFitty = true;
      vm.showChillinFitty = false;
      vm.showWavingFitty = false;
      vm.showSadFitty = false;
      vm.showEatingFitty = false;
      vm.showDefaultFitty = false;
    };

    vm.fittyEat = function fittyEat(){
      vm.showEatingFitty = true;
      vm.showChillinFitty = false;
      vm.showWavingFitty = false;
      vm.showSadFitty = false;
      vm.showPlayingFitty = false;
      vm.showDefaultFitty = false;
    };

    vm.fittyChilling = function fittyChilling(){
      vm.showChillinFitty = true;

      vm.showWavingFitty = false;
      vm.showSadFitty = false;
      vm.showPlayingFitty = false;
      vm.showEatingFitty = false;
      vm.showDefaultFitty = false;
    };

    function initializeUserData(initialData) {
      vm.currentSteps = initialData.currentSteps;
      vm.stepBank = initialData.stepBank;
      vm.waterCount = initialData.waterCount;
      //vm.hunger.score = initialData.hunger.score;
      //vm.happiness.score = initialData.happiness.score;
      //vm.mood = initialData.mood;
      //vm.isSick = initialData.isSick;
      //vm.isDead = initialData.isDead;

      vm.currentPercentage = vm.currentSteps / vm.goal * 100;
      currentUser = 0;
      sadCount = 0;
      vm.playCostSteps = playCost * vm.goal;
      vm.mealCostSteps = mealCost * vm.goal;

      //setMood();
    }

    vm.logWater = function logWater() {
      vm.waterCount++;
      $timeout.cancel(hungrySadTimeout);
      vm.fittyWave();
      $timeout(vm.fittyDefault, actionDelay);
    };

    vm.getWaterCount = function getWaterCount(count){
      return new Array(vm.waterCount);
    };

    vm.addSteps = function addSteps() {
      currentUser++;
      var stepBankIncrease = allUsers[currentUser].currentSteps - allUsers[currentUser-1].currentSteps;

      vm.currentSteps = allUsers[currentUser].currentSteps;
      //vm.stepBank = allUsers[currentUser].stepBank;
      vm.stepBank += stepBankIncrease;
      vm.currentPercentage = vm.currentSteps / vm.goal * 100;

      vm.moreUpdatesAvail = currentUser < allUsers.length - 1;
    };

    vm.resetFitty = function resetFitty(){
      initializeUserData(allUsers[0]);
      vm.fittyDefault();
    };

    vm.feedFitty = function feedFitty() {

      if (vm.stepBank >= vm.mealCostSteps) {
        vm.stepBank -= vm.mealCostSteps;
        //vm.hunger.score += 1;
        if (vm.mood==hungry) {
          vm.mood = chillin;
        }
        vm.fittyEat();
        if (vm.mood==chillin) {
          $timeout(vm.fittyDefault, actionDelay);
        } else {
          $timeout(vm.fittySad, actionDelay);
        }
      } else {
        addAlert('danger','Not enough steps to feed Fitty.');
      }
    };

    vm.playWithFitty = function playWithFitty() {

      if (vm.stepBank >= vm.playCostSteps) {
        vm.stepBank -= vm.playCostSteps;
        //vm.happiness.score += 1;
        if (vm.mood==sad) {
          vm.mood = chillin;
        }
        vm.fittyPlay();
        if (vm.mood==chillin) {
          $timeout(vm.fittyDefault, actionDelay);
        } else {
          $timeout(vm.fittySad, actionDelay);
        }
      } else {
        addAlert('danger','Not enough steps to play with Fitty.');
      }
    };

    //TODO:  Add water events

    function addAlert(type, msg) {
      var stepDelta = mealCost * vm.goal - vm.stepBank;
      vm.alerts.push({type: 'danger', msg: msg + "  You need " + stepDelta + " more steps.  Get movin!"})
    }

    vm.closeAlert = function(index) {
      vm.alerts.splice(index, 1);
    };

    //$scope.$watchGroup(['vm.hunger.score', 'vm.happiness.score'], function (newValues, oldValues, scope) {
    //  //todo: maybe set sad score and have watch on that
    //
    //  if (newValues[0] != oldValues[0]) {
    //    var newHungerScore = newValues[0];
    //    switch (newHungerScore) {
    //      case 0:
    //        //vm.isDead = true;
    //        vm.isDead = false;
    //        vm.hunger.text = 'Starving';
    //        vm.fittySad();
    //        break;
    //      //case 1:
    //      //  vm.isDead = false;
    //      //  vm.hunger.text = 'Starving';
    //      //  break;
    //      //case 2:
    //      //  vm.isDead = false;
    //      //  vm.hunger.text = 'Hungry';
    //      //  break;
    //      default:
    //        vm.isDead = false;
    //        vm.hunger.text = '';
    //    }
    //  }
    //  if (newValues[1] != oldValues[1]) {
    //    var newHappinessScore = newValues[1];
    //
    //    switch (newHappinessScore) {
    //      case 0:
    //        //vm.isDead = true;
    //        vm.isDead = false;
    //        vm.happiness.text = 'Sad';
    //        vm.fittySad();
    //        break;
    //      case 1:
    //      //  vm.isDead = false;
    //      //  vm.happiness.text = 'Sad';
    //      //  break;
    //      default:
    //        vm.isDead = false;
    //        vm.happiness.text = '';
    //    }
    //
    //  }
    //  if ((newHappinessScore == 0) || (newHungerScore == 0)){
    //    vm.fittySad();
    //  }
    //
    //
    //  //if ((newHappinessScore > 0) && (newHungerScore > 0)){
    //  //  //$timeout(vm.fittyDefault, 2000);
    //  //  //vm.fittyDefault();
    //  //} else {
    //  //  //$timeout(vm.fittySad, 2000);
    //  //  //vm.fittySad();
    //  //}
    //  setMood();
    //
    //
    //});

    //function setMood() {
    //  var moodOptions = ['Hungry', 'Hangry', 'Thirsty', 'Bored', 'Lonely', 'Happy'];
    //  //TODO:  set multiple options for different happiness/hunger levels to keep it interesting
    //
    //  if (vm.isSick) {
    //    vm.mood = "Sick";
    //  }
    //  else if ((vm.hunger.text) && (vm.happiness.text)) {
    //    vm.mood = vm.hunger.text + " and " + vm.happiness.text;
    //    vm.fittyDefault();
    //  } else if ((vm.hunger.text) || (vm.happiness.text)) {
    //    vm.mood = vm.hunger.text.concat(vm.happiness.text);
    //    vm.fittySad();
    //  } else {
    //    vm.mood = "Chillin'";
    //  }
    //
    //}

    init();

  });
