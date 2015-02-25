
angular.module('buildIoT')
    /*==========================================================================
     Home Controller
     ==========================================================================*/
    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    }])

    /*==========================================================================
     Landing Page Controller
     ==========================================================================*/
    .controller('LandingController', ['$scope', '$http', function ($scope, $http) {
        $scope.recipes = [];
        $scope.recipeCount = 6;

        $scope.init = function () {
            //Just for testing purposes for now
            for (var i = 0; i < $scope.recipeCount; i++) {
                $scope.recipes.push(i);
            }
        }

        $scope.init();
    }])

    /*==========================================================================
     Navbar Controller
     ==========================================================================*/
    .controller('NavController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    }])


    /*==========================================================================
     Recipes Controller
     ==========================================================================*/
    .controller('RecipeController', ['$scope', '$http', '$route', '$routeParams', function ($scope, $http, $route, $routeParams) {
        $scope.recipes = [];
        $scope.recipe = {};
        $scope.recipeCount = 20;

        $scope.getRecipe = function(id){
        }

        $scope.saveRecipe = function(){
        }

        $scope.init = function () {
            //check for route params
            if($routeParams.id !== null && $routeParams.id !== undefined){
                //Get recipe from api (just for testing now)
            }
            else{
                //Get recipes from api (Just for testing purposes for now)
                for (var i = 0; i < $scope.recipeCount; i++) {
                    $scope.recipes.push(i);
                }
            }
        }

        $scope.init();
    }])


    /*==========================================================================
     Settings Controller
     ==========================================================================*/
    .controller('SettingsController', ['$scope', '$http', function ($scope, $http) {
    }])

    /*==========================================================================
     Content Settings Controller
     ==========================================================================*/
    .controller('ContentSettingsController', ['$scope', '$http', function ($scope, $http) {
    }])

    /*==========================================================================
     Upload Controller
     ==========================================================================*/
    .controller('UploadController', ['$scope', 'FileUploader', function ($scope, FileUploader) {

        var uploader = $scope.uploader = new FileUploader({
            url: 'http://localhost:3000/api/upload'
        });

        // FILTERS
        uploader.filters.push({
            name: 'customFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS
        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);
    }]);