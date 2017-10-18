define(['app'], function (app) {
    app.constant('CONSTANT_RESPONSE_CODE_TYPE', {
        'SUCCESS': 0
    });

    app.constant('CONSTANT_ERROR_RESPONSE', {
        // 网络
        'NETWORK_CLIENT': '客户端请求错误',
        'NETWORK_SERVER': '服务器内部错误',

        // 业务
        'WRONG_RESPONSE': '服务器返回了错误的信息',

        'UNKNOWN': '未知错误'
    });
});
