angular.module('helloWorld.user')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'templates/user-list.tpl.html',
        controller: 'UserListCtrl'
      });
  });