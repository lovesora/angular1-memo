define(['app'], function (app) {
    app.controller('SelectController', function ($scope) {
        $scope.selectList = [{
            id: 1,
            name: 'select1'
        }, {
            id: 2,
            name: 'select2'
        }];

        $scope.select = 2;

        $scope.onSelectChange = () => {
            console.log($scope.select);
        };
    });
});
