'use strict';

angular.module("app")
    .controller("ProjectsController", function($scope) {
        $scope.projects = [
        {
            title: "Casino Craps",
            href: "http://duleone.com/craps",
            repo: "https://github.com/mduleone/craps",
            desc: "A frontend implementation of the popular casino table game, Craps! Complete with a tutorial, this is an excellent and fun way to learn to play Craps without the fear of losing your shirt! You start with $10,000, and table stakes allow for you to be as frugal or as extravigant as you wish, allowing bets of all sizes, from $10 to $10,000.",
        }, {
            title: "Five Card Draw - Alexa Skill",
            href: "",
            repo: "https://github.com/mduleone/alexaFivecard",
            desc: "A Five Card Draw Poker skill for the Amazon Echo. Ask Alexa to deal you a hand, and then try your best to beat her!<br /><br />Powered by <a href='http://dule.one/holdemAnalyzer' target='_blank'>Node Poker</a>.",
        }, {
            title: "Node Poker",
            href: "http://dule.one/holdemAnalyzer",
            repo: "https://github.com/mduleone/nodePoker",
            desc: "A Node.js implementation of a poker hand analyzer. <a href='http://dule.one/holdemAnalyzer' target='_blank'>Texas Hold'em</a> implemented in the GUI, <a href='http://dule.one/holdem?board=KsQsTsKdAd&hand1=AsJs&hand2=AhKh&hand5=TdTh' target='_blank'>Texas Hold'em</a> and <a href='http://dule.one/poker?hand1=AsJsKsQsTs&hand2=AhKhAcKdAd' target='_blank'>5 card</a> poker implemented in an API. More games implemented in the project, but none with exposed endpoints. Inspired by solving <a href='https://projecteuler.net/problem=54' target='_blank'>Project Euler #54</a> in <a href='https://gist.github.com/mduleone/133c118b8a6c6bb9b624' target='_blank'>COBOL</a> and wanting a more practical API.",
        }, {
            title: "Make Utterance",
            href: "https://www.npmjs.com/package/make-utterance",
            repo: "https://github.com/mduleone/MakeUtterance",
            desc: "A very basic tool to make creating utterance strings for the Amazon Echo easier.",
        }, {
            title: "Pokedex - Alexa Skill",
            href: "",
            repo: "https://github.com/mduleone/EchoPokedex",
            desc: "A Pokedex skill for the Amazon Echo. Ask Alexa to tell you about any Pokemon in the Pokemon universe.<br /><br />Powered by the <a href='http://pokeapi.co/' target='_blank'>Pok&eacute;mon RESTful API</a>.",
        },]
        // {
        //     title: "Poker",
        //     href: "http://duleone.com/playholdem",
        //     desc: "Pker!!!"
        // },]
    });