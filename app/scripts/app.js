'use strict';

/**
 * @ngdoc overview
 * @name statusPanelApp
 * @description
 * # statusPanelApp
 *
 * Main module of the application.
 */
angular
  .module('statusPanelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/playground', {
        templateUrl: 'views/playground.html',
        controller: 'PlaygroundCtrl',
        controllerAs: 'playground'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
