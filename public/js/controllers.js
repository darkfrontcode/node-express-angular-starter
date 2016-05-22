function index($scope, $http) {
    $http.get('/api/posts').
        success(function(data, status, headers, config) {
            $scope.posts = data.posts;
        });
}

function add($scope, $http, $location) {
    $scope.form = {};
    $scope.submitPost = function () {
        $http.post('/api/post', $scope.form).
            success(function(data) {
                $location.path('/');
            });
    };
}

function post($scope, $http, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).
        success(function(data) {
            $scope.post = data.post;
        });
}

function edit($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/post/' + $routeParams.id).
        success(function(data) {
            $scope.form = data.post;
        });

    $scope.editPost = function () {
        $http.put('/api/post/' + $routeParams.id, $scope.form).
            success(function(data) {
                $location.url('/readPost/' + $routeParams.id);
            });
    };
}

function delete($scope, $http, $location, $routeParams) {
    $http.get('/api/post/' + $routeParams.id).
        success(function(data) {
            $scope.post = data.post;
        });

    $scope.deletePost = function () {
        $http.delete('/api/post/' + $routeParams.id).
            success(function(data) {
                $location.url('/');
            });
    };

    $scope.home = function () {
        $location.url('/');
    };
}
