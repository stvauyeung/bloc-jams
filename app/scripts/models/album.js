
angular.module('Models').factory('Album', function() {
  return function(properties) {
    angular.extend(this, properties);
    
    this.metaInfo = function() {
      return this.year + " on " + this.label;
    };

    this.url = function() {
      return "/album";
    };
  };
});
