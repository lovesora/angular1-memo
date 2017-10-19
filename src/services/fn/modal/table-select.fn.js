new function () {
    let config = {
        templateUrl: 'services/fn/modal/table-select.html'
    };

    define(['app', 'ng-table-select'], function (app) {
        app.factory('modalTableSelectFn', function () {
            let fn = ($uibModal, state) => {
                state = Object.assign({}, state);
                
                let model = $uibModal.open({
                    animation: true,
                    templateUrl: config.templateUrl,
                    controller: 'modalTableSelectController',
                    resolve: {
                        // 数据需要以函数形式传递，不然会报错
                        state: () => state
                    }
                });
    
                return model.result;
            };
            
            return fn;
        });

        
        app.controller('modalTableSelectController', function ($scope, $uibModalInstance) {
            $scope.state = $scope.$resolve.state;

            $scope.onClickOk = () => {
                
                let result = $scope.state.table.data.filter(v => v.isActive);
                
                $uibModalInstance.close(result);
            };

            $scope.onClickCancel = () => {
                $uibModalInstance.dismiss('cancel');
            };
        });
    });
};
