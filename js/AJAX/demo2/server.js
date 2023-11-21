
// 导入 web 服务 express
const express = require('express')

// 创建服务应用
const app = express()

// 定义路由规则
app.get('/customJsonp', (request, response) => {
    const data = {
        msg: '用户名已存在',
        status: 200
    }

    response.end(`handle(${JSON.stringify(data)})`)
})

app.get('/jqueryJSONP', (request, response) => {
    const data = {
        name: 'Moses',
        address: 'America'
    }

    var cb = request.query.jquery
    response.end(`${cb}(${JSON.stringify(data)})`)
})

// 启动服务
app.listen('8000', (p1, p2) => {
    console.log(`${p1, p2} the server is started`)
})