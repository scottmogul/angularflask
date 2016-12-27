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

myApp.factory('pyTool', function($http,$location){
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/')+1);
    var appRootPath = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    var svc={
        py: function (controller,action,params) {
            return $http({method: 'GET', url: 'test/'+action, params: params})
        }
    };
    return svc;
});

