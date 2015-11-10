var appName = 'app';
var app = angular.module(appName, ['ui.router'])
                 .config(RouteProvider)
                 .service('$map', MapService)
                 .directive('list', ListDirective)
                 .directive('map', MapDirective);

angular.bootstrap(document.getElementsByTagName('html')[0], [appName]);
