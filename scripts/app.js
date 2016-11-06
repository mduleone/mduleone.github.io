'use strict';

angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/home.html',
                controller: 'HomeController'
            })
            .when('/projects', {
                templateUrl: '../views/projects.html',
                controller: 'ProjectsController'
            })
            .when('/resume', {
                templateUrl: '../views/resume.html',
                controller: 'ResumeController'
            })
            .when('/contact', {
                templateUrl: '../views/contact.html',
                controller: 'ContactController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .filter('rawHtml', ['$sce', function($sce){
      return function(val) {
        return $sce.trustAsHtml(val);
      };
    }]);
