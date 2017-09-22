define(['app'], function (app) {
    app.controller('Css3IconController', function ($scope) {
        $scope.onClickMouseEnter = () => {
            $scope.trigger('enter');
        };

        $scope.onClickMouseLeave = () => {
            $scope.trigger('leave');
        };
    });
});
