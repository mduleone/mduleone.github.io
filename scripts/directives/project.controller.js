'use strict';

angular.module('app')
    .controller('mdlProjectCtrl', function ($scope) {
        
        $scope.showRepo = function () {
            return $scope.proj.repo?true:false;
        }
    });