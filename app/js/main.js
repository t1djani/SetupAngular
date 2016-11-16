(function () {

'use strict';

  var app = angular.module('SampleApp', ['ngRoute', 'ngAnimate']);

  app.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "./partials/partials1.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  app.controller('MainController',
    function($scope) {
      $scope.test = "En cours...";
    }
  );

}());
