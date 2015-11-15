var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller  : function($scope, $window, $log, $timeout, $map){

        $scope.title = 'rawr why cant i think of a name';

        $timeout(function(){
          $map.initialize().then(function(res){
            $timeout(function(){
              $scope.results = res;
              console.log(res[0].details.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35}))
            }, 200);
          });
          $scope.$apply();
        }, 200);

      }
    })
      .state('map', {
        url: '/map',
        templateUrl: './views/map.html',
        controller  : function($scope, $timeout, $window, $map){

          $timeout(function(){
            $map.initialize();
          },100);
        }
      });
};
