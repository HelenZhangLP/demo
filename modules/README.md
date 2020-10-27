# demo-commonJs
> 演示 commonJs 的相关使用案例
`注意`： 这里的相关案例要在 node 环境下执行

# demo-es6module
```javascript
// example.js
export const a = 'this is a variable';
export const fn = () => {
  return 'this is a arrow function';
}
```
---
```javascript
// index.js
import {a,fn} from './example';
let b = fn();
console.log(a, b);
```
## `SyntaxError: Cannot use import statement outside a module`
> 不支持 import，需要 babel 转义

[参考解决](https://wangdoc.com/es6/intro.html)
