var RouteProvider = function ( $stateProvider, $locationProvider ){

      //$locationProvider.html5Mode(true);

      // states
      $stateProvider
        .state('cart', {
          url: '/cart',
          templateUrl: 'views/cart.html',
          controller  : function($scope,$store){

              // controller binding model to view, one-way data binding examples
              $scope.title = 'Watch Store';
              $scope.cart = $store.cart;

              $scope.user = {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                state: '',
                zipcode: ''
              };

          }
        })
        .state('store', {
          url: '/store',
          templateUrl: 'views/store.html',
          controller  : function($scope, $store){

            $scope.title = 'Watch Store';
            $scope.cart = $store.cart;
            $store.fetchProducts().then(function(res){

            $scope.products = res.posts;
            $scope.$apply();
            console.log($scope.products);
            });
          }
        });
      // end states
};
