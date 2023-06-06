/**
 * 使用 WeakMap 封装类中的私有属性
 * 键是实例本身 key: Account {}
 * 实例作为自变量调用 get() 方法，取出对应的私有属性
 */
let _private = new WeakMap() // 封装私有属性
class Account {
    constructor(name, balance) {
        _private.set(this, {name, balance})
        console.log(_private)
        /**
         * [[Entries]]
             0: {Account => Object}
                 key: Account {}
                 value:
                     balance: 3000
                     name: "hel"
                    __proto__: Object
                 __proto__: WeakMap
         */
    }

    get name() {
        return _private.get(this).name
    }

    get balance() {
        return _private.get(this).balance
    }

    withdraw(money) {
        if (money < 0) console.warn('Withdrawal amount cannot be negative')
        let acct = _private.get(this)
        acct.balance -= money
    }
}