var slide = (function() {
   //样式命名最好解耦出来，比如按照left或者right或者up和down来命名比较好
    var animations = ['navOut-left', 'navIn-left', 'navOut-right', 'navIn-right', 'no-animation-left', 'no-animation-right'];
    //方向对照表
    var contraposition = {
        left: 'right',
        right: 'left',
        up: 'down',
        down: 'up'
    }
    //去掉浏览器的默认滑动行为
    document.addEventListener('touchmove', function (event) {
       event.preventDefault();
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

    //为相邻的元素添加位置
    function changePosition(current, direction) {
        var thisDirection = contraposition[direction];
        var el = _judeElement(current, thisDirection);
        el[0].className = 'no-animation-' + thisDirection;
    }

    //为相邻的元素添加动画
    function changeAnimation(current, direction) {
        var el = _judeElement(current, direction);
        var animationObj = _judeClass(direction);
        current.removeClass(animationObj.currentRemoveCls).addClass(animationObj.currentAddCls);
        el.removeClass(animationObj.brotherRemoveClas).addClass(animationObj.brotherAddCls);
    }

    //负责动画行为
    function animation (current, direction) {
        changeAnimation(current, direction);
        if(current.parent().children().length > 2) {
            //重置相邻元素的位置
            changePosition(current, direction);
        }
    }

    return animation;
})();