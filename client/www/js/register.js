angular.module('hs.register', ['lbServices', 'ionic'])
  .controller('RegisterCtrl', function ($scope, User, Avatar, $ionicPopup, $location) {
    $scope.register = {};
    $scope.avatar = {};

    if (User.getCachedCurrent() !== null) {
      $location.path('tab/home');
    }

    $scope.register = function () {
      $scope.registeration.created = new Date().toJSON();
      $scope.avatar = {};
      $scope.user = User.create($scope.registeration)
        .$promise
        .then(function (res) {
          console.log(res.avatar);
          Avatar.create({url: res.avatar, owmerId: res.id})
            .$promise
            .then(function (res) {
              User.login({include: 'user', rememberMe: true}, $scope.registeration)
                .$promise
                .then(function (res) {
                  $location.path('tab/home')
                }, function (err) {
                  $scope.loginError = err;
                  $scope.showAlert(err.statusText, err.data.error.message);
                })
            }, function (err) {
              console.log(err);
            })
        }, function (err) {
          $scope.registerError = err;
          $scope.showAlert(err.statusText, err.data.error.message);
        });
    };

    $scope.showAlert = function (title, errorMsg) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: errorMsg
      });
      alertPopup.then(function () {
        console.log($scope.loginError);
      })
    };
  });
