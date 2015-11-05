var MapDirective = function( /* angular deps injection */ ){
  // Returns Directive Creation Object
  return {
    restrict: 'AE', // restrict use to attribute or element
    templateUrl: './js/components/map/map-component.html',
    scope: true, // can use global scope in this Directive
    link: {
      pre: function(scope, elem, attrs) {
        // before child scopes have been linked
      },
      post: function(scope, elem, attrs) {
        // after child scopes have been linked
      }
    }
  };
}; // End Directive definition
