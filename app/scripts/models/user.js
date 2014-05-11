angular.module("Models").factory("User", function() {
  return function(properties) {
    angular.extend(this, properties);
  };
});
