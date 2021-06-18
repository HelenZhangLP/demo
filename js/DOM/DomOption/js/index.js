
function getElement(id) {
    return document.getElementById(id)
}

function removeImg(dom) {
    dom.onclick = function (event) {
        event.target.parentNode.removeChild(this)
    }
}