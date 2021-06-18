/**
 * 匿名函数定义在 window 环境下，绑定全局。所以这里需要做 this 转换
 */
function ImmutableArray(...elems) {
    let _this = this
    elems.forEach(function (elem, idx) {
        Object.defineProperty(_this, idx, {
            value: elem,
            enumerable: true
        })
    })

    Object.defineProperty(this, 'length', {
        value: elems.length
    })

    Object.preventExtensions(this)
}

/**
 *
 * @param elems
 * @constructor
 * forEach 中传递第二个参数，实现对象转换
 */
function ImmutableArray_1(...elems) {
    elems.forEach(function (elem, idx){
        Object.defineProperty(this, idx, {
            value: elem,
            enumerable: true
        })
    },this)

    Object.defineProperty(this, 'length', {
        value: elems.length
    })

    Object.preventExtensions(this)
}

/**
 *
 * @param elems
 * @constructor
 * 箭头函数 this 继承
 */
function ImmutableArray_2(...elems) {
    elems.forEach((elem, idx) => {
        Object.defineProperty(this, idx, {
            value: elem,
            enumerable: true
        })
    })

    Object.defineProperty(this, 'length', {
        value: elems.length
    })

    Object.preventExtensions(this)
}