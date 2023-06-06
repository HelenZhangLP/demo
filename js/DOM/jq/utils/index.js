
// base --- null,undefined,NaN
var jsDataTypeStr = "Boolean Number String Object Function Array Date RegExp Error Symbol"


var
    class2type = {},
    core_toString = class2type.toString

// populate the class2type map
each(jsDataTypeStr.split(' '), function (_i, name) {
    class2type["[object "+ name +"]"] = name.toLowerCase()
})

/**
 *
 * @param obj typeof obj === 'object'
 * null, Array, Object, Date, RegExp, Error
 */
function toType(obj) {
    if (obj === null) return obj+'' // 'null'
    return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj
}

/**
 * 入参 obj 是否为 window 对象
 * @param obj
 * @returns {boolean}
 */
function isWindow(obj) {
    return obj !== null && obj === obj.window
}

/**
 * 入参是否为类数组
 * @param obj
 * @returns {boolean}
 */
function isArrayLike( obj ) {
    var type = toType(obj),
        length

    if (type === 'number') return false

    if (type === "function" || isWindow(obj)) return false

    // obj 为对象类型 !!obj true -> obj.length // undefined/number
    length = !!obj && obj.length

    return type === 'array' || length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj
}

/**
 * @param Array
 * @param callback 回调
 * Boolean Number String Object Function Array Date RegExp Error Symbol
 * function (name) {
    class2type["[object "+ name +"]"] = name.toLowerCase()
}
 */
function each(obj, callback) {
    var length, i = 0;
    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i<length;i++) {
            // https://github.com/jquery/jquery/blob/482f846203e82b1c2620f580e483bf41d11f9f49/src/core.js#L238 源码不同
            callback(obj[i])
        }
    } else {
        for (i in obj) {
            callback(obj[i])
        }
    }

    return obj
}

export default {
    type: function (obj) {
        if (obj === null) return String(obj)
        return typeof obj === "function" ? class2type[core_toString.call(obj)] || 'object'
    },
    isFunction: function (obj) {
       return jQuery.type(obj) === "function"
    }
}