/**
 * 建立一个对象
 * 1.   原型上新增特性不可枚举
 * 2.   私有属性不可修改
 */

function Account(name, balance) {
    Object.defineProperties(this, {
        name: {
            get: () => name,
            enumerable: true
        },
        balance: {
            get: () => balance,
            set: value => balance = value,
            enumerable: true
        }
    })
}

Object.defineProperty(Account.prototype, 'withdraw', {
    value: function (money) {
        if (money > this.balance) {
            console.warn('sorry, your credit cart is running low')
            return
        }
        return this.balance -= money
    },
    writable: true,
    configurable: true
})

Object.defineProperty(Account.prototype, 'toString', {
    value: function () {
        return `${this.name}'s account balance is ${this.balance}RMB`
    }
})