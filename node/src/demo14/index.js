const fs = require('fs')
const path = require('path')
// 文件读取
// fs.readFile('context.txt', (err, data) => {
//     if(err) throw err
//     console.log(data.toString())
// })

// Promise 封装读取文件
let promise = new Promise((resolve, reject) => {
    fs.readFile('context.txt', (err,data) => {
        if(err) reject(err)
        resolve(data)
    })
})

// then 方法对结果进行处理
promise.then(data=>{
    console.log(data.toString())
},err=>{
    console.log(err)
})