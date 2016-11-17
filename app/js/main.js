'use strict';

var app = angular.module('SampleApp', ['ngRoute', 'ngAnimate']);

app.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./partials/partials1.html",
        controller: "MainController",
        controllerAs: "mc"
      })
      .otherwise({
         redirectTo: '/'
      });
  }
]);

app.controller('MainController', function() {
    this.test = "En cours...";
    this.name = { name: "Tidjani", lastname: "Issop" };
  }
);

app.directive('myTitle', function() {
  return {
    restrict: 'E',
    templateUrl: './partials/partials2.html',
    scope: {
      complete: "="
    }
  };
});
