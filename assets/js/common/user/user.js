angular.module('helloWorld.common.user', ['ngResource'])
  .factory('User', ['$resource', function ($resource) {
    return $resource(
      'user/:id',
      {id: '@_id'},
      {
        'update': { method:'PUT' }
      }
    );
  }]);
