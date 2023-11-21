/**
 * 求合
 * 参数个数不限
 * 参数数据类型不限
 */
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(sum(1))