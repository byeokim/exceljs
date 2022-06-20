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

var StaticXform = require('../static-xform');

var BlipFillXform = require('./blip-fill-xform');

var NvPicPrXform = require('./nv-pic-pr-xform');

var spPrJSON = require('./sp-pr');

var PicXform = /*#__PURE__*/function (_BaseXform) {
  _inherits(PicXform, _BaseXform);

  var _super = _createSuper(PicXform);

  function PicXform() {
    var _this;

    _classCallCheck(this, PicXform);

    _this = _super.call(this);
    _this.map = {
      'xdr:nvPicPr': new NvPicPrXform(),
      'xdr:blipFill': new BlipFillXform(),
      'xdr:spPr': new StaticXform(spPrJSON)
    };
    return _this;
  }

  _createClass(PicXform, [{
    key: "tag",
    get: function get() {
      return 'xdr:pic';
    }
  }, {
    key: "prepare",
    value: function prepare(model, options) {
      model.index = options.index + 1;
    }
  }, {
    key: "render",
    value: function render(xmlStream, model) {
      xmlStream.openNode(this.tag);
      this.map['xdr:nvPicPr'].render(xmlStream, model);
      this.map['xdr:blipFill'].render(xmlStream, model);
      this.map['xdr:spPr'].render(xmlStream, model);
      xmlStream.closeNode();
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (this.parser) {
        this.parser.parseOpen(node);
        return true;
      }

      switch (node.name) {
        case this.tag:
          this.reset();
          break;

        default:
          this.parser = this.map[node.name];

          if (this.parser) {
            this.parser.parseOpen(node);
          }

          break;
      }

      return true;
    }
  }, {
    key: "parseText",
    value: function parseText() {}
  }, {
    key: "parseClose",
    value: function parseClose(name) {
      if (this.parser) {
        if (!this.parser.parseClose(name)) {
          this.mergeModel(this.parser.model);
          this.parser = undefined;
        }

        return true;
      }

      switch (name) {
        case this.tag:
          return false;

        default:
          // not quite sure how we get here!
          return true;
      }
    }
  }]);

  return PicXform;
}(BaseXform);

module.exports = PicXform;
//# sourceMappingURL=pic-xform.js.map
