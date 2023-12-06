// class Promise {
//     constructor(executor) {
//         // 实例属性
//         this.PromiseStatus = 'pending';
//         this.PromiseResult = null;
//         this.callbacks = []

//         /**
//          * resolve, reject
//          * 修改状态
//          * 修改结果值
//          */
//         const resolve = (data) => {
//             if (this.PromiseStatus !== 'pending') return; // Promise 对象状态只能修改一次
//             this.PromiseStatus = 'fulfilled';
//             this.PromiseResult = data;
//             this.callbacks.forEach(item => {
//                 item.onResolve(data)
//             })
//         }
//         const reject = (err) => {
//             if (this.PromiseStatus !== 'pending') return; // Promise 对象状态只能修改一次
//             this.PromiseStatus = 'rejected';
//             this.PromiseResult = err;
//             this.callbacks.forEach(item => {
//                 item.onReject(err)
//             })
//         }

//         // 抛出异常时，状态处理
//         try {
//             // 同步调用执行器函数
//             executor(resolve, reject)
//         } catch (e) {
//             // 处理捕获异常，修改状态与结果值
//             reject(e)
//         }
//     }

//     // then 方法封装
//     then(onResolve, onReject) {
//         // 处理参数异常
//         if (typeof onResolve !== 'function') {
//             onResolve = value => value
//         }
//         // 处理参数异常，穿透 then 直接处理 catch 方法
//         if (typeof onReject !== 'function') {
//             onReject = err => { throw err }
//         }

//         return new Promise((resolve, reject) => { 

//          })
//     }
// }
/**
 * 
 * @param {*} executor 执行器函数
 * 抛出异常修改 Promise 对象状态
 * Promise 对象状态只能修改一次
 * then 方法执行回调
 * 异步任务 then 方法实现
 * then 方法连续回调
 * then 异步修改
 * catch 失败回调函数
 * catch 穿透
 */
function Promise(executor) {
    // 实例属性
    this.PromiseStatus = 'pending';
    this.PromiseResult = null;
    this.callbacks = []

    /**
     * resolve, reject
     * 修改状态
     * 修改结果值
     */
    const resolve = (data) => {
        if (this.PromiseStatus !== 'pending') return; // Promise 对象状态只能修改一次
        this.PromiseStatus = 'fulfilled';
        this.PromiseResult = data;
        this.callbacks.forEach(item => {
            item.onResolve(data)
        })
    }
    const reject = (err) => {
        if (this.PromiseStatus !== 'pending') return; // Promise 对象状态只能修改一次
        this.PromiseStatus = 'rejected';
        this.PromiseResult = err;
        this.callbacks.forEach(item => {
            item.onReject(err)
        })
    }

    // 抛出异常时，状态处理
    try {
        // 同步调用执行器函数
        executor(resolve, reject)
    } catch (e) {
        // 处理捕获异常，修改状态与结果值
        reject(e)
    }
}

/**
 * 根据不同的状态，调用相应的回调函数
 * @param {*} onResolve 
 * @param {*} onReject 
 */
Promise.prototype.then = function (onResolve, onReject) {
    // 处理参数异常
    if (typeof onResolve !== 'function') {
        onResolve = value => value
    }
    // 处理参数异常，穿透 then 直接处理 catch 方法
    if (typeof onReject !== 'function') {
        onReject = err => { throw err }
    }
    return new Promise((resolve, reject) => {
        const callback = (type) => {
            try {
                let res = type(this.PromiseResult)
                if (res instanceof Promise) {
                    res.then(v => {
                        resolve(v)
                    }, e => {
                        reject(e)
                    })
                } else {
                    resolve(res)
                }
            } catch (e) {
                reject(e)
            }
        }
        // executor 执行器中，resolve,reject 异步执行时，promiseStatus === pending 存储成功/错误回调，待异步代码执行
        if (this.PromiseStatus === 'pending') {
            this.callbacks.push({
                onResolve: function () {
                    // callback(onResolve)
                    console.log(111)
                },
                onReject: function () {
                    // callback(onReject)
                }
            })
            // this.callbacks.push({
            //     onResolve: function () {
            //         callback(onResolve)
            //     },
            //     onReject: function () {
            //         callback(onReject)
            //     }
            // })
        }
        if (this.PromiseStatus === 'fulfilled') {
            callback(onResolve)
        }
        if (this.PromiseStatus === 'rejected') {
            callback(onReject)
        }
    })
}

// 失败处理
Promise.prototype.catch = function (onReject) {
    return this.then(undefined, onReject)
}

// 静态方法： Promise.resolve / Promise.reject
Promise.resolve = value => {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v)
            }, err => {
                reject(err)
            })
        } else {
            resolve(value)
        }
    })
}

// 静态方法：Promise.reject
Promise.reject = err => {
    return new Promise((resolve, reject) => {
        reject(err)
    })
}

// 静态方法 Promise.all
Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
        let count = 0; // 统计成功状态，prmoise 个数
        let arr = []; // 收集 promise 成功的结果
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(value => {
                count++;
                arr[i] = value;
                // 每个 promise 状态都成功后，resovle 修改状态
                if (count === promises.length) {
                    resolve(arr)
                }
            }, err => {
                reject(err)
            })
        }
    })
}

Promise.race = (promises) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => resolve(v), err => reject(err))
        }
    })
}
