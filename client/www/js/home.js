angular.module('hs.home', ['lbServices'])
  .controller('HomeTabCtrl', function ($scope, $location, User, Tweet, Like, Avatar) {
    $scope.currentUser = User.getCurrent();
    $scope.newTweet = {};
    $scope.tweets = [];

    $scope.lastTweetId = 9999999999;

    $scope.showAlert = function (data) {
      $ionicPopup.alert({
        title: 'Error',
        template: data
      })
    };

    $scope.loadMore = function () {
      $scope.noMoreTweets = false;
      Tweet
        .find({
          filter: {
            order: 'id DESC',
            limit: '5',
            where: {
              id: {lt: $scope.lastTweetId}
            }
          }
        })
        .$promise
        .then(
        function (res) {
          if( res.length > 0 ) {
            angular.forEach(res, function (values) {
              Tweet
                .comments.count({id: values.id})
                .$promise
                .then(function (res) {
                  values.commemts = res.count;
                });
              Tweet
                .likes.count({id: values.id})
                .$promise
                .then(function (res) {
                  values.likes = res.count;
                });
              Like
                .count(
                {
                  where: {
                    tweetId: values.id,
                    ownerId: $scope.currentUser.id
                  }
                })
                .$promise
                .then(function (res) {
                  values.userLikedTweet = res.count === 1;
                });
              Avatar
                .find({filter: {where: {ownerId: values.ownerId}}})
                .$promise
                .then(function (res) {
                  values.avatar = res[0].url;
                });

              $scope.tweets.push(values)
            });

            $scope.lastTweetId = $scope.tweets[$scope.tweets.length - 1].id;
          } else {
            $scope.noMoreTweets = true;
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.$broadcast('scroll.refreshComplete');
          }
        },
        function (err) {
          sonsole.log(err);
        })
        .finally(function () {
          if ($scope.lastTweetId === 1) {
            $scope.noMoreTweets = true;
          }

          $scope.$broadcast('scroll.infiniteScrollComplete');
          $scope.$broadcast('scroll.refreshComplete');
        })
    };

    $scope.refresh = function () {
      delete $scope.tweets;
      $scope.tweets = [];
      $scope.lastTweetId = 9999999999;
      $scope.loadMore();
    };

    $scope.go = function (path) {
      $location.url(path);
    };

    $scope.like = function (index) {
      if ($scope.tweets[index].userLikedTweet) {
        Like
          .find({filter: {where: {ownerId: $scope.currentUser.id, tweetId: $scope.tweets[index].id}}})
          .$promise
          .then(function (res) {
            Like.destroyById({id: res[0].id},
              function (res) {
                $scope.tweets[index].userLikedTweet = false;
                $scope.tweets[index].likes -= 1;
              },
              function (err) {
                console.log(err);
              })
          })
      } else {
        Like.create({tweetId: $scope.tweets[index].id, ownerId: $scope.currentUser.id},
          function (res) {
            $scope.tweets[index].userLikedTweet = true;
            $scope.tweets[index].likes += 1;
          },
          function (err) {
            console.log(err);
          })
      }
    };

    $scope.saveTweet = function () {
      $scope.newTweet.data = new Date().toJSON();
      $scope.newTweet.ownerId = $scope.currentUser.id;
      $scope.newTweet.ownerUsername = $scope.currentUser.username;
      Tweet.create($scope,newTweet,function(res) {
        delete $scope.newTweet;
        $scope.refresh();
      }, function (err) {
        console.log(err)
      })
    };
  });
