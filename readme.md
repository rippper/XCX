本小程序技术栈： uniapp + vue + vuex + u-view + sass

页面布局采用的是flex布局

对各个模块进行了分包处理，分别包括了：
文章分包：articleCenter,
课程分包：courseCenter,
电子书分包：eBookCenter,
考试分包：examCenter,
个人中心分包：personalCenter,
培训班分包：trainCenter,
主包：pages
ps:主包快满了之后添加功能尽可能往分包放。

common文件对接口进行了封装处理，目前只封装了post方法。其他可根据以后需求进行分装。

common/plugin中添加了相关的方法分装之后需要添加方法的话可以在里面添加。

当前版本1.1.0