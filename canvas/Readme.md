
canvas 又称为“画布”，是 HTML 核心技术之一
canvas 技术指的是使用 canvas 元素结合 JavaScript 来绘制各种图形的技术。

## Canvas vs SVG
1. Canvas 是使用 JavaScript 动态生成的
   SVG 是使用 XML 静态描述的
2. Canvas 是基于 ”位图” 适用于像素和动态渲染，图形放大会影响质量；
   SVG 是基于 “矢量”，不适用于像素处理和动态描述，图形放大不会影响质量。
3. 每次发生修改，Canvas 需要重绘，而 SVG 不需要重绘
4. Canvas 与 SVG 的关系像 ”美术与几何“

## Canvas 绘制图形需要三步：
1. 获取 Canvas 对象
2. 获取上下文环境对象 context
3. 开始绘制图形

-[ ] Notice
> Canvas 宽高可以在 css 样式中定义，也可以 html 元素属性中定义 <span color="red">在 Css 中定义的 canvas 属性无法获取 canvas 宽高</span>

## 坐标系
1. 数学坐标系， y 轴方向向上
2. W3C 坐标系， y 轴方向向下

## DEMO-1
画一条直线
## DEMO-2
绘制一个字母 z
## DEMO-3
绘制正方形和三角形
## DEMO-4
用 srokeStyle strokeRect(x,y,width,height) 绘制描边矩形
用 fillStyle, fillRect(x,y,width,height) 绘制填充矩形

```JavaScript
// get canvas
var canvas = $$('canvas')
var ctx = canvas.getContext("2d")
ctx.strokeStyle = '#399'
ctx.strokeRect(50,50,100,50);

ctx.fillStyle = '#933';
ctx.fillRect(150,150,100,100)

ctx.strokeStyle = '#933';
ctx.strokeRect(50,150,50,50)
ctx.fillStyle = '#336'
ctx.fillRect(51,151,49,49)
```
> strokeStyle 要设置在调用 strokeRect() 之前，否则不生效

## DEMO-5
用 rect() 画矩形
与 fillRect() 和 strokeRect() 的区别在于：
1. rect 画矩形需要使用 fill() 或 stroke() 进行绘制，rect 方法只负责定义坐标与长宽，而 fillRect() 与 strokeRect() 可以直接绘制矩形
2. clearRect(x,y,wdith,height) 清除矩形
```javascript
const canvas = $$('canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = '#311'
ctx.rect(50,50,50,50)
ctx.stroke()

ctx.fillStyle = '#f77'
ctx.rect(100,100,50,50)
ctx.fill()

ctx.fillStyle = 'hotPink';
ctx.fillRect(150,150,50,50)
ctx.clearRect(160,160,25,25)
```

## DEMO-6 moveTo/lineTo 画箭头
```JavaScript
ctx.moveTo(50,100)
ctx.lineTo(100,100)
ctx.lineTo(100, 75)
ctx.lineTo(125, 110)
ctx.lineTo(100, 145)
ctx.lineTo(100, 120)
ctx.lineTo(50, 120)
ctx.lineTo(50, 100)
ctx.stroke()
```

## DEMO-7 画正三角形
>
1.  圆周长 = 2πr （π->Math.PI）
2.  <span color="red">弧度是角的度量单位</span>
    一周的弧度数为 2πr/r=2π 360°角=2π弧度，1弧度约为57.3°，即57°17'44.806''
    定义：弧长等于半径的弧，其所对圆心角为1弧度（即两条射线从圆心向圆周射出，形成一个夹角正对的弧。当这段弧长正好等于圆的半径时，两条射线的夹角的弧度为1）
3.  Math.cos(x) <span color="red">x 为弧度值</span> Math.sin(x) x 同为弧度值

* beginPath() 开始一条新路径
* closePath() 关闭一条路径
```javascript
function DrawCircle(ctx) {
  var radius = 100
  var centerCoordinateX = 150
  var centerCoordianteY = 150
  var x,y
  var radian = Math.PI/180
  ctx.beginPath()
  ctx.strokeStyle = '#933'
  for (var i=0; i < 360; i++) {
    x = Math.cos(radian*i)*radius + centerCoordinateX
    y = Math.sin(radian*i)*radius + centerCoordianteY
    ctx.lineTo(x,y)
  }
  ctx.stroke()
  ctx.closePath()
}

function DrawPolygon(ctx, radius, centerCoordinateX, centerCoordinateY, color, n) {
  var x,y;
  var radian = 2*Math.PI/n
  ctx.beginPath()
  ctx.fillStyle = color
  for (var i=0; i<n; i++) {
    x = Math.cos(radian*i)*radius + centerCoordinateX
    y = Math.sin(radian*i)*radius + centerCoordinateY
    ctx.lineTo(x,y)
  }
  ctx.fill()
  ctx.closePath()
}
```

## DEMO-8 画五角星
x 轴旋转18度 与半径 100 的圆的交点为一个顶点，后面 四个 顶点，每旋转 72 度为一个顶点
x 轴旋转45度 与半径 50 的圆的交点为一个顶点，后面 四个 顶点，每旋转 72 度为一个顶点
ctx.lineTo 画出 10 个顶点
ctx.fill() 填充五角星
```javascript
function DrawFivePointedStar(ctx, radiusOuter, radiusInner, centerCoordinateX, centerCoordinateY, color) {
  var x,y,x1,y1
  ctx.beginPath()
  ctx.fillStyle = color
  for (var i=0; i<5; i++) {
    x = Math.cos((18+i*72)*Math.PI/180)*radiusOuter + centerCoordinateX
    y = Math.sin((18+i*72)*Math.PI/180)*radiusOuter + centerCoordinateY
    x1 = Math.cos((54+i*72)*Math.PI/180)*radiusInner + centerCoordinateX
    y1 = Math.sin((54+i*72)*Math.PI/180)*radiusInner + centerCoordinateY
    ctx.lineTo(x,y)
    ctx.lineTo(x1,y1)
  }
  ctx.fill()
  ctx.closePath()
}
```

## DEMO-9 画调色版
```javascript
function DrawRectPalette() {
  var canvas = $$('canvas')
  var ctx = canvas.getContext('2d')

  for(var i=0; i<6; i++) {
    for (var j=0; j<6; j++) {
      ctx.fillStyle = "rgb(" + Math.floor(255 - 42.5*i) + "," + Math.floor(255 - 42.5 * j) + ",0)"
      ctx.fillRect(j*50,i*50,50,50)
    }
  }
}

function GradientPalette() {
  var canvas = $$('canvas1')
  var ctx = canvas.getContext('2d')
  var r = 255, g=0, b=0
  for (var i=0; i<300;) {
    i +=10;
    if (i>=0 && i<100) {
      g +=10
      b +=20
      r -=10
    }
    if (i>=100 && i<200) {
      g +=10
      b +=10
    }
    if (i>200 && i<300) {
      r -=10
      g += 5
      b +=5
    }
    ctx.fillStyle = "rgb("+ r + "," + g + "," + b+ ")"
    ctx.fillRect(1*i, 0, 10, 300)
  }
```
