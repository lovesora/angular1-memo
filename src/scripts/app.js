//---------bootstrap v4 require solution
// define(['popper'], function (Popper) {
//     window.Popper = Popper;
//     require(['bootstrap']);
//     return angular.module('app');
// });

define(['routes'], function (routes) {
    // 模块依赖
    let angularUi = ['ui.router', 'ui.bootstrap', 'ui.select'];
    let app = angular.module('app', ['ngRequire'].concat(angularUi));

    app.config(function ($urlRouterProvider, $stateProvider, $requireProvider, uiSelectConfig) {
        // 使用when来对一些不合法的路由进行重定向
        $urlRouterProvider.otherwise('/');

        let r = routes();
        for (let k in r) {
            $stateProvider.state(k, {
                url: r[k].u,
                templateUrl: r[k].t,
                controller: r[k].c,
                resolve: {
                    deps: $requireProvider.requireJS(r[k].d)
                }
            }); 
        }

        uiSelectConfig.theme = 'bootstrap';
    });

    return app;
});
