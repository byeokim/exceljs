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

var HyperlinkXform = /*#__PURE__*/function (_BaseXform) {
  _inherits(HyperlinkXform, _BaseXform);

  var _super = _createSuper(HyperlinkXform);

  function HyperlinkXform() {
    _classCallCheck(this, HyperlinkXform);

    return _super.apply(this, arguments);
  }

  _createClass(HyperlinkXform, [{
    key: "tag",
    get: function get() {
      return 'hyperlink';
    }
  }, {
    key: "render",
    value: function render(xmlStream, model) {
      if (this.isInternalLink(model)) {
        xmlStream.leafNode('hyperlink', {
          ref: model.address,
          'r:id': model.rId,
          tooltip: model.tooltip,
          location: model.target
        });
      } else {
        xmlStream.leafNode('hyperlink', {
          ref: model.address,
          'r:id': model.rId,
          tooltip: model.tooltip
        });
      }
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (node.name === 'hyperlink') {
        this.model = {
          address: node.attributes.ref,
          rId: node.attributes['r:id'],
          tooltip: node.attributes.tooltip
        }; // This is an internal link

        if (node.attributes.location) {
          this.model.target = node.attributes.location;
        }

        return true;
      }

      return false;
    }
  }, {
    key: "parseText",
    value: function parseText() {}
  }, {
    key: "parseClose",
    value: function parseClose() {
      return false;
    }
  }, {
    key: "isInternalLink",
    value: function isInternalLink(model) {
      // @example: Sheet2!D3, return true
      return model.target && /^[^!]+![a-zA-Z]+[\d]+$/.test(model.target);
    }
  }]);

  return HyperlinkXform;
}(BaseXform);

module.exports = HyperlinkXform;
//# sourceMappingURL=hyperlink-xform.js.map
