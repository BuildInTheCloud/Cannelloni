
var app = angular.module('buildIoT', ['ngRoute', 'angularFileUpload']);

app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    /*app.controllerProvider = $controllerProvider;
    app.compileProvider    = $compileProvider;
    app.routeProvider      = $routeProvider;
    app.filterProvider     = $filterProvider;
    app.provide            = $provide;*/

    //Load the landing page into template cache so that it is available when the site starts
    /*app.run(['$templateCache', function($templateCache) {
        $templateCache.put('views/home.html');
    }]);*/

    $routeProvider
        .when('/home', {templateUrl: 'views/home.html', controller: 'HomeController'})
        .when('/upload', { templateUrl: 'views/upload.html', controller: 'UploadController' })
        .when('/recipes', { templateUrl: 'views/recipes.html', controller: 'RecipeController' })
        .otherwise({ redirectTo: '/home' });
})

.run(['$rootScope', function($rootScope){
        /*navbar-ct-azure*/
        $rootScope.navbar_class = '';
        $rootScope.navbar_role = '';
        $rootScope.$on('$locationChangeStart', function(e, next, current){
            /*window.alert(current);*/

            /*Sets a solid background color when one isn't on the landing page*/
            var index = next.lastIndexOf('/');
            var route = next.substring((index + 1), next.length);
            /*window.alert(current.substring((index + 1), current.length));*/
            switch(route){
                case 'home':
                    $rootScope.navbar_class = 'navbar navbar-default navbar-transparent navbar-fixed-top';
                    $rootScope.navbar_role = 'navigation';
                    break;

                default:
                    $rootScope.navbar_class = 'navbar navbar-default navbar-fixed-top';
                    $rootScope.navbar_role = '';
            }
        })
}]);

