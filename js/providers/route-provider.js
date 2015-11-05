var RouteProvider = function ( $stateProvider, $locationProvider ){

      //$locationProvider.html5Mode(true);

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
        })
        .state('barney', {
          url: '/barney',
          templateUrl: './views/barney.html',
          controller  : function($scope, $timeout, $window){

            $scope.barney = 'Durr Hello!!!';
            console.log($scope.barney)
            $timeout(function(){
              $window.initialize();
            },50);
          }
        });
      // end states
};
