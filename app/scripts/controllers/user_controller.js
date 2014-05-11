angular.module("Controllers").controller("User.controller", ["$scope", "currentUser", function($scope, currentUser) {
  $scope.userInformationForm = angular.copy(currentUser);
  $scope.passwordForm = {
    newPassword: null,
    confirmPassword: null
  };
}]);