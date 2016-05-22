var controllers = {
    home: function($scope, $http) {
        $http.get('/posts').
            success(function(data, status, headers, config) {
                $scope.posts = data.posts;
            });
    },
    add: function($scope, $http, $location) {
        $scope.form = {};
        $scope.submitPost = function () {
            $http.post('/post', $scope.form).
                success(function(data) {
                    $location.path('/');
                });
        };
    },
    post: function($scope, $http, $routeParams) {
        $http.get('/post/' + $routeParams.id).
            success(function(data) {
                $scope.post = data.post;
            });
    },
    edit: function($scope, $http, $location, $routeParams) {
        $scope.form = {};
        $http.get('/post/' + $routeParams.id).
            success(function(data) {
                $scope.form = data.post;
            });

        $scope.editPost = function () {
            $http.put('/post/' + $routeParams.id, $scope.form).
                success(function(data) {
                    $location.url('/readPost/' + $routeParams.id);
                });
        };
    },
    delete: function($scope, $http, $location, $routeParams) {
        $http.get('/post/' + $routeParams.id).
            success(function(data) {
                $scope.post = data.post;
            });

        $scope.deletePost = function () {
            $http.delete('/post/' + $routeParams.id).
                success(function(data) {
                    $location.url('/');
                });
        };

        $scope.home = function () {
            $location.url('/');
        };
    }
}
