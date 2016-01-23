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

    vm.currentSteps;
    vm.stepBank;
    vm.hungerScore;
    vm.mood;
    vm.currentPercentage;
    vm.moreUpdatesAvail = true;

    var currentUser;

    var init = function() {

      UsersSvc.getList().then(function(data){
        allUsers = data;
      }).then(function(){
        initializeUserData(allUsers[0]);

        $interval(function () {
          //TODO: Don't let this run during bedtime
          vm.hungerScore -= 50;
        }, 3000, 3);

      });

    };

    function initializeUserData(initialData) {
      vm.currentSteps = initialData.currentSteps;
      vm.stepBank = initialData.stepBank;
      vm.hungerScore = initialData.hungerScore;
      vm.mood = initialData.mood;
      vm.currentPercentage = vm.currentSteps / vm.goal *100;
      currentUser = 0;
    }

    vm.addSteps = function addSteps() {
      currentUser++;

      vm.currentSteps =  allUsers[currentUser].currentSteps;
      vm.stepBank =  allUsers[currentUser].stepBank;
      vm.currentPercentage = vm.currentSteps / vm.goal*100;

      vm.moreUpdatesAvail = currentUser < allUsers.length-1;
    };

    vm.feedFitty = function feedFitty(){
      vm.stepBank -= 2000;
      vm.hungerScore += 50;
    };

    $scope.$watch('vm.hungerScore', function (newScore) {
      vm.mood = newScore <= 50 ? 'Hungry' : 'Happy';

    });

    function setMood() { //Use this later?
      var moodOptions = ['Hungry', 'Hangry', 'Thirsty', 'Bored', 'Lonely', 'Happy'];
      //TODO:  maybe set this as object with type, label, and scores associated to trigger?

    }

    init();

  });
