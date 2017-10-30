'use strict';

let BOWER_DIR = 'public/';
let requireConfig = {
    baseUrl: './',
    paths: {
        // ------------------ scripts ------------------
        // app
        'app': ['scripts/app'],
        'routes': ['scripts/routes'],


        // ------------------ directives ------------------
        'left-sidebar': ['directives/left-sidebar/left-sidebar.directive'],
        'ripple-icon': ['directives/ripple-icon/ripple-icon.directive'],
        'tab-horizontal': ['directives/tab/tab-horizontal.directive'],
        'ng-table-select': ['directives/table/ng-table-select.directive'],


        // ------------------ angular ------------------
        // angular
        'angular': [BOWER_DIR + 'angular/angular.min', '//cdn.bootcss.com/angular.js/1.4.6/angular.min'],
        'angular-require': [BOWER_DIR + 'angular-require/angular-require.min'],
        'angular-ui-router': [BOWER_DIR + 'angular-ui-router/release/angular-ui-router.min', '//cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.min'],
        'angular-ui-bootstrap': [BOWER_DIR + 'angular-bootstrap/ui-bootstrap-tpls.min', '//cdn.bootcss.com/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min'],
        'angular-ui-select': [BOWER_DIR + 'angular-ui-select/dist/select.min', '//cdn.bootcss.com/angular-ui-select/0.19.8/select.min'],

        // angular plugin
        'ng-table': [BOWER_DIR + 'ng-table/dist/ng-table.min', '//cdn.bootcss.com/ng-table/1.0.0/ng-table.min'],
        

        // ------------------ third part lib ------------------
        // jquery
        'jquery': [BOWER_DIR + 'jquery/dist/jquery.slim.min', '//cdn.bootcss.com/jquery/3.2.1/jquery.slim.min'],
        // jquery-plugin
        'waypoints': [BOWER_DIR + 'waypoints/lib/jquery.waypoints.min', '//cdn.bootcss.com/waypoints/4.0.1/jquery.waypoints.min'],
        
        // bootstrap
        'bootstrap3': [BOWER_DIR + 'bootstrap/dist/js/bootstrap.min', '//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min'],

        // animation
        'animate.css': ['scripts/jquery/animation'],
        'swiper': [BOWER_DIR + 'swiper/dist/js/swiper.jquery.umd.min', '//cdn.bootcss.com/Swiper/3.4.2/js/swiper.jquery.umd.min'],


        // ------------------ lib ------------------
        // js-lib
        'js-lib': [BOWER_DIR + 'lx-js-lib/src/dist/index.min'],


        // ------------------ fn ------------------
        // common
        'fn.common': 'services/fn/common.fn',
        // ng-table
        'fn.table.ngTable': 'services/fn/table/ng-table.fn',
        // modal-select
        'fn.modal.select': 'services/fn/modal/table-select.fn',


        // ------------------ services ------------------
        // common
        'ajax': 'services/common/ajax.common',

        // constant
        'constant.api': 'services/constant/api.constant',
        'constant.response': 'services/constant/response.constant',

        
        // ------------------ fetch ------------------ 
        'fetch.user.list': 'services/fetch/user/list.fetch'
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
                `css!${BOWER_DIR}angular-ui-select/dist/select.min.css`
            ]
        },

        // angular plugin
        'ng-table': {
            deps: [
                `css!${BOWER_DIR}ng-table/dist/ng-table.min.css`
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
                `css!${BOWER_DIR}font-awesome/css/font-awesome.min.css`,
                `css!${BOWER_DIR}bootstrap/dist/css/bootstrap.min.css`
            ]
        },

        // animation
        'animate.css': {
            deps: [
                `css!${BOWER_DIR}animate.css/animate.min.css`
            ]
        },
        'swiper': {
            deps: [
                'jquery',
                `css!${BOWER_DIR}swiper/dist/css/swiper.min.css`
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

                // angular plugin
                'ng-table',

                // babel
                'scripts/vendor/polyfill.min.js',
                
                // style
                'animate.css',
                'css!styles/style.css'
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
let directives = ['left-sidebar', 'ripple-icon', 'tab-horizontal'];
requirejs(['app', 'bootstrap3'].concat(directives), function () {
    angular.bootstrap(document, ['app']);
});
