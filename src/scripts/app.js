define(['popper'], function (Popper) {
    window.Popper = Popper;
    require(['bootstrap']);

    let app = angular.module('app', ['ngRequire', 'ui.router']);

    app.config(['$urlRouterProvider', '$stateProvider', '$requireProvider', function ($urlRouterProvider, $stateProvider, $requireProvider) {
        // 使用when来对一些不合法的路由进行重定向
        $urlRouterProvider.otherwise('/');

        $stateProvider
            // home
            .state('home', {
                url: '',
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

            
            // error
            .state('404', {
                url: '/404',
                templateUrl: 'views/error/404.html'
            });
    }]);

    return app;
});
