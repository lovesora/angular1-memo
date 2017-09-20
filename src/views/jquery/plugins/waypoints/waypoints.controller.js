define(['app', 'waypoints'], function (app) {
    app.controller('JqueryWaypointsController', function () {
        $('.waypoints__basis').eq(1).waypoint({
            handler: function () {
                console.log(arguments);
            },
            // 相对于顶部的垂直方向的偏移
            offset: '100%',
            context: $('.app-container__content')
        });
    });
});
