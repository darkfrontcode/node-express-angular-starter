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
    post: function($scope, $http, $stateParams) {
        $http.get('/post/' + $stateParams.id).
            success(function(data) {
                $scope.post = data.post;
            });
    },
    edit: function($scope, $http, $location, $stateParams) {
        $scope.form = {};
        $http.get('/post/' + $stateParams.id).
            success(function(data) {
                $scope.form = data.post;
            });

        $scope.editPost = function () {
            $http.put('/post/' + $stateParams.id, $scope.form).
                success(function(data) {
                    $location.url('/readPost/' + $stateParams.id);
                });
        };
    },
    delete: function($scope, $http, $location, $stateParams) {
        $http.get('/post/' + $stateParams.id).success(function(data) {
            $scope.post = data.post;
        });

        $scope.deletePost = function () {
            $http.delete('/post/' + $stateParams.id).success(function(data) {
                $location.url('/');
            });
        };

        $scope.home = function () {
            $location.url('/');
        };
    }
}
