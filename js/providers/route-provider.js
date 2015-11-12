var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller  : function($scope, $window, $log, $timeout, $map){

        $scope.title = 'rawr why cant i think of a name';
        $scope.places = [
          {image:'', name:'Tacomiendo', address:'4502 Inglewood Blvd, Culver City', description:'Cheap delicious Mexican food'},
          {image:'', name:'Mohawk Bend', address:'2141 Sunset Blvd, Los Angeles', description:'Craft beer'},
          {image:'', name:'Espresso Profeta', address:'1129 Glendon Ave, Los Angeles', description:'Coffee & pastries'},
        ];
        $timeout(function(){
            $map.initialize().then(function(res){
              $scope.myplaces = res;
              console.log(res);
              $scope.$apply();
            });
        },100);
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
          },100);
        }
      });
};
