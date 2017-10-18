define(['app', 'tab-horizontal'], function (app) {
    app.controller('TabHorizontalController', function ($scope) {
        let data = [{
            title: 'title-one',
            count: 3,
            isActive: true
        }, {
            title: 'title-two',
            count: 10
        }];
        
        $scope.tabData = data;

        $scope.onClickTab = item => {
            console.log(item === data[0]);
            console.log(item === data[1]);
        };
    });
});
