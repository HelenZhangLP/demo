
## demo1
> 服务启动打开 index 页面
```javascript
// 定义路由规则
app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
```