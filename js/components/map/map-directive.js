var MapDirective = function($map){
  return {
    restrict: 'AE',
    templateUrl: './js/components/map/map-component.html',
    scope: true,
    link: {
      pre: function(scope, elem, attrs) {
      },
      post: function(scope, elem, attrs) {
      
      }
    }
  };
};
