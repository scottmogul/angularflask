'use strict';   // See note about 'use strict'; below


var myApp = angular.module('myApp', [
    'ngRoute',
    'ngMap'

]);

myApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
             when('/index', {
                 templateUrl: '/static/partials/index.html',
             })
             .when('/about', {
                 templateUrl: '../static/partials/about.html',
             })
             .when('/maps', {
                 templateUrl: '../static/partials/maps.html',
             })
             .otherwise({
                 redirectTo: '/index'
             });
    }]);


