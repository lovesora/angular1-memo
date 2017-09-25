define(['app'], function (app) {
    app.controller('UiSelectController', function ($scope) {
        $scope.itemArray = [
            {id: 1, name: 'first'},
            {id: 2, name: 'second'},
            {id: 3, name: 'third'},
            {id: 4, name: 'fourth'},
            {id: 5, name: 'fifth'},
        ];
    
        $scope.selected = {
            value: $scope.itemArray[0]
        };

        $scope.onRemoveItem = ($item, $model) => {
            console.log($item, $model);
        };

        $scope.onSelectItem = ($item, $model) => {
            console.log($item, $model);
        };

    });
});
