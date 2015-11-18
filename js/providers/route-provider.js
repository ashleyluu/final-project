var RouteProvider = function ( $stateProvider, $locationProvider ){

  $stateProvider
    .state('default', {
      url: '/default',
      templateUrl: './views/default.html',
      controller: function($scope, $window, $log, $timeout, $map){

        $scope.title = 'rawr why cant i think of a name';

        $scope.zipcodeFilter = function(zip){
          var zipcode = document.querySelectorAll('[data-zip]');
          var zipList = zip.split(",");
          console.log(zipList);
          for (var i=0; i < zipcode.length; i++){
            zipcode[i].style.display = "none";
          }

          for (var i=0; i < zipcode.length; i++){
            for (var j=0; j < zipList.length; j++){
              if(zipcode[i].attributes[2].value == zipList[j]){
                zipcode[i].style.display = "block";
              }
            }
          }
        };

        $scope.clearFilter = function(){
          var zipcode = document.querySelectorAll('[data-zip]');
          for (var i=0; i < zipcode.length; i++){
            zipcode[i].style.display = "block";
          }
          document.getElementsByClassName('hide')[0].style.display = "none";
        };

        $scope.mapDisplay = function(){
          var zipcode = document.querySelectorAll('[data-zip]');
          for (var i=0; i < zipcode.length; i++){
            zipcode[i].style.display = "none";
          }
          document.getElementsByClassName('hide')[0].style.display = "block";
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
    });
};
