'use strict';

let BOWER_DIR = 'public/';
let requireConfig = {
    baseUrl: './',
    paths: {
        // app
        'app': ['scripts/app'],
        'routes': ['scripts/routes'],

        // directives
        'left-sidebar': ['directives/left-sidebar/left-sidebar.directive'],
        'ripple-icon': ['directives/ripple-icon/ripple-icon.directive'],

        // angular
        'angular': ['//cdn.bootcss.com/angular.js/1.4.6/angular.min', BOWER_DIR + 'angular/angular.min'],
        'angular-require': [BOWER_DIR + 'angular-require/angular-require.min'],
        'angular-ui-router': ['//cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.min', BOWER_DIR + 'angular-ui-router/release/angular-ui-router.min'],
        'angular-ui-bootstrap': ['//cdn.bootcss.com/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min', BOWER_DIR + 'angular-bootstrap/ui-bootstrap-tpls.min'],
        'angular-ui-select': ['//cdn.bootcss.com/angular-ui-select/0.19.8/select.min', BOWER_DIR + 'angular-ui-select/dist/select.min'],

        // bootstrap
        'jquery': ['//cdn.bootcss.com/jquery/3.2.1/jquery.slim.min'],
        'bootstrap3': ['//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min'],
        // 'popper': ['//cdn.bootcss.com/popper.js/1.12.5/umd/popper.min'],
        // 'bootstrap': ['//cdn.bootcss.com/bootstrap/4.0.0-beta/js/bootstrap.min'],

        // animation
        'animation': ['scripts/jquery/animation'],
        'swiper': ['//cdn.bootcss.com/Swiper/3.4.2/js/swiper.jquery.umd.min'],

        // jquery-plugin
        'waypoints': ['//cdn.bootcss.com/waypoints/4.0.1/jquery.waypoints.min', BOWER_DIR + 'waypoints/lib/jquery.waypoints.min'],

        // js-lib
        'js-lib': [BOWER_DIR + 'lx-js-lib/src/dist/index.min']
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
        'angular-require': {
            deps: [
                'angular'
            ],
            exports: 'angular-require'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ],
            exports: 'angular-ui-router'
        },
        'angular-ui-bootstrap': {
            deps: [
                'angular',
            ],
            exports: 'angular-ui-bootstrap'
        },
        'angular-ui-select': {
            deps: [
                'angular',
                'css!' + BOWER_DIR + 'angular-ui-select/dist/select.min.css'
            ]
        },
        
        // directives
        'ripple-icon': {
            deps: [
                'css!directives/ripple-icon/ripple-icon.css'
            ]
        },

        // bootstrap
        // 'bootstrap': {
        //     deps: [
        //         'jquery',
        //         'css!//cdn.bootcss.com/bootstrap/4.0.0-beta/css/bootstrap.min.css'
        //     ]
        // },
        'bootstrap3': {
            deps: [
                'jquery',
                'css!//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
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
          // scroll listener
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
                'angular-ui-select',
                
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

//require错误处理
require.onError = function (err) {
    console.log('require error:', err, arguments);
};

// directives
let directives = ['left-sidebar', 'ripple-icon'];
requirejs(['app', 'bootstrap3', 'animation'].concat(directives), function () {
    angular.bootstrap(document, ['app']);
});
