define(function () {
    let host = location.origin;
    return {
        user: {
            list: {
                url: host + '/api/v1/uesr/list',
                method: 'GET',
            }
        }
    };
});
