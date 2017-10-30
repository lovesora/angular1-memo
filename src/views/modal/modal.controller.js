// angular-ui-bootstrap依赖的是bootstrap3，bootstrap4不支持
define(['app', 'fn.modal.select'], function (app) {
    app.controller('ModalController', function ($scope, $uibModal, modalTableSelectFn) {
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

        $scope.onClickOpenModalSelect = async () => {
            let choicesData;
            try {
                choicesData = await modalTableSelectFn($uibModal, {
                    table: {
                        setting: {
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
                        },
                        data: [{
                            id: 1,
                            name: 'lovesora',
                            opt: 'opt1'
                        }, {
                            id: 2,
                            name: 'loverem',
                            opt: 'opt2'
                        }],
                        value: []
                    },
                    modal: {
                        title: 'test'
                    }
                });
            } catch (e) {
                console.log(e);
                choicesData = [];
            } finally {
                console.log(choicesData);
            }
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
