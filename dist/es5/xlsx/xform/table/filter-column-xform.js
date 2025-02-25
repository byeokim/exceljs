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

var ListXform = require('../list-xform');

var CustomFilterXform = require('./custom-filter-xform');

var FilterXform = require('./filter-xform');

var FilterColumnXform = /*#__PURE__*/function (_BaseXform) {
  _inherits(FilterColumnXform, _BaseXform);

  var _super = _createSuper(FilterColumnXform);

  function FilterColumnXform() {
    var _this;

    _classCallCheck(this, FilterColumnXform);

    _this = _super.call(this);
    _this.map = {
      customFilters: new ListXform({
        tag: 'customFilters',
        count: false,
        empty: true,
        childXform: new CustomFilterXform()
      }),
      filters: new ListXform({
        tag: 'filters',
        count: false,
        empty: true,
        childXform: new FilterXform()
      })
    };
    return _this;
  }

  _createClass(FilterColumnXform, [{
    key: "tag",
    get: function get() {
      return 'filterColumn';
    }
  }, {
    key: "prepare",
    value: function prepare(model, options) {
      model.colId = options.index.toString();
    }
  }, {
    key: "render",
    value: function render(xmlStream, model) {
      if (model.customFilters) {
        xmlStream.openNode(this.tag, {
          colId: model.colId,
          hiddenButton: model.filterButton ? '0' : '1'
        });
        this.map.customFilters.render(xmlStream, model.customFilters);
        xmlStream.closeNode();
        return true;
      }

      xmlStream.leafNode(this.tag, {
        colId: model.colId,
        hiddenButton: model.filterButton ? '0' : '1'
      });
      return true;
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (this.parser) {
        this.parser.parseOpen(node);
        return true;
      }

      var attributes = node.attributes;

      switch (node.name) {
        case this.tag:
          this.model = {
            filterButton: attributes.hiddenButton === '0'
          };
          return true;

        default:
          this.parser = this.map[node.name];

          if (this.parser) {
            this.parseOpen(node);
            return true;
          }

          throw new Error("Unexpected xml node in parseOpen: ".concat(JSON.stringify(node)));
      }
    }
  }, {
    key: "parseText",
    value: function parseText() {}
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
          this.model.customFilters = this.map.customFilters.model;
          return false;

        default:
          // could be some unrecognised tags
          return true;
      }
    }
  }]);

  return FilterColumnXform;
}(BaseXform);

module.exports = FilterColumnXform;
//# sourceMappingURL=filter-column-xform.js.map
