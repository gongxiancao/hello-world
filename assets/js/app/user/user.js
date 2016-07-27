angular.module('helloWorld.user', ['helloWorld.common.user'])
.controller('UserListCtrl', function ($scope, User) {
  $scope.users = User.query();
});
