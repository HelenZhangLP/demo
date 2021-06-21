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
function elemsById(id) {
    return <div></div>
}