'use strict';

angular.module("app")
    .controller("HeaderController", function($scope, $location) {
        $scope.navLinks = [{
            href: "./#/",
            name: "Home"
        }, {
            href: "./#/projects",
            name: "Projects"
        }, {
            href: "./#/resume",
            name: "Resume"
        }, {
            href: "./#/contact",
            name: "Contact"
        }];

        $scope.isCurrentPath = function(href) {
            var path = href.slice(2);
            if (path === $location.path()) {
                return "active"
            }
            return "";
        }
    });