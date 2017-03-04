app.controller('reddits', function($scope, $http) {
    $http.get("https://www.reddit.com/subreddits/search.json?q=reactjs")
    .success(function(response) {
        $scope.posts = response.data.children;
    });
});