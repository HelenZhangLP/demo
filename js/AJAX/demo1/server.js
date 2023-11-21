
// 1. 导入 express.js
const express = require('express')

// 2. 创建应用对象
const app = express()

// 3. 创建路由规则
app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// 4. 启动服务
app.listen(8000, () => {
    console.log('the server is started!')
})