define(['app', 'css!directives/left-sidebar/left-sidebar.css'], function (app) {
    app.directive('leftSidebar', [function () {
        let config = [{
            title: 'Button',
            href: '/button',
            children: [{
                title: 'Button Group',
                href: '/button/group'
            }]
        }, {
            title: 'Dropdown',
            href: '/dropdown'
        }, {
            title: 'Select',
            href: '/select'
        }, {
            title: 'Collapse',
            href: '/collapse'
        }, {
            title: 'Modal',
            href: '/modal'
        }, {
            title: 'Carousel',
            href: '/carousel',
            children: [{
                title: 'Swiper',
                href: '/carousel/swiper'
            }]
        }, {
            title: 'Jquery',
            href: '/jquery',
            children: [{
                title: 'Plugins',
                href: '/jquery/plugins',
                children: [{
                    title: 'Waypoints',
                    href: '/jquery/plugins/waypoints'
                }]
            }]
        }, {
            title: 'CSS3 Animation',
            href: '/css3',
            children: [{
                title: 'Icon',
                href: '/css3/icon'
            }]
        }];
        
        let style = {
            ls: {
                width: '200px'
            },
            arrow: {
                width: '10px'
            }
        };
        

        // 获取html template
        let getTpl = (data, deep = 0) => {
            if (!Array.isArray(data)) {
                return '';
            }
            
            let tpl = '<ul>';
            data.map(item => {
                tpl += `<li><a ng-click="onClickLink($event)" style="padding-left: ${deep*15}px" href="#${item.href || ''}">${item.title}</a>${getTpl(item.children, deep + 1)}</li>`;
            });
            tpl += '</ul>';
            return tpl;
        };
        let appendCollapse = (str) => {
            let collapse = '<div ng-click="onClickToggle()" class="left-sidebar__arrow"><div><i class="fa fa-angle-left" aria-hidden="true"></i><div></div>';
            return str + collapse;
        };

        // 动画
        let animation = {
            collapse() {
                let ls = $('left-sidebar'); 

                // 改变<left-sidebar></left-sidebar>宽度
                ls.css('width', style.arrow.width)
                    .css('border-radius', '0 10px 10px 0');

                // 菜单动画
                ls.find('> ul').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');

                // 箭头栏动画
                ls.find('.left-sidebar__arrow')
                    .css('border-radius', '0 10px 10px 0')
                    .css('cursor', 'e-resize');

                // 箭头动画
                ls.find('.left-sidebar__arrow > div').css('transform', 'rotate(180deg)'); 

                // .app-container__content内容动画
                $('.app-container__content').css('left', style.arrow.width);
            },
            expand() {
                let ls = $('left-sidebar');
                
                // 改变<left-sidebar></left-sidebar>宽度
                ls.css('width', style.ls.width)
                    .css('border-radius', '0');

                // 菜单动画
                ls.find('> ul').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');

                // 箭头栏动画
                ls.find('.left-sidebar__arrow')
                    .css('border-radius', '10px 0 0 10px')
                    .css('cursor', 'w-resize');

                // 箭头动画
                ls.find('.left-sidebar__arrow > div').css('transform', 'rotate(0deg)'); 

                // .app-container__content内容动画
                $('.app-container__content').css('left', style.ls.width);  
            }
        };
        
        
        return {
            scope: true,
            controller: function ($scope, $element, $attrs) {
                let isCollapsed = false,
                    activeLink = '';
                
                $scope.onClickLink = e => {
                    if (!activeLink) {
                        activeLink = e.currentTarget;
                    }
                    
                    activeLink.className = '';
                    activeLink = e.currentTarget;
                    activeLink.className = 'active';
                };

                $scope.onClickToggle = () => {
                    if (isCollapsed) {
                        isCollapsed = false;
                        animation.expand();
                    } else {
                        isCollapsed = true;
                        animation.collapse();
                    }
                };
            },
            restrict: 'E',
            template: appendCollapse(getTpl(config))
        };
    }]);
});
