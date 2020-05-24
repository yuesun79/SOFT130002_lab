# lab8说明文档

### 1

disArray：是一个记录wrap left可能会出现的所有值的数组

`thisCenter()`函数：根据当前wrap的left数值大小得到当前img的顺序数值

`checkCenter()`函数：确保图片的翻页可以实现循环

`clearSpan()`函数：修改span的class属性，让所有的span背景色都不显示红色

`matchSpan()`函数：将thisCenter()得到的数值顺序与span进行匹配

`prevPic()\nextPic()`函数：真正执行向前、向后翻页的函数

> nextCenter保存相应的改变之后的顺序数值（使用checkCenter()进行选择后得到）
>
> 设置`wrap.style.left = disArray[nextCenter];`
>
> 对span进行操作：先清除`clearSpan()`;
>
> ​								再`spans[matchSpan(nextCenter)].className = "on"`设置对应span的背景色为红色



******

### 2

`startRoll()`函数：建立了一个间歇调用：2秒调用一次nextPic()翻页；

​									并为container建立了一个事件：当鼠标从container中移入时 间歇调用 停止

如下代码：让页面**刚加载完**和**鼠标从container中移出时**执行`startRoll()函数`

```
window.addEventListener("load",startRoll,false);
container.addEventListener("mouseout", startRoll, false);
```



******

### 3

for循环：给每个span设置被点击时发生的事件

`clickBtn()`函数：是span被点击时执行的函数:先`clearSpan()`；

​																				  再将wrap.style.left设置成对应的值



******

### 4

使用了jQuery

`table td`被点击时定义事件：

​	如果被点击的td不是input类的，就给td加上input这个类，并将其html内容改成`<input type="text" value="'+ $(this).text() +'" />'`，将原来td的文本换成与原来文本对应的input text输入框；

​	使用`$(this).find('input').css`在td子类中寻找input元素，并在设置input类的css样式；

​	使用下面的代码，当input失焦时，将input的父元素即td的input类移除，并将td的内容设置为input文本值或者0

```
$(this).find('input').focus().blur(function(){
    $(this).parent().removeClass('input').html($(this).val() || "");
});
```



