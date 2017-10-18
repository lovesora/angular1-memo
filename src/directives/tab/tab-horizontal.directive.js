new function () {
    let config = {
        templateUrl: 'directives/tab/tab-horizontal.html'
    };

    define(['app', 'css!directives/tab/tab-horizontal.css'], function (app) {
        app.directive('tabHorizontal', function () {
            return {
                scope: true,
                restrict: 'E',
                link: function (scope, element, attrs) {
                    scope.data = scope.$parent[attrs.data];
                    scope.callback = scope.$parent[attrs.onclicktab];
                },
                controller: function ($scope) {
                    $scope.onClickTab = item => {
                        $scope.data.map(item => {
                            item.isActive = false;
                        });
                        item.isActive = true;

                        $scope.callback && $scope.callback(item);
                    };
                },
                templateUrl: config.templateUrl
            };
        });
    });

};
