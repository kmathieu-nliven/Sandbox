'use strict';

/**
 * @ngdoc overview
 * @name sandboxApp
 * @description
 * # sandboxApp
 *
 * Main module of the application.
 */
angular
  .module('sandboxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        //controllerAs: 'vm',
        //resolve: {
        //  usersData: ['UsersSvc', function(UsersSvc) {
        //    return UsersSvc.getList().then(function(data) {
        //      return data;
        //    });
        //  }]
        //}
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //RestangularProvider.setBaseUrl('http://' + window.location.hostname + ':3000');
    RestangularProvider.setBaseUrl('http://localhost:3000');
  });
//.config(function (RestangularProvider) {
//  // provider configurations
//  RestangularProvider.setBaseUrl('http://' + window.location.hostname + ':3000');
//  RestangularProvider.setDefaultHttpFields({cache: true});
//});
