
function Promise(fn) {
    var _this = this
    this.PromiseStatus = 'pending'
    this.PromiseResult = ''
    this.callbacks = {}

    function resolve(v) {
        if (_this.PromiseStatus !== 'pending') return
        _this.PromiseStatus = 'fulfilled'
        _this.PromiseResult = v

        _this.callbacks.onResolve && _this.callbacks.onResolve()
    }

    function reject(e) {
        if (_this.PromiseStatus !== 'pending') return
        _this.PromiseStatus = 'rejected'
        _this.PromiseResult = e
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onResolve, onReject) {
    return new Promise((resolve, reject) => {
        // Promise 中异步调用处理
        if (this.PromiseStatus === 'pending') {
            this.callbacks.onResolve = onResolve
            this.callbacks.onReject = onReject
        }

        if (this.PromiseStatus === 'fulfilled') {
            let result = onResolve(this.PromiseResult)
            if (result instanceof Promise) {
                result.then(v => resolve(v), e => reject(e))
            } else {
                resolve(result)
            }
        }

        if (this.PromiseStatus === 'rejected') {
            let result = onReject(this.PromiseResult)
            if (result instanceof Promise) {
                result.then(v => resolve(v), e => reject(e))
            } else {
                reject(result)
            }
        }
    })
}