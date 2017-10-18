define(['angular', 'app', 'constant.response'], function (angular, app) {
    
    app.factory('ajax', function ($http, $q, CONSTANT_ERROR_RESPONSE, CONSTANT_RESPONSE_CODE_TYPE) {

        let service = {};

        /**
         * config: {
         *  method: ['GET', 'POST', 'PUT', 'DELETE'],
         *  url: '/api',
         *  data: {},
         *  params: {}
         * }
         */
        service.request = (config, restUrlParams = {}) => {
            let _config = Object.assign({}, config, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });

            angular.forEach(restUrlParams, function (paramValue, paramKey) {
                _config.url = _config.url.replace(':' + paramKey, paramValue);
            });
            
            let defer = $q.defer();
            $http(_config).then(res => {
                let data = res.data;
                let status = res.status;
                if (200 <= status && status < 300) {
                    defer.resolve(data);
                } else {
                    defer.reject(res);
                }
            }, res => {
                let status = res.status;
                if (400 <= status && status < 500) {
                    defer.reject(status + ': ' + CONSTANT_ERROR_RESPONSE.NETWORK_CLIENT);
                } else if (500 <= status && status < 600) {
                    defer.reject(status + ': ' + CONSTANT_ERROR_RESPONSE.NETWORK_SERVER);
                } else {
                    defer.reject(status + ': ' + CONSTANT_ERROR_RESPONSE.UNKNOWN);
                }
            });
            return defer.promise.then(data => {
                if (angular.isObject(data)) {
                    if (data.code === CONSTANT_RESPONSE_CODE_TYPE.SUCCESS)
                        return data.data;

                    throw data.message || CONSTANT_ERROR_RESPONSE.WRONG_RESPONSE;
                } else {
                    throw CONSTANT_ERROR_RESPONSE.UNKNOWN;
                }
            });
        };

        return service;
    });
});
