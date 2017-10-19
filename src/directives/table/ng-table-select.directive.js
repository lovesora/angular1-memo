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
                link: function (scope, ele, attr) {
                    scope.setting = commonFn.obj.getPropByStr(attr['setting'], scope.$parent);
                    scope.data = commonFn.obj.getPropByStr(attr['data'], scope.$parent);

                    // ------------------ init ------------------
                    scope.initNgTableData();

                },
                controller: function ($scope, NgTableParams, ngTableFilterFn) {
                    console.log($scope);
                    // ------------------ conf ------------------ 
                    
                    // 初始化ng-table的数据
                    $scope.initNgTableData = () => {
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

                        let dataset = $scope.data;
                        $scope.tableParams.settings({
                            dataset
                        });
                    };
    
                    // ------------------ event ------------------
                    $scope.onFilterChange = () => {
                        $scope.tableParams.filter($scope.filter.filters());
                    };
                    $scope.onClickRow = row => {
                        row.isActive = !row.isActive;
                    };
                },
            };
        });
    
    });
}

