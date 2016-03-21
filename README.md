# animationInMobile
<h3>An swipe animation plugin in project Mobile</h3>
<p>此插件为移动端3D banner滑动效果插件，本来是为项目中的某个需求点制作，后来封装成了一个小插件。因为在很多地方都没有找到适合移动端的banner查看插件，或者有也是需要引入巨大的jq文件为基础的插件，所以自己动手做了一个，当然也是以第三方库zepto为基础的。该插件可以作为模块引入，只需要做少量的代码改写就好了。切换的效果的话可以更具自己的需求自行编写，这里默认的效果文件在css文件夹里面：是从前到后的渐变翻转效果。全局只有一个api</p>
<h3>API</h3>
<p>slide: (target/*滑动的目标元素*/, direction/*方向*/)</p>
<h3>注意事项</h3>
在编写css时请遵守文档中的备注规范，以navOut-方向的命名方法来命名动画的class，如：左侧滑动渐入的动画 navOut-left 左侧渐出的动画 navIn-left 右侧渐入的动画 navOut-right 右侧渐出的动画 navIn-right。
