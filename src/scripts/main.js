'use strict';

let BOWER_DIR = 'public/';
let requireConfig = {
    baseUrl: './',
    paths: {
        // app
        'app': ['scripts/app'],

        // directives
        'left-sidebar': ['directives/left-sidebar/left-sidebar.directive'],

        // angular
        'angular': ['//cdn.bootcss.com/angular.js/1.4.6/angular.min', BOWER_DIR + 'angular/angular.min'],
        'angular-ui-router': ['//cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.min', BOWER_DIR + 'angular-ui-router/release/angular-ui-router.min'],
        'angular-require': [BOWER_DIR + 'angular-require/angular-require.min'],
        'angular-ui-bootstrap': ['//cdn.bootcss.com/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min', BOWER_DIR + 'angular-bootstrap/ui-bootstrap-tpls.min'],

        // bootstrap
        'jquery': ['//cdn.bootcss.com/jquery/3.2.1/jquery.slim.min'],
        'popper': ['//cdn.bootcss.com/popper.js/1.12.5/umd/popper.min'],
        'bootstrap': ['//cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min'],
        'bootstrap3': ['//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min'],

        // animation
        'animation': ['scripts/animation'],
        'swiper': ['//cdn.bootcss.com/Swiper/3.4.2/js/swiper.jquery.umd.min'],

        // jquery-plugin
        'waypoints': [BOWER_DIR + 'waypoints/lib/jquery.waypoints.min']
    },
    map: {
        '*': {
            'css': BOWER_DIR + 'require-css/css' 
        }
    },
    shim: {
        // angular
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ],
            exports: 'angular-ui-router'
        },
        'angular-require': {
            deps: [
                'angular'
            ],
            exports: 'angular-require'
        },
        'angular-ui-bootstrap': {
            deps: [
                'angular',
            ],
            exports: 'angular-ui-bootstrap'
        },
        

        // bootstrap
        'bootstrap': {
            deps: [
                'jquery',
                'css!//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
                'css!//cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'
            ]
        },
        'bootstrap3': {
            deps: [
                'jquery',
                'css!//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
            ]
        },

        // animation
        'animation': {
            deps: [
                'css!//cdn.bootcss.com/animate.css/3.5.2/animate.min.css'
            ]
        },
        'swiper': {
            deps: [
                'jquery',
                'css!//cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css'
            ],
            exports: 'swiper'
        },
        
        // jquery plugins
        'waypoints': {
            deps: [
                'jquery'
            ],
            exports: 'waypoints'
        },

        // app
        'app': {
            deps: [
                // angular
                'angular',
                'angular-require',
                'angular-ui-router',
                'angular-ui-bootstrap',
                
                // standard
                'css!styles/standard.css',
                // layout
                'css!styles/header.css',
                'css!styles/footer.css',
                'css!styles/container.css',

                // wedget
                'css!styles/wedget.css'
            ],
            exports: 'app'
        }
    }
};

require.config(requireConfig);

//require错误处理,否则默认会去访问官网,国外很慢
require.onError = function (err) {
    console.log('require error:', err, arguments);
};

requirejs(['app', 'animation', 'left-sidebar'], function () {
    angular.bootstrap(document, ['app']);
});
