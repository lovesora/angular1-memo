define(['app', 'js-lib'], function (app, lib) {
    app.directive('rippleIcon', function () {
        let updateCssRules = (primaryColor, accentColor) => {
            let cssRules = null;
            for (let style of document.styleSheets) {
                if (style.href && style.href.indexOf('ripple-icon.css') > -1) {
                    cssRules = Array.prototype.slice.call(style.cssRules);
                    break;
                }
            }
            
            if (null !== cssRules) {
                cssRules.map(v => {
                    if (v.selectorText === '.icon-ripple__line--active') {
                        v.style.backgroundColor = primaryColor;
                    }
                    if (v.selectorText === '.icon-ripple__circle') {
                        v.style.borderColor     = accentColor;
                        v.style.backgroundColor = accentColor;
                    }
                    if (v.selectorText === '.icon-ripple__line') {
                        v.style.backgroundColor = accentColor;
                    }
                });
            }
        };

        let guid = function guid() {
            function S4() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
            return ('_'+S4()+S4()+'-'+S4()+'-'+S4()+'-'+S4()+'-'+S4()+S4()+S4());
        };

        let enter = (id) => {
            let selector = document.querySelector(`#${id}`);
            
            // circle
            lib.$.addClass(selector, 'icon-ripple__circle--active');
            
            // line
            selector.querySelectorAll('p').forEach(ele => {
                lib.$.addClass(ele, 'icon-ripple__line--active');
            });
        };
        
        let leave = (id) => {
            let selector = document.querySelector(`#${id}`);

            // circle
            lib.$.removeClass(selector, 'icon-ripple__circle--active');

            //line
            selector.querySelectorAll('p').forEach(ele => {
                lib.$.removeClass(ele, 'icon-ripple__line--active');
            });
        };
        
        return {
            scope: true,
            link: function (scope, element, attrs) {
                scope.$parent[attrs.trigger] = (tri, id) => {
                    switch (tri) {
                        case 'enter': {
                            enter(id || scope.id);
                            break;
                        }
                        case 'leave': {
                            leave(id || scope.id);
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                };
            },
            controller: function ($scope, $attrs) {
                $scope.id = guid();
                
                updateCssRules($attrs.primaryColor, $attrs.accentColor);
            },
            restrict: 'E',
            template: `
                <div class="icon-ripple__circle" id="{{id}}">
                    <p class="icon-ripple__line"></p>
                    <p class="icon-ripple__line icon-ripple__line--vertical"></p>
                </div>
            `
        };
    });
});
