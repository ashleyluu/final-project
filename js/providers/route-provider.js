var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller  : function($scope, $window, $log, $timeout, $map){

        $scope.title = 'rawr why cant i think of a name';

      }
    })
      .state('del-rey', {
        url: '/del-rey',
        templateUrl: './views/del-rey.html',
        controller  : function($scope, $timeout, $window, $map){

          $timeout(function(){
            $map.initialize().then(function(res){
              $timeout(function(){
                $scope.results = res;
                // console.log(res[0].details.photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35}))
              }, 300);
            });
            $scope.$apply();
          }, 300);
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
