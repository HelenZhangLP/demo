// 基于面向对象
(function (window) {
  var jQuery;
  // 构造函数
  jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
  };

  // document.documentElement // <html ...
  // function root(elem) { return elem === document.documentElement }
  var rootQuery = jQuery(document);
  /**
   *
   * @type {{constructor: (jQuery|jQuery|HTMLElement)}}
   * {} constructor 指向 object，constructor 重新指回构造函数 jQuery
   */
  (
    jQuery.fn = jQuery.prototype =
      {
        constructor: jQuery,
        init: function (selector, context, root) {
          root = root || rootQuery;
          // handle $(""), $(null), $(undefined), $(false)
          if (!selector) return this;

          // handle html string
          if (typeof selector === "string") {
          }
          // handle $(DOMElement)
          if (typeof selector.nodeType) {
            this.context = this[0] = selector;
            this.length = 1;
            return this;
          }
          // handle $(function)
          if (jQuery.isFunction(selector)) {
            return root.ready;
          }
        },
      }
  );
  window.$ = window.jQuery = jQuery;
})(window);
