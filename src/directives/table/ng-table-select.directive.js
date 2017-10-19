new function () {
    let config = {
        templateUrl: 'directives/table/ng-table-select.html',
        css: 'css!directives/table/ng-table-select.css'
    };

    define(['app', 'ng-table', 'fn.table.ngTable', 'fn.common', config.css], function (app) {
        app.directive('ngTableSelect', function (commonFn) {
            return {
                scope: true,
                templateUrl: config.templateUrl,
                link: function (scope, elem, attr) {
                    scope.setting = scope.$parent[attr['setting']];
                    scope.data = commonFn.obj.getPropByStr(attr['data'], scope.$parent);
                },
                controller: function ($scope, NgTableParams, ngTableFilterFn) {
                    // ------------------ conf ------------------ 
                    $scope.tableCols = $scope.setting.cols;
                    $scope.tableParams =  new NgTableParams({
                        count: $scope.setting.count
                    }, {
                        dataset: [],
                        paginationMaxBlocks: 7,
                        paginationMinBlocks: 2,
                        filterOptions: {
                            filterDelay: 0,
                            filterFn: ngTableFilterFn
                        }
                    });
                    // 初始化ng-table的数据
                    let initNgTableData = () => {
                        let dataset = $scope.data;
                        $scope.tableParams.settings({
                            dataset
                        });
                    };
                    $scope.filter = {
                        value: '',
                        filters: () => [{
                            type: '|',
                            rule: {
                                cols: $scope.setting.filterCols,
                                filterValue: $scope.filter.value
                            }
                        }]
                    };
    
                    // ------------------ event ------------------
                    $scope.onFilterChange = () => {
                        $scope.tableParams.filter($scope.filter.filters());
                    };
                    $scope.onClickRow = row => {
                        row.isActive = !row.isActive;
                    };
                    
                    // ------------------ init ------------------
                    initNgTableData();
                },
            };
        });
    
    });
}

