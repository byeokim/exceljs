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

var BaseCellAnchorXform = require('./base-cell-anchor-xform');

var StaticXform = require('../static-xform');

var CellPositionXform = require('./cell-position-xform');

var PicXform = require('./pic-xform');

var TwoCellAnchorXform = /*#__PURE__*/function (_BaseCellAnchorXform) {
  _inherits(TwoCellAnchorXform, _BaseCellAnchorXform);

  var _super = _createSuper(TwoCellAnchorXform);

  function TwoCellAnchorXform() {
    var _this;

    _classCallCheck(this, TwoCellAnchorXform);

    _this = _super.call(this);
    _this.map = {
      'xdr:from': new CellPositionXform({
        tag: 'xdr:from'
      }),
      'xdr:to': new CellPositionXform({
        tag: 'xdr:to'
      }),
      'xdr:pic': new PicXform(),
      'xdr:clientData': new StaticXform({
        tag: 'xdr:clientData'
      })
    };
    return _this;
  }

  _createClass(TwoCellAnchorXform, [{
    key: "tag",
    get: function get() {
      return 'xdr:twoCellAnchor';
    }
  }, {
    key: "prepare",
    value: function prepare(model, options) {
      this.map['xdr:pic'].prepare(model.picture, options);
    }
  }, {
    key: "render",
    value: function render(xmlStream, model) {
      xmlStream.openNode(this.tag, {
        editAs: model.range.editAs || 'oneCell'
      });
      this.map['xdr:from'].render(xmlStream, model.range.tl);
      this.map['xdr:to'].render(xmlStream, model.range.br);
      this.map['xdr:pic'].render(xmlStream, model.picture);
      this.map['xdr:clientData'].render(xmlStream, {});
      xmlStream.closeNode();
    }
  }, {
    key: "parseClose",
    value: function parseClose(name) {
      if (this.parser) {
        if (!this.parser.parseClose(name)) {
          this.parser = undefined;
        }

        return true;
      }

      switch (name) {
        case this.tag:
          this.model.range.tl = this.map['xdr:from'].model;
          this.model.range.br = this.map['xdr:to'].model;
          this.model.picture = this.map['xdr:pic'].model;
          return false;

        default:
          // could be some unrecognised tags
          return true;
      }
    }
  }, {
    key: "reconcile",
    value: function reconcile(model, options) {
      model.medium = this.reconcilePicture(model.picture, options);
    }
  }]);

  return TwoCellAnchorXform;
}(BaseCellAnchorXform);

module.exports = TwoCellAnchorXform;
//# sourceMappingURL=two-cell-anchor-xform.js.map
