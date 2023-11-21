
## demo1
> 服务启动打开 index 页面
```javascript
// 定义路由规则
app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
```

## demo2
> 手写原生 jsonp 和 jquery 发送 JSONP 案例