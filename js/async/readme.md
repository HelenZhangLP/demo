
## AJAX
> 客户端与服务器端通信的跨域解决方案

### demo1
> 客户端与服务端通信实践，webserver 采用 express 框架

### demo1
> 服务启动打开 index 页面
```javascript
// 定义路由规则
app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
```

### demo2
> 手写原生 jsonp 和 jquery 发送 JSONP 案例，利用 script 标签的 src 属性，实现跨域。

## 手写 Promise 源码实践
```mermaid
 mindmap
 root[Promise]
  [定义Promise 构造函数]
    同步执行执行器函数
      throw Error 修改对象状态与结果值
    [resovle/reject 函数封装]
      Promise 状态只能修改一次
      修改对象状态 PromiseState
      修改对象结果值 PromiseResult
  [定义Promise.prototype.then原型方法]
    then 方法执行回调
    then 方法异步任务实现
    [then 方法执行多个回调，即：Promise.then 调用多次]
    同步 then 的返回结果
    异步 then 的返回结果
    Promise.prototype.catch 与异常穿透
    Promise.resolve 封装
    Promise.reject 封装
    Promise.all 封装
  [Promise.all 封装]
  [Promise.race 封装]
  [回调函数异步执行]
  class[class版本封装]
```