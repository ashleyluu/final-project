var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller  : function($scope, $window, $log, $timeout, $map){

        $scope.title = 'rawr why cant i think of a name';
        $timeout(function(){
            $map.initialize().then(function(res){
              $scope.places = res;
              console.log($scope.places);
              $scope.$apply();
            });
        },2000);
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
