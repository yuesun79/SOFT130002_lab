
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
let disArray = ["0px","-600px","-1200px","-1800px","-2400px","-3000px","-3600px"];
let wrap = document.getElementsByClassName("wrap")[0];
let container = document.getElementsByClassName("container")[0];
let images = document.querySelectorAll(".wrap img");
let leftArrow = document.getElementsByClassName("arrow_left")[0];
let rightArrow = document.getElementsByClassName("arrow_right")[0];
let spans = document.getElementsByClassName("buttons")[0].children;


/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/

//距离对应属性，属性对应按钮

leftArrow.addEventListener("click",prevPic,false);
rightArrow.addEventListener("click",nextPic,false);
//当前img的顺序数值，0到6的数
function thisCenter() {
    for (let i = 0; i < disArray.length; i++) {
        if (wrap.style.left === disArray[i])
            return i;
    }
}
//当img顺序数值超过范围时改变他们，以继续循环
function checkCenter(num) {
 if (num === -1)
     return 4;
 else if (num === 7)
     return 2;
 else
     return num;
}
//清楚所有span的class name，即取消红色底色
function clearSpans() {
    for (let j = 0; j < spans.length; j++)
        spans[j].className = "";
}
//将img顺序数值与span对应
function matchSpan(num) {
    let spanNum;
    switch (num) {
        case 0:spanNum = 4;break;
        case 1:spanNum = 0;break;
        case 2:spanNum = 1;break;
        case 3:spanNum = 2;break;
        case 4:spanNum = 3;break;
        case 5:spanNum = 4;break;
        case 6:spanNum = 0;break;
    }
    return spanNum;
}
//函数
function prevPic() {
    let nextCenter = checkCenter(thisCenter() - 1);
    wrap.style.left = disArray[nextCenter];
    clearSpans();
    spans[matchSpan(nextCenter)].className = "on";
}
//函数
function nextPic() {
    let nextCenter = checkCenter(thisCenter() + 1);
    wrap.style.left = disArray[nextCenter];
    clearSpans();
    spans[matchSpan(nextCenter)].className = "on";
}
/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
function startRoll() {
    let count = window.setInterval(nextPic,2000);
    container.addEventListener("mouseover", function (){
            clearInterval(count)
        }
        ,false);
}

window.addEventListener("load",startRoll,false);
container.addEventListener("mouseout", startRoll, false);



/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener("click",clickBtn,false);
    function clickBtn() {
        clearSpans();
        spans[i].className = "on";
        wrap.style.left = -600 * (i + 1) + "px";

    }
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
$(function(){
//定义方法
    $('table td').click(function(){
        //定义点击事件
        if(!$(this).is('.input')){
            //如果当前不是.input类
            $(this).addClass('input').html('<input type="text" value="'+ $(this).text() +'" />');
            $(this).find('input').css({"outline":"none","height":"18px","width":"190px","font-weight":"bold","font-size":"16px"});
            $(this).find('input').focus().blur(function(){
                //当前添加类获得元素新插入一个input通过遍历获得input定义伪类，当失去焦点以后在定义一个方法
                $(this).parent().removeClass('input').html($(this).val() || "");
                //当前查找每个元素，删除掉input类获得input所有元素的值并且和0
            });
        }
    })
});

/*********************************************end*************************************/