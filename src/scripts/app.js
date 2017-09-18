define(function () {
    let app = angular.module('app', ['ngRequire', 'ui.router']);

    app.config(['$urlRouterProvider', '$stateProvider', '$requireProvider', function ($urlRouterProvider, $stateProvider, $requireProvider) {
        // 使用when来对一些不合法的路由进行重定向
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'views/home/home.html',
                controller: 'HomeController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/home/home.controller', 'css!views/home/home.css'])
                }
            })
            .state('collapse', {
                url: '/collapse',
                templateUrl: 'views/collapse/collapse.html',
                contorller: 'CollapseController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/collapse/collapse.controller', 'css!views/collapse/collapse.css'])
                }
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/error/404.html'
            });
    }]);

    return app;
});
