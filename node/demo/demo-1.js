/**
 * 用 node 获取计算机的信息
 */

// 引入 os 操作系统模块
const os = require('os');

// 获取 cpu 信息
const cpus = os .cpus();

console.log('当前系统的 cpu 数量', cpus.length); // 当前系统的 cpu 数量 4

// 获取内存信息 获取到的是字节
const memory = os.totalmem()
console.log(memory, 'bytes')
console.log('当前系统内存', memory/1024/1024/1024, 'GB') //bate/kb/mb/gb

// 当前可用内存
const freeMemory = os.freemem();
console.log(freeMemory, 'bytes');
console.log('当前系统可用内存', freeMemory/1024/1024/1024, 'GB')
