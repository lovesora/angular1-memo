define(['app'], function (app) {
    app.factory('commonFn', function () {
        let fn = {
            obj: {}
        };

        fn.obj.getPropByStr = (props, data) => {
            let result = Object.assign({}, data);
            props.split('.').map(v => {
                result = result[v];
            });
            return result;
        };

        return fn;
    });
});
