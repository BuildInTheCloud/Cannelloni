
var app = angular.module('buildIoT', ['ngRoute', 'angularFileUpload']);

app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    /* So I've decided not to use Lazy loading and avoid it all together. My reasons are that If I can keep my controllers as light
       as possible, and use them just to funnel data to views and server-side logic methods, I should be able to
       have a fairly-sized controller.js - even before minification.

       The only thing I will do is load plugins (jquery/ui-scripts) per controller. For that, I'll use the 'loadScript'
       solution provided by Ben Thielker on stack overflow.

        I think it's more about convention here. I'm building or trying to build a single-page app, so I should try and keep it as
        straight forward, and lean as possible. I also don't see it getting to big for now, and if/when it does, breaking it out should be simple
        enough
     */
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
        .when('/recipes/:id', { templateUrl: 'views/recipes.html', controller: 'RecipeController' })
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
                    $rootScope.navbar_class = 'navbar navbar-ct-orange navbar-transparent navbar-fixed-top';
                    $rootScope.navbar_role = 'navigation';
                    break;

                default:
                    $rootScope.navbar_class = 'navbar navbar-ct-orange navbar-fixed-top';
                    $rootScope.navbar_role = '';
            }
        })
}]);

