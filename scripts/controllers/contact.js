'use strict';

angular.module("app")
    .controller("ContactController", function ($scope) {
        $scope.contacts = [{
            icon: "fa-envelope-o",
            href: "mailto:matt@duleone.com",
            name: "matt@duleone.com"
        }, {
            icon: "fa-facebook",
            href: "https://www.facebook.com/matt.duleone",
            name: "matt.duleone"
        }, {
            icon: "fa-twitter",
            href: "http://twitter.com/Crimyon",
            name: "@Crimyon"
        }, {
            icon: "fa-google-plus",
            href: "https://plus.google.com/113075431950470826421/",
            name: "Matt DuLeone"
        }, {
            icon: "fa-linkedin",
            href: "http://www.linkedin.com/pub/matt-duleone/10/a65/123",
            name: "Matt DuLeone"
        }, {
            icon: "fa-github",
            href: "http://github.com/mduleone",
            name: "mduleone"
        }, {

        }]

    });