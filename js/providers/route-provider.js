var RouteProvider = function ( $stateProvider, $locationProvider ){

      // states
      $stateProvider
        .state('map', {
          url: '/map',
          templateUrl: './views/map.html',
          controller  : function($scope, $timeout, $window){

            $scope.title = 'Map';
            console.log($scope.title);
            $timeout(function(){
              $window.initialize();
            },50);
          }
        });
      // end states
};
