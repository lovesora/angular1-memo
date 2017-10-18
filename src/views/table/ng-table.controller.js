define(['app', 'ng-table'], function (app) {
    app.value('NgTableConfValue', {
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
        }, {
            title: 'Operation',
            field: 'opt',
            show: true
        }]
    });

    app.service('NgTableDataService', function () {
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

    app.controller('NgTableController', function ($scope, NgTableConfValue, NgTableDataService, NgTableFilterFn, NgTableParams) {
        // ------------------ conf ------------------ 
        $scope.tableCols = NgTableConfValue.cols;
        $scope.tableParams =  new NgTableParams({
            count: NgTableConfValue.count
        }, {
            dataset: [],
            paginationMaxBlocks: 7,
            paginationMinBlocks: 2,
            filterOptions: {
                filterDelay: 0,
                filterFn: NgTableFilterFn
            }
        });
        // 初始化ng-table的数据
        let initNgTableData = () => {
            let dataset = NgTableDataService.data();
            $scope.tableParams.settings({
                dataset
            });
        };
        $scope.filter = {
            value: '',
            filters: () => [{
                type: '|',
                rule: {
                    cols: NgTableConfValue.filterCols,
                    filterValue: $scope.filter.value
                }
            }]
        };

        // ------------------ event ------------------
        $scope.onFilterChange = () => {
            $scope.tableParams.filter($scope.filter.filters());
        };
        
        
        // ------------------ init ------------------
        initNgTableData();
    });


    app.factory('NgTableFilterFn', function () {
        return function (data, filterRules) {
            let _data = data;
            let _filter = function (row, cols, filterValue) {
                return cols.filter(colName => {
                    if (filterValue === undefined || filterValue === null)
                        filterValue = '';
                    // 或规则，有一个匹配成功就返回true
                    if (typeof filterValue === 'object') {
                        return filterValue.filter(filterItem => {
                            return String(row[colName]).toLowerCase().indexOf(String(filterItem).toLowerCase()) > -1;
                        }).length > 0;
                    }
                    return String(row[colName]).toLowerCase().indexOf(String(filterValue).toLowerCase()) > -1;
                }).length;
            };
            let _orFilter = function (data, filterRule) {
                return data.filter(v => _filter(v, filterRule.cols, filterRule.filterValue) > 0);
            };
            let _andFilter = function (data, filterRule) {
                return data.filter(v => _filter(v, filterRule.cols, filterRule.filterValue) === filterRule.cols.length);
            };
            angular.forEach(filterRules, rule => {
                switch (rule.type) {
                    case '&': {
                        _data = _andFilter(_data, rule.rule);
                        break;
                    }
                    case '|': {
                        _data = _orFilter(_data, rule.rule);
                        break;
                    }
                }
            });
            return _data;
        };
    });
    
});
