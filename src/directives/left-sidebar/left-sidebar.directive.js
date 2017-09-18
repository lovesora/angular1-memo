define(['app'], function (app) {
    app.directive('leftSidebar', [function () {
        let config = [{
            title: 'Collapse',
            children: [{
                title: 'Base',
                href: '/collapse',
            }, {
                title: 'Advanced',
            }]
        }, {
            title: 'Dropdown',
        }];

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
            let collapse = `<div ng-click="onClickToggle()" class="left-sidebar__arrow"><div><i class="fa fa-angle-left" aria-hidden="true"></i><div></div>`;
            return str + collapse;
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
                    let ls = $('left-sidebar');
                    if (isCollapsed) {
                        isCollapsed = false;
                        ls.css('width', '200px');
                        ls.find('> ul').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
    
                        ls.find('.left-sidebar__arrow').css('border-radius', '10px 0 0 10px');
    
                        ls.find('.left-sidebar__arrow > div').css('transform', 'rotate(0deg)'); 
    
                        $('.app-container__content').css('left', '200px'); 
                    } else {
                        isCollapsed = true;
                        ls.css('width', '10px');
                        ls.find('> ul').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
    
                        ls.find('.left-sidebar__arrow').css('border-radius', '0 10px 10px 0');
    
                        ls.find('.left-sidebar__arrow > div').css('transform', 'rotate(180deg)'); 
    
                        $('.app-container__content').css('left', '10px');
                    }
                };
            },
            restrict: 'E',
            template: appendCollapse(getTpl(config))
        };
    }]);
});
