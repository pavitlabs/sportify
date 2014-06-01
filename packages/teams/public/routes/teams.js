'use strict';

angular.module('mean.teams').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('teams example page', {
            url: '/teams/example',
            templateUrl: 'teams/views/index.html'
        });
    }
]);
