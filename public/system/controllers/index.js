'use strict';

var quotes = [
    {quote:'A champion is someone who gets up when he can\'t.',author:'Jack Dempsey',authorImgUrl:'http://www.georgeforeman.com/images/champions/large/fight_dempsey_large.png'},
    {quote:'A good coach will make his players see what they can be rather than what they are.',author:'Ara Parasheghian',authorImgUrl:'http://d.wapday.com:8080/animation/ccontennt/13191-f/coach_with_football.gif?__sid=ggl&lang=en'}
];

//var updateQuotes = (function($scope) {
//    var i = Math.round((Math.random()) * quotes.length);
//    if (i === quotes.length){
//        --i;
//    }
//    $scope.quote = html(quotes[i]);
//}, 5 * 1000);

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function($scope, Global) {
        $scope.global = Global;
        $scope.quote = quotes[0].quote;
        $scope.author = quotes[0].author;
        $scope.authorImgUrl = quotes[0].authorImgUrl;
    }]);