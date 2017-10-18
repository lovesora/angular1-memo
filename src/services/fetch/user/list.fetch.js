define(['app', 'constant.api', 'ajax'], (app, api) => {
    app.factory('UserListFetch', function (ajax) {
        let fetch = {};
        
        fetch.getUserList = () => {
            let config = api.user.list;

            return ajax.request(config);
        };

        return fetch;
    });
});
