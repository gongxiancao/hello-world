angular.module('helloWorld', [
  'ui.router',
  'helloWorld.user'
])
.config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
  $urlRouterProvider
    .otherwise('/');

  $urlRouterProvider.rule(function ($injector, $location) {

    var path = $location.path();
    var hasTrailingSlash = path[path.length - 1] === '/';

    if (hasTrailingSlash) {

      //if last charcter is a slash, return the same url without the slash
      var newPath = path.substr(0, path.length - 1);
      return newPath;
    }
  });
});
