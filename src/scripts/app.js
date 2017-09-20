define(['popper'], function (Popper) {
    window.Popper = Popper;
    require(['bootstrap']);

    // 模块依赖
    let app = angular.module('app', ['ngRequire', 'ui.router', 'ui.bootstrap']);

    app.config(['$urlRouterProvider', '$stateProvider', '$requireProvider', function ($urlRouterProvider, $stateProvider, $requireProvider) {
        // 使用when来对一些不合法的路由进行重定向
        $urlRouterProvider.otherwise('/');

        $stateProvider
            // home
            .state('home', {
                url: '/',
                templateUrl: 'views/home/home.html',
                controller: 'HomeController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/home/home.controller', 'css!views/home/home.css'])
                }
            })

            // button
            .state('button', {
                url: '/button',
                templateUrl: 'views/button/button.html'
            })
            .state('buttonGroup', {
                url: '/button/group',
                templateUrl: 'views/button/button-group.html'
            })

            // dropdown
            .state('dropdown', {
                url: '/dropdown',
                templateUrl: 'views/dropdown/dropdown.html'
            })

            // select
            .state('select', {
                url: '/select',
                templateUrl: 'views/select/select.html',
                controller: 'SelectController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/select/select.controller'])
                }
            })

            // modal
            .state('modal', {
                url: '/modal',
                templateUrl: 'views/modal/modal.html',
                controller: 'ModalController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/modal/modal.controller'])
                }
            })

            // collapse
            .state('collapse', {
                url: '/collapse',
                templateUrl: 'views/collapse/collapse.html',
                contorller: 'CollapseController'
            })

            // carousel
            .state('carousel', {
                url: '/carousel',
                templateUrl: 'views/carousel/carousel.html'
            })
                // swiper
            .state('carousel-swiper', {
                url: '/carousel/swiper',
                templateUrl: 'views/carousel/swiper/swiper.html',
                controller: 'CarouselSwiperController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/carousel/swiper/swiper.controller', 'css!views/carousel/swiper/swiper.css'])
                }
            })



            // jquery plugins
            .state('jquery-waypoints', {
                url: '/jquery/plugins/waypoints',
                templateUrl: 'views/jquery/plugins/waypoints/waypoints.html',
                controller: 'JqueryWaypointsController',
                resolve: {
                    deps: $requireProvider.requireJS(['views/jquery/plugins/waypoints/waypoints.controller', 'css!views/jquery/plugins/waypoints/waypoints.css'])
                }
            })
                
            // error
            .state('404', {
                url: '/404',
                templateUrl: 'views/error/404.html'
            });
    }]);

    return app;
});
