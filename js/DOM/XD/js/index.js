/**
 * 模块中的一些常数
 * 对应 卷标属性与 DOM 特性名称
 */
const PROPS = new Map()

/**
 * 基础函数
 * 判断元素类型
 */
function isElementNode(elem) {
    return elem.nodeType === Node.ELEMENT_NODE;
}

/**
 * 建立前端链接库的原则之一是不破坏标准
 * 除非是为了兼容于新标准 API
 * 不建议在原生对象或 DOM 对象上添加特性
 * 将原生对象或DOM对象包裹建立、操作包裹器实例，由包裹器操作原生 API 或 实现额外功能
 */

class ElemmentCollection {
    // 建构时传入原生 DOM 对象的 Array 数组
    constructor(elems) {
        this.elems = elems
    }
}

/**
 * create() 建立元素，可指定多个名称，传回的结果也是管理一组原生 DOM 的群集对象
 * @param domName document element name
 * @returns {*} document element
 */
function create(domName) {
    return document.createElement(domName)
}

/**
 * elemsById 以指定 id 来选取元素，传回的对象并非原生 dom，而是用来管理一组原生 DOM 的群集对象。
 * @param id {string}
 * @returns {JSX.Element}
 */
function elemsById(ids) {
    let elems = ids.map(id => document.getElementById(id))

    return new ElemmentCollection(elems)
}