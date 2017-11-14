/**
 * Created by Administrator on 2017/1/10.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    /*我们可以使用循环生成该对象数组：依次注入*/
    var datasArr = [
        {
            value: 100,
            color: "red",
            disc: "这是一段介绍1"
        }, {
            value: 20,
            color: "green",
            disc: "这是一段介绍2"
        }, {
            value: 30,
            color: "blue",
            disc: "这是一段介绍3"
        }, {
            value: 40,
            color: "black",
            disc: "这是一段介绍4"
        }, {
            value: 50,
            color: "deeppink",
            disc: "这是一段介绍5"
        }, {
            value: 60,
            color: "gray",
            disc: "这是一段介绍6"
        }
        , {
            value: 70,
            color: "skyblue",
            disc: "这是一段介绍7"
        }
    ];

    var colorsArr = null;
    /*导入颜色数组：149中颜色*/
    var colorsArr =
        ( "aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue," +
        "blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk," +
        "crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta," +
        "darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray," +
        "darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick," +
        "floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey," +
        "honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon," +
        "lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink," +
        "lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow," +
        "lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple," +
        "mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue," +
        "mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid," +
        "palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue," +
        "purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna," +
        "silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,transparent," +
        "tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen" ).split(',');
    /*    var otherObj = {
     x0: canvas.width * 0.5,
     y0: canvas.height * 0.5,
     radius: 100,
     time: 10,
     speed: 100,
     /!*控制器：true:使用动画，false：不使用动画，控制下面startAll是否执行,false下面控制器无效*!/
     useAnimate: true,
     /!*控制器：true:同时动画，false：挨个动画*!/
     startAll: true,
     disLength: 50,
     lineWidth: 5,
     fontWidth: 1,
     discFont: "20px 黑体",
     }*/


    /*开始操作表格*/
    var aA = document.getElementsByTagName("a");
    for (var i = 0; i < aA.length; i++) {
        aA[i].onclick = function () {
//						this.parentNode.parentNode.remove();//有兼容性问题
            tbody.removeChild(this.parentNode.parentNode);
        };
    }

    var add = document.getElementById("add");
    var submit = document.getElementById("submit");
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbody");

    var addTen = document.getElementById("addTen");
    var deleteAll = document.getElementById("deleteAll");
    var deleteOne = document.getElementById("deleteOne");

    var id = 0;
    add.onclick = function () {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);

        var td1 = document.createElement("td");
        td1.innerText = ++id;
        tr.appendChild(td1);

        var td2 = document.createElement("td");
        td2.innerHTML = '<input type="text" value="' + id + '"/>';
        tr.appendChild(td2);

        var td3 = document.createElement("td");
        td3.innerHTML = '<input type="text" value="这是一段介绍' + id + '"/>';
        tr.appendChild(td3);

        var td4 = document.createElement("td");
        td4.innerHTML = '<input type="color" />';
        tr.appendChild(td4);

        var td5 = document.createElement("td");
        tr.appendChild(td5);
        var a = document.createElement("a");
        a.innerHTML = "delete";
        a.href = "javascript:;";
        td5.appendChild(a);
        a.onclick = function () {
            tbody.removeChild(this.parentNode.parentNode);
            this.parentNode.parentNode.remove();//可以运行
            id--;
        };

    };
    /*表格执行完毕*/

    /*获取数据——start*/
    var set = document.getElementById("set");
    var setTrs = set.getElementsByTagName("tr");

    /*生成对象并注入*/
    var newDatasArr = [];
    submit.onclick = function () {
        var canvasWidth = document.getElementById("canvasWidth").value;
        var canvasHeight = document.getElementById("canvasHeight").value;
        canvas.width = canvasWidth ? canvasWidth : canvas.width;
        canvas.height = canvasHeight ? canvasHeight : canvas.height;
        var x0 = document.getElementById("x0").value;
        var y0 = document.getElementById("y0").value;
        var radius = document.getElementById("radius").value;
        var time = document.getElementById("time").value;
        var speed = document.getElementById("speed").value;
        var disLength = document.getElementById("disLength").value;
        var lineWidth = document.getElementById("lineWidth").value;
        var discFont = document.getElementById("discFont").value;

        //var useAnimate = document.getElementById("useAnimate").value;
        //var startAll = document.getElementById("startAll").value;
        //var haveSaw = document.getElementById("haveSaw").value;
        //var useRandomColor = document.getElementById("useRandomColor").value;


        //var startAll = ((setTrs[1].children)[2].children)[0].value;
        /*使用沙盒模式获取数值：radio--防止用户随意输入--严格类型的闭包*/
        var startAll = (function () {
            var num = document.getElementById("startAll").getElementsByTagName("input");
            for (var i = 0; i < num.length; i++) {
                if (num[i].checked) {
                    return num[i].value;
                }
            }
        })();

        //var useAnimate = ((setTrs[0].children)[2].children)[0].value;
        var useAnimate = (function () {
            var num = document.getElementById("useAnimate").getElementsByTagName("input");
            for (var i = 0; i < num.length; i++) {
                if (num[i].checked) {
                    return num[i].value;
                }
            }
        })();

        var haveSaw = (function () {
            var num = document.getElementById("haveSaw").getElementsByTagName("input");
            for (var i = 0; i < num.length; i++) {
                if (num[i].checked) {
                    return num[i].value;
                }
            }
        })();

        var useRandomColor = (function () {
            var num = document.getElementById("useRandomColor").getElementsByTagName("input");
            for (var i = 0; i < num.length; i++) {
                if (num[i].checked) {
                    return num[i].value;
                }
            }
        })();

        /*对象属性的注如都先使用了三元表达式进行判断，然后再进行注入*/
        /*由于dom.getXXX.value获取过来的数据都是字符串,所以我们数字类型的需要先强转一下再进行判断*/
        var otherObj = {
            x0: x0 ? x0 : canvas.width * 0.5,
            y0: y0 ? y0 : canvas.height * 0.5,
            radius: radius ? parseInt(radius) : 200,
            time: time ? parseInt(time) : 10,
            speed: speed ? parseInt(speed) : 100,
            /*控制器：true:使用动画，false：不使用动画，控制下面startAll是否执行,false下面控制器无效*/
            useAnimate: useAnimate == "true" ? true : false,
            /*控制器：true:同时动画，false：挨个动画：one by one*/
            startAll: startAll == "true" ? true : false,
            disLength: disLength ? parseInt(disLength) : 50,
            lineWidth: lineWidth ? parseInt(lineWidth) : 5,
            fontWidth: 1,
            discFont: discFont ? discFont : "20px 黑体",
            haveSaw: haveSaw == "true" ? true : false,
            useRandomColor: useRandomColor == "true" ? true : false
        }
        //console.log(otherObj);

        var newRandomColorsArr = [];
        newDatasArr = [];
        var trs = tbody.getElementsByTagName("tr");
		/*重新包装：为了方便后面操作，需要创建新数组并将原伪数组数据注入--伪数组很多方法都不能使用。如push.forEach等*/
        for (var i = 0; i < trs.length; i++) {
            newDatasArr[i] = {
                /*注意：dom节点获取的是字符串需要现将其强转为数字类型的*/
                value: parseInt(((trs[i].children)[1].children)[0].value),
                disc: ((trs[i].children)[2].children)[0].value,
                /*判断是否使用随机颜色*/
                color: useRandomColor == "true" ? colorsArr[Math.floor(Math.random() * 149)] : ((trs[i].children)[3].children)[0].value
            };
        }
        //console.log(newDatasArr);
        datasArr = newDatasArr;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DramRandomMap(canvas, datasArr, colorsArr, otherObj);
    };
    /*获取数据——end*/


    addTen.onclick = function () {
        var addNum = document.getElementById("addNum").value;
        for (var i = 0; i < addNum; i++) {
            add.click();
        }
    };
    deleteAll.onclick = function () {
        var datasArr = tbody.getElementsByTagName("tr");
        var length = datasArr.length;
		if(length<=0){
			alert("没有数据,无法删除");
			/*增强用户体验：一定要进行判断*/
			return;
		}
        while (true) {
			/*小技巧：.onlick立即执行函数就是.click()*/
            (((datasArr[0]).children)[4]).children[0].click();
            length--;
            if (length == 0) {
                break;
            }
        }
    }

    deleteOne.onclick = function () {
        var datasArr = tbody.getElementsByTagName("tr");
		var length = datasArr.length;
		if(length<=0){
			alert("没有数据,无法删除");
			return;
		}
        (((datasArr[datasArr.length - 1]).children)[4]).children[0].click();
    };
    //DramRandomMap(canvas, datasArr, colorsArr, otherObj);

}

