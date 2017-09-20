// angular-ui-bootstrap依赖的是bootstrap3，bootstrap4不支持
define(['app', 'bootstrap3'], function (app) {
    app.controller('ModalController', function ($scope, $uibModal) {
        let data = 'created by ModalController';
        
        $scope.onClickOpenModal = () => {
            let model = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modal.html',
                controller: 'ModalBodyController',
                resolve: {
                    // 数据需要以函数形式传递，不然会报错
                    data: () => data
                }
            });

            model.result
                .then(result => {
                    console.log(`result: ${result}`);
                })
                .catch(reason => {
                    console.log(`reason: ${reason}`);
                });

            model.opened
                .then(r => {
                    console.log('opened', r);
                });

            model.closed
                .then(() => {
                    console.log('closed');
                });

            model.rendered
                .then(() => {
                    console.log('rendered');
                });
        };
    });

    app.controller('ModalBodyController', function ($scope, $uibModalInstance) {
        $scope.header = 'header';
        $scope.body   = 'body';

        $scope.onClickOk = () => {
            $uibModalInstance.close('ok');
        };

        $scope.onClickCancel = () => {
            $uibModalInstance.dismiss('cancel');
        };

    });
});
