'use strict';

angular.module('mean').controller('GamesController', ['$scope', '$stateParams', '$location', 'Global', 'Games',
    function($scope, $stateParams, $location, Global, Games) {
        $scope.global = Global;

        $scope.hasAuthorization = function(game) {
            if (!game || !game.user) return false;
            return $scope.global.isAdmin || game.user._id === $scope.global.user._id;
        };

        $scope.create = function() {
            var game = new Games({
                homeTeam: this.homeTeam,
                visitingTeam: this.visitingTeam,
                scheduledDate: this.scheduledDate,
                venue: this.venue
            });
            game.$save(function(response) {
                $location.path('games/' + response._id);
            });

            this.homeTeam = '';
            this.visitingTeam = '';
            this.scheduledDate = null;
            this.venue = '';
        };

        $scope.remove = function(game) {
            if (game) {
                game.$remove();

                for (var i in $scope.games) {
                    if ($scope.games[i] === game) {
                        $scope.games.splice(i, 1);
                    }
                }
            } else {
                $scope.game.$remove(function(response) {
                    $location.path('games');
                });
            }
        };

        $scope.update = function() {
            var game = $scope.game;
            if (!game.updated) {
                game.updated = [];
            }
            game.updated.push(new Date().getTime());

            game.$update(function() {
                $location.path('games/' + game._id);
            });
        };

        $scope.find = function() {
            Games.query(function(games) {
                $scope.games = games;
            });
        };

        $scope.findOne = function() {
            Games.get({
                gameId: $stateParams.gameId
            }, function(game) {
                $scope.game = game;
            });
        };
    }
]);
