angular.module("Controllers").controller("User.controller", ["$scope", "CurrentUser", function($scope, CurrentUser) {
  $scope.userInformationForm = angular.copy(CurrentUser);
  $scope.passwordForm = {
    newPassword: null,
    confirmPassword: null
  };
  $scope.hello = "hello";
}]);