$traceurRuntime.options.symbols = true;
System.registerModule("../../www/app.js", [], function(require) {
  "use strict";
  var __moduleName = "../../www/app.js";
  var app = angular.module('buildIoT', ['ngRoute', 'angularFileUpload']);
  app.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    }).when('/upload', {
      templateUrl: 'views/upload.html',
      controller: 'UploadController'
    }).when('/recipes', {
      templateUrl: 'views/recipes.html',
      controller: 'RecipeController'
    }).otherwise({redirectTo: '/home'});
  }).run(['$rootScope', function($rootScope) {
    $rootScope.navbar_class = '';
    $rootScope.navbar_role = '';
    $rootScope.$on('$locationChangeStart', function(e, next, current) {
      var index = next.lastIndexOf('/');
      var route = next.substring((index + 1), next.length);
      switch (route) {
        case 'home':
          $rootScope.navbar_class = 'navbar navbar-default navbar-transparent navbar-fixed-top';
          $rootScope.navbar_role = 'navigation';
          break;
        default:
          $rootScope.navbar_class = 'navbar navbar-default navbar-fixed-top';
          $rootScope.navbar_role = '';
      }
    });
  }]);
  return {};
});
System.get("../../www/app.js" + '');
