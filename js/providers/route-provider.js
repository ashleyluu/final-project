var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller  : function($scope){

        $scope.title = 'Final Project';
        $scope.places = [
          {name:'Tacomiendo', address:'4502 Inglewood Blvd, Culver City, CA 90230', description:'Cheap delicious Mexican food'},
          {name:'Mohawk Bend', address:'2141 Sunset Blvd, Los Angeles, CA 90026', description:'Craft beer'},
          {name:'Espresso Profeta', address:'1129 Glendon Ave, Los Angeles, CA 90024', description:'Coffee & pastries'},
        ];
        // add images later
      }
    })

    $stateProvider
      .state('map', {
        url: '/map',
        templateUrl: './views/map.html',
        controller  : function($scope, $timeout, $window){

          $scope.title = 'Map';
          $timeout(function(){
            $window.initialize();
          },50);
        }
      });
};
