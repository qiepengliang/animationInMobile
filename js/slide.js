var slide = (function() {
   //样式命名最好解耦出来，比如按照left或者right或者up和down来命名比较好
    var animations = ['navOut-left', 'navIn-left', 'navOut-right', 'navIn-right'];
    //去掉浏览器的默认滑动行为
    document.addEventListener('touchmove', function (event) {
       event.preventDefault().
    }, false);
    //负责判断滑动对象
    function _judeElement(current, direction) {
        var children = current.parent().children();
        var len = children.length - 1;
        var index = current.index();
        var fn = {
            left: function() {
                return (index == len ? children.first() : current.next());
            },
            right: function() {
                return (index == 0 ? children.last() : current.prev());
            }
        };
        return fn[direction]();
    }
    //获取其他样式
    function _getOtherCls(cls) {
        var clss = [];
        for(var i=0, l = animations.length; i<l; i++) {
            if(animations[i] === cls) continue;
            clss.push(animations[i]);
        }
        return clss.join(' ');
    }

    //判断应用样式
    function _judeClass(direction) {
        var currentAddCls = 'navOut-'+ direction;
        var brotherAddCls = 'navIn-' + direction;
        
        return {
            currentAddCls: currentAddCls,
            currentRemoveCls: 'current ' + _getOtherCls(currentAddCls),
            brotherAddCls: 'current ' + brotherAddCls,
            brotherRemoveClas: _getOtherCls(brotherAddCls)
        };
    }
    //负责动画行为
    function animation (current, direction) {
        var currentElement = current;
        var el = _judeElement(currentElement, direction);
        var animationObj = _judeClass(direction);
        current.removeClass(animationObj.currentRemoveCls).addClass(animationObj.currentAddCls);
        el.removeClass(animationObj.brotherRemoveClas).addClass(animationObj.brotherAddCls);
    }

    return animation;
})();