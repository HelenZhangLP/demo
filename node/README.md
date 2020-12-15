# ./demo/demo-1
> 了解 node，使用 node api 获取计算机信息

# ./demo/demo-2
> 用 node 构建一个 web 服务

# ./demo/demo-3/

## node 工具
* nrm npm 源管理
* nvm 管理 nodeJs 版本，同 n
* nodemon 监听文件变化，自动重启服务（热启动）

## nodemon 的使用
1.  `npm i nodemon -d`
2.  package.json 配置 script `nodemon index.js`
3.  nodemon.json 配置部分监听的文件

# ./demo/demo-4
## 什么是 web 应用

## Express 在 web 应用中的作用
> node 中的一种 web 框架，处理 request and response

## ./demo/demo-4
1.  web 服务如何处理一个请求
```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```
