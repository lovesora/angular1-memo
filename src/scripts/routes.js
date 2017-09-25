define(function () {
    let routes = {
        // home
        'home': {
        u: '/',
        t: 'views/home/home.html',
        c: 'HomeController',
        d: ['views/home/home.controller', 'css!views/home/home.css'],
        }, 
        // button
        'button': {
            u: '/button',
            t: 'views/button/button.html',
        }, 
        'buttonGroup': {
            u: '/button/group',
            t: 'views/button/button-group.html',
        }, 
        // dropdown
        'dropdown': {
            u: '/dropdown',
            t: 'views/dropdown/dropdown.html',
        }, 
        // select
        'select': {
            u: '/select',
            t: 'views/select/select.html',
            c: 'SelectController',
            d: ['views/select/select.controller'],
        }, 
        'ui-select': {
            u: '/select/ui-select',
            t: 'views/select/ui-select.html',
            c: 'UiSelectController',
            d: ['views/select/ui-select.controller'],
        }, 
        // modal
        'modal': {
            u: '/modal',
            t: 'views/modal/modal.html',
            c: 'ModalController',
            d: ['views/modal/modal.controller'],
        }, 
        // collapse
        'collapse': {
            u: '/collapse',
            t: 'views/collapse/collapse.html',
        }, 
        // carousel
        'carousel': {
            u: '/carousel',
            t: 'views/carousel/carousel.html',
        }, 
        'carousel-swiper': {
            u: '/carousel/swiper',
            t: 'views/carousel/swiper/swiper.html',
            c: 'CarouselSwiperController',
            d: ['views/carousel/swiper/swiper.controller', 'css!views/carousel/swiper/swiper.css'],
        }, 
        // jquery plugins
        'jquery-waypoints': {
            u: '/jquery/plugins/waypoints',
            t: 'views/jquery/plugins/waypoints/waypoints.html',
            c: 'JqueryWaypointsController',
            d: ['views/jquery/plugins/waypoints/waypoints.controller', 'css!views/jquery/plugins/waypoints/waypoints.css'],
        }, 
        // css3 animation
        'css3-icon': {
            u: '/css3/icon',
            t: 'views/css3/icon/icon.html',
            c: 'Css3IconController',
            d: ['views/css3/icon/icon.controller', 'css!views/css3/icon/icon.css'],
        }, 
        '404': {
            u: '/404',
            t: 'views/error/404.html',
        }};

    return () => routes;
});
