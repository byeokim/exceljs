"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BaseXform = require('../base-xform');

var IntegerXform = /*#__PURE__*/function (_BaseXform) {
  _inherits(IntegerXform, _BaseXform);

  var _super = _createSuper(IntegerXform);

  function IntegerXform(options) {
    var _this;

    _classCallCheck(this, IntegerXform);

    _this = _super.call(this);
    _this.tag = options.tag;
    _this.attr = options.attr;
    _this.attrs = options.attrs; // option to render zero

    _this.zero = options.zero;
    return _this;
  }

  _createClass(IntegerXform, [{
    key: "render",
    value: function render(xmlStream, model) {
      // int is different to float in that zero is not rendered
      if (model || this.zero) {
        xmlStream.openNode(this.tag);

        if (this.attrs) {
          xmlStream.addAttributes(this.attrs);
        }

        if (this.attr) {
          xmlStream.addAttribute(this.attr, model);
        } else {
          xmlStream.writeText(model);
        }

        xmlStream.closeNode();
      }
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (node.name === this.tag) {
        if (this.attr) {
          this.model = parseInt(node.attributes[this.attr], 10);
        } else {
          this.text = [];
        }

        return true;
      }

      return false;
    }
  }, {
    key: "parseText",
    value: function parseText(text) {
      if (!this.attr) {
        this.text.push(text);
      }
    }
  }, {
    key: "parseClose",
    value: function parseClose() {
      if (!this.attr) {
        this.model = parseInt(this.text.join('') || 0, 10);
      }

      return false;
    }
  }]);

  return IntegerXform;
}(BaseXform);

module.exports = IntegerXform;
//# sourceMappingURL=integer-xform.js.map
