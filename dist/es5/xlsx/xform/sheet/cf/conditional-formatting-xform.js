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

var CompositeXform = require('../../composite-xform');

var CfRuleXform = require('./cf-rule-xform');

var ConditionalFormattingXform = /*#__PURE__*/function (_CompositeXform) {
  _inherits(ConditionalFormattingXform, _CompositeXform);

  var _super = _createSuper(ConditionalFormattingXform);

  function ConditionalFormattingXform() {
    var _this;

    _classCallCheck(this, ConditionalFormattingXform);

    _this = _super.call(this);
    _this.map = {
      cfRule: new CfRuleXform()
    };
    return _this;
  }

  _createClass(ConditionalFormattingXform, [{
    key: "tag",
    get: function get() {
      return 'conditionalFormatting';
    }
  }, {
    key: "render",
    value: function render(xmlStream, model) {
      var _this2 = this;

      // if there are no primitive rules, exit now
      if (!model.rules.some(CfRuleXform.isPrimitive)) {
        return;
      }

      xmlStream.openNode(this.tag, {
        sqref: model.ref
      });
      model.rules.forEach(function (rule) {
        if (CfRuleXform.isPrimitive(rule)) {
          rule.ref = model.ref;

          _this2.map.cfRule.render(xmlStream, rule);
        }
      });
      xmlStream.closeNode();
    }
  }, {
    key: "createNewModel",
    value: function createNewModel(_ref) {
      var attributes = _ref.attributes;
      return {
        ref: attributes.sqref,
        rules: []
      };
    }
  }, {
    key: "onParserClose",
    value: function onParserClose(name, parser) {
      this.model.rules.push(parser.model);
    }
  }]);

  return ConditionalFormattingXform;
}(CompositeXform);

module.exports = ConditionalFormattingXform;
//# sourceMappingURL=conditional-formatting-xform.js.map
