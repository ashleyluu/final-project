var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller  : function($scope, $window, $log, $timeout, $map){

        $scope.title = 'rawr why cant i think of a name';

        $scope.zipcodeFilter = function(zip){
          var zipcode = document.querySelectorAll('[data-zip]');
          for (var i=0; i < zipcode.length; i++) {
            if(res.zip == zip){
                //show div
              } else {
                ul.removeChild()
              }
        };

        $timeout(function(){
          $map.initialize().then(function(res){
            $timeout(function(){
              $scope.results = res;
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
