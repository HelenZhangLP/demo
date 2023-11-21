// 1. 导入 express
const express = require('express')

// 创建应用对象
let app = express()

// 创建路由规则 start
/**
 * requrest 请求报文封装
 * response 响应报文封装
 */
app.get('/server', (request, response) => {
    // 设置响应头允许跨域
    response.setHeader('Access-control-allow-Origin', '*')
    // 设置响应体
    response.send('hello express')
})

// 发送自定义请求失败
// app.post('/server', (request, response) => {
//     // 设置响应头允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.setHeader('Access-Control-Allow-Headers', '*')
//     response.send('post request\'s responseText')
// })

// app.all 接收任意类型请求
app.all('/serverPOST', (request, response) => {
    // 设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    response.send('post request\'s responseText')
})


// app.all 接收任意类型请求
app.all('/serverJSON', (request, response) => {
    // 设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    let data = {
        name: 'moses'
    }

    // response.send('post request\'s responseText')
    response.send(data)
})

app.all('/serverDelay', (request, response) => {
    response.setHeader('Access-control-Allow-Origin', '*')

    setTimeout(() => {
        response.send('请求超时')
    }, 3000);
})
// 创建路由规则 end

// 启动服务
app.listen('8080', () => {
    console.log('the server is started')
})