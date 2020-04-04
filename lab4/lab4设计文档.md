# 设计文档

### 导航栏

> 反色导航栏
>
> ```htmlh t
> <nav class="navbar navbar-inverse" role="navigation">
> ```
>
> 用户：新建`<ul class="nav navbar-nav nav-pills navbar-right">`包裹下拉菜单使**用户栏始终在导航栏的右侧**。
>
> 图标：`<span class="glyphicon glyphicon-cloud-upload"></span>`
>
> **响应式的导航栏**：
>
> 折叠的内容包裹在带有 class **.collapse、.navbar-collapse** 的 <div> 中，三个带有 class **.icon-bar** 的 <span> 创建**汉堡按钮**，在窗口变小时切换为 **.navbar-collapse** <div> 中的元素。
>
> ```
> <button type="button" class="navbar-toggle" data-toggle="collapse"
>         data-target="#example-navbar-collapse">
>     <span class="sr-only">切换导航</span>
>     <span class="icon-bar"></span>
>     <span class="icon-bar"></span>
>     <span class="icon-bar"></span>
> </button>
> 
> <div class="collapse navbar-collapse" id="example-navbar-collapse"> 
> ...</div>
> ```

### 轮播

> 轮播在页面加载时就开始动画播放。
>
> ```
> <div id="myCarousel" class="carousel slide" data-ride="carousel">
> ```
>
> 通过 **.item** 内的 **.carousel-caption** 元素向幻灯片添加标题。
>
> ```
> <div class="carousel-caption">花</div>
> ```
>
> 属性 **data-slide** 接受关键字 *prev* 或 *next*，用来改变幻灯片相对于当前位置的位置。

### 图片显示

> 利用`<div class="row"> <div class="col-md-3 col-sm-6 col-xs-12">`**网格系统**为图片布局。
>
> 使用`<div class="clearfix visible-sm"></div>、<div class="clearfix visible-xs"></div>`控制图片**中型设备台式电脑（≥992px）显示一行四张**，**小型设备平板电脑（≥768px）显示一行两张**，**超小设备手机（<768px）显示一行一张**。
>
> 利用纯css控制图片注释的显示格式——**显示两行，多余文字用省略号代替**。

### 注脚

>注脚使用两个`<div class="row">`分两行。
>
>上面一行利用`<div class="row"> <div class="col-md-4 text-center">`显示为**三列居中**。
>
>下面一行利用`<div class="row text-right">`**居右**。

### 图片

![截图](images/normal/电脑端.png)

![截图](images/normal/移动端.png)