/*画随机饼状图的高级封装*/
/*版本：1.0
 时间：2017.01.08

 新版本：1.1
 时间：2017.01.09
 内容：支持直接生成静态图。
 * */
/*参数详解：
 canvas:canvas 的DOM对象
 ---
 dataArr:数据数组。内部每一个成员都是对象
 ---var datasArr=[];
 colorArr:使用颜色的数组。不传参数或传null,将使用系统自带的颜色数组。
 ---var colorsArr=[];
 otherObj:一些其他的对象属性。
 ---var otherObj={
 x0:canvas.width*0.5,---圆圆心坐标x0,y0
 y0:canvas.height*0.5,-
 radius:500,//--不传该值使用默认值canvas.width和canvas.height中的最小值*0.5
 timer:10 ---改动画分几次完成
 speed：200,动画之间的间隔。
 useAimate:true,----boolean:是否使用动画；true:使用动画。false:不使用动画，直接画出来
 startAll:true, ---boolean，是否同时画画
 disLength:100,---每一段圆弧上的终点向外延伸的距离。
 lineWidth:5,
 discFont:"20px Consolas"，
 fontWidth：1px ---该属性无法控制文字粗细，请使用font属性控制。
 };
 * */

/*核心画图动画函数：所有的画图都依赖此函数*/
function DramRandomMap(canvas, datasArr, colorsArr, otherObj) {

    var ctx = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var colorsArr = colorsArr;
    var time = otherObj.time;
    var speed = otherObj.speed;
    var radius = otherObj.radius;
    var x0 = otherObj.x0;
    var y0 = otherObj.y0;
    var startAll = otherObj.startAll;
    var disLength = otherObj.disLength;
    var lineWidth = otherObj.lineWidth;
    var discFont = otherObj.discFont;
    var fontWidth = otherObj.fontWidth;
    var useAnimate = otherObj.useAnimate;
    var haveSaw = otherObj.haveSaw;
    var useRandomColor = otherObj.useRandomColor;

    if (radius == null || radius == undefined) {
        radius = canvasWidth > canvasHeight ? canvasHeight * 0.5 : canvasWidth * 0.5;
    }

    /*求datasArr value的和*/
    var datasValueSum = 0;
    datasArr.forEach(function (v, i) {
        datasValueSum += v.value;
    });
    //console.log(datasValueSum);
    /*制作新数组：将数值value转化为角度值*/
    var datasArrAngle = datasArr.map(function (v, i) {
        v.value = v.value * 360 / datasValueSum;
        var newObj = v;
        return newObj;
    });

    draw();

    /*开始进行画图--分好角度同步进行*/
    function draw() {

        /*设置起始弧度为-90*/
        var startAngle = -90;
        /*对datasArrAngle进行处理:数组对象：注入属性角度值start，end*/
        var newDatasArrAngle = datasArr.map(function (v, i) {
            v.start = startAngle;
            v.end = v.start + v.value;
            startAngle = startAngle + v.value;
            var newObj = v;
            return newObj;
        });

        /*是否使用动画来执行*/
        if (useAnimate) {
            if (startAll) {
                /*同时画图：*/
                for (var i = 0; i < newDatasArrAngle.length; i++) {
                    var dataSimpleObj = newDatasArrAngle[i];
                    drawAll(dataSimpleObj, useAnimate);
                }
            } else {
                /*一个接一个画图*/
                var iCount = 0;
                /*关键点：通过在外部声明变量来控制参数的变化，避免计时器异步功能造成的不可控影响*/
                var timerInterval = setInterval(function () {
                    if (iCount < newDatasArrAngle.length) {
                        var dataSimpleObj = newDatasArrAngle[iCount];
                        drawAll(dataSimpleObj, useAnimate);
                        /*由于js两种计时器都是异步的我们不方便控制，所以使用函数封装使用*/
                        iCount++;
                    } else {
                        clearInterval(timerInterval);
                    }
                }, time * speed);
            }
        } else {
            /*画静态图形：*/
            for (var i = 0; i < newDatasArrAngle.length; i++) {
                var dataSimpleObj = newDatasArrAngle[i];
                drawAll(dataSimpleObj, useAnimate);
            }
        }
    }

    /*动态画图专用函数--单个画图:同时执行：注意静态画图不能使用该方法*/
    function drawAll(dataSimpleObj, useAnimate) {
        if (useAnimate) {
            var timerTimeout = setTimeout(function () {
                var step = dataSimpleObj.value / time;
                var start = dataSimpleObj.start;
                var end = dataSimpleObj.end;

                /*此处开始画标注disc*/
                ctx.beginPath();
                ctx.strokeStyle = dataSimpleObj.color;
                ctx.fillStyle = dataSimpleObj.color;
                ctx.lineWidth = lineWidth;
                ctx.font = discFont;
                ctx.moveTo(x0 + radius * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)), y0 + radius * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)));
                ctx.lineTo(x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)), y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)));
                ctx.moveTo(x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)), y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)));
                var endPointX = 0;
                var endPointY = 0;
                if ((dataSimpleObj.start + dataSimpleObj.end) * 0.5 >= -90 && (dataSimpleObj.start + dataSimpleObj.end) * 0.5 <= 90) {

                    endPointX = ctx.measureText(dataSimpleObj.disc).width + x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                    endPointY = y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                    ctx.lineTo(endPointX, endPointY);
                    ctx.textAlign = "right";
                    ctx.textBaseline = "bottom";
                } else {
                    endPointX = -ctx.measureText(dataSimpleObj.disc).width + x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                    endPointY = y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                    ctx.lineTo(endPointX, endPointY);
                    ctx.textAlign = "left";
                    ctx.textBaseline = "bottom";
                }
                ctx.closePath();
                ctx.stroke();

                ctx.beginPath();
                ctx.strokeStyle = dataSimpleObj.color;
                ctx.fillStyle = dataSimpleObj.color;
                ctx.lineWidth = fontWidth;
                ctx.fillText(dataSimpleObj.disc, endPointX, endPointY - lineWidth);
                ctx.closePath();
                ctx.stroke();
                ctx.fill();

                /*下面开始画图形*/
                var timeCount = 0;
                var timerInterval = setInterval(function () {
                    if (timeCount < time) {
                        ctx.beginPath();
                        ctx.fillStyle = dataSimpleObj.color;
                        ctx.strokeStyle = dataSimpleObj.color;
                        ctx.moveTo(x0, y0);

                        if (haveSaw) {
                            /*1.第一种方式最完美的形式（我所理解的）：但是有bug就是有白边（锯齿）*/
                            ctx.arc(x0, y0, radius, toRadian(start), toRadian(start + step));
                        } else {
                            /*3.第三种方式：通过改变开始点：来消除白边--虽然会达到目的，也不会改变数值--但是不是我理想中的形式*/
                            ctx.arc(x0, y0, radius, toRadian(dataSimpleObj.start), toRadian(start + step));
                        }

                        /*2.第二种方式：通过减小1度开始角度，增大一度结束角度来消除白边---虽然可以达到目的（清除白线），但是也改变了数值*/
//                        ctx.arc(x0, y0, radius, toRadian(start-1), toRadian(start + step+1));

                        /*简单讲述一下出现这种状况的原因：
                         1.白边即为锯齿。当角度不和x轴水平方向或者y轴垂直方向平行时；就会出现锯齿。
                         解决方案：暂时无法解决。可以使用上面2,3两种方式替代解决。设置lineWidth：无法解决此问题。
                         * */

                        start = start + step;
                        timeCount++;
                        ctx.closePath();
                        /*下一行代码你注释看看*/
                        ctx.fill();

                    } else {
                        clearInterval(timerInterval);
                    }
                }, speed);

            }, 1000);
        } else {
            /*画静态图*/
            var start = dataSimpleObj.start;
            var end = dataSimpleObj.end;

            /*此处开始画标注disc*/
            ctx.beginPath();
            ctx.strokeStyle = dataSimpleObj.color;
            ctx.fillStyle = dataSimpleObj.color;
            ctx.lineWidth = lineWidth;
            ctx.font = discFont;
            ctx.moveTo(x0 + radius * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)), y0 + radius * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)));
            ctx.lineTo(x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)), y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)));
            ctx.moveTo(x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)), y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5)));
            var endPointX = 0;
            var endPointY = 0;
            if ((dataSimpleObj.start + dataSimpleObj.end) * 0.5 >= -90 && (dataSimpleObj.start + dataSimpleObj.end) * 0.5 <= 90) {

                endPointX = ctx.measureText(dataSimpleObj.disc).width + x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                endPointY = y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                ctx.lineTo(endPointX, endPointY);
                ctx.textAlign = "right";
                ctx.textBaseline = "bottom";
            } else {
                endPointX = -ctx.measureText(dataSimpleObj.disc).width + x0 + (radius + disLength) * Math.cos(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                endPointY = y0 + (radius + disLength) * Math.sin(toRadian((dataSimpleObj.start + dataSimpleObj.end) * 0.5));
                ctx.lineTo(endPointX, endPointY);
                ctx.textAlign = "left";
                ctx.textBaseline = "bottom";
            }
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = dataSimpleObj.color;
            ctx.fillStyle = dataSimpleObj.color;
            ctx.lineWidth = fontWidth;
            ctx.fillText(dataSimpleObj.disc, endPointX, endPointY - lineWidth);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();

            /*下面开始画图形*/

            ctx.beginPath();
            ctx.fillStyle = dataSimpleObj.color;
            ctx.strokeStyle = dataSimpleObj.color;
            ctx.moveTo(x0, y0);

            ctx.arc(x0, y0, radius, toRadian(start), toRadian(end));

            ctx.closePath();
            ctx.fill();
        }
    }

	/*封装公共函数：公共函数放在外面方便调用，但一定要放在主方法里面*/
    /*弧度制转角度制函数*/
    function toAngle(radian) {
        return radian * 180 / Math.PI;
    }

    /*角度制转弧度制函数*/
    function toRadian(angle) {
        return angle * Math.PI / 180;
    }
}