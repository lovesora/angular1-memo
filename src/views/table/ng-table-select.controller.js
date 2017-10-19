define(['app', 'ng-table-select'], function (app) {
    app.value('ngTableSelectConfValue', {
        count: 10,
        filterCols: ['id', 'name'],
        cols: [{
            title: 'ID',
            field: 'id',
            sortable: 'id',
            show: true
        }, {
            title: 'Name',
            field: 'name',
            sortable: 'name',
            show: true
        }]
    });

    app.service('ngTableSelectDataService', function () {
        this.data = () => [{
            id: 1,
            name: 'lovesora',
            opt: 'opt1'
        }, {
            id: 2,
            name: 'loverem',
            opt: 'opt2'
        }];
    });


    app.controller('NgTableSelectController', function ($scope, ngTableSelectConfValue, ngTableSelectDataService) {
        $scope.setting = ngTableSelectConfValue;
        $scope.data = ngTableSelectDataService.data();

    });
});
