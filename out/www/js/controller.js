$traceurRuntime.options.symbols = true;
System.registerModule("../../../www/js/controller.js", [], function(require) {
  "use strict";
  var __moduleName = "../../../www/js/controller.js";
  angular.module('buildIoT').controller('AppController', ['$scope', '$http', function($scope, $http) {
    $scope.loadScript = function(url, type, charset, override) {
      if (type === undefined)
        type = 'text/javascript';
      if (url) {
        var script = document.querySelector("script[src*='" + url + "']");
        if (!script || override) {
          var heads = document.getElementsByTagName("head");
          if (heads && heads.length) {
            var head = heads[0];
            if (head) {
              script = document.createElement('script');
              script.setAttribute('src', url);
              script.setAttribute('type', type);
              if (charset)
                script.setAttribute('charset', charset);
              head.appendChild(script);
            }
          }
        }
        return script;
      }
    };
  }]).controller('HomeController', ['$scope', '$http', function($scope, $http) {}]).controller('LandingController', ['$scope', '$http', function($scope, $http) {
    $scope.recipes = [];
    $scope.recipeCount = 6;
    $scope.init = function() {
      for (var i = 0; i < $scope.recipeCount; i++) {
        $scope.recipes.push(i);
      }
    };
    $scope.init();
  }]).controller('NavController', ['$scope', '$http', '$location', function($scope, $http, $location) {}]).controller('RecipeController', ['$scope', '$http', '$route', '$routeParams', function($scope, $http, $route, $routeParams) {
    $scope.recipes = [];
    $scope.recipe = {};
    $scope.recipeCount = 20;
    $scope.getRecipe = function(id) {};
    $scope.newRecipe = function() {
      $scope.isRecipe = false;
      $scope.isRecipes = false;
      $scope.isNewRecipe = true;
      $scope.$parent.loadScript('assets/app/js/custom/can-recipes.js', 'text/javascript', null, true);
    };
    $scope.saveRecipe = function() {};
    $scope.init = function() {
      $scope.isNewRecipe = false;
      $scope.isRecipe = false;
      $scope.isRecipes = false;
      if ($routeParams.id !== null && $routeParams.id !== undefined) {
        $scope.isRecipe = true;
      } else {
        for (var i = 0; i < $scope.recipeCount; i++) {
          $scope.recipes.push(i);
        }
        $scope.isRecipes = true;
      }
    };
    $scope.init();
  }]).controller('SettingsController', ['$scope', '$http', function($scope, $http) {}]).controller('ContentSettingsController', ['$scope', '$http', function($scope, $http) {}]).controller('UploadController', ['$scope', 'FileUploader', function($scope, FileUploader) {
    var uploader = $scope.uploader = new FileUploader({url: 'http://localhost:3000/api/upload'});
    uploader.filters.push({
      name: 'customFilter',
      fn: function(item, options) {
        return this.queue.length < 10;
      }
    });
    uploader.onWhenAddingFileFailed = function(item, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
    };
    console.info('uploader', uploader);
  }]);
  return {};
});
System.get("../../../www/js/controller.js" + '');
