var ListDirective = function(){
  return {
    restrict: 'AE',
    templateUrl: './js/components/list/list.html',
    scope: true,
    link: {
      pre: function(scope, elem, attrs) {
      },
      post: function(scope, elem, attrs) {

      }
    }
  };
};
