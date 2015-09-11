angular.module('hs.account', ['lbServices', 'ionic'])
  .controller('AccountCtrl', function ($scope, $location, User, Tweet) {
    $scope.currentUser = User.getCurrent();
    Tweet.count({ownerId: $scope.currentUser.id})
      .$promise
      .then(function (res) {
        $scope.currentUser.tweets = res.count;
      });

    $scope.logout = function () {
      User.logout(function () {
        $location.path('/login');
      });
    }
  });
