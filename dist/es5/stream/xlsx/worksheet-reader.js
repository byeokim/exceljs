"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; if (typeof Symbol !== "undefined") { async = Symbol.asyncIterator; sync = Symbol.iterator; } while (retry--) { if (async && (method = iterable[async]) != null) { return method.call(iterable); } if (sync && (method = iterable[sync]) != null) { return new AsyncFromSyncIterator(method.call(iterable)); } async = "@@asyncIterator"; sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s; this.n = s.next; }; AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(value) { var ret = this.s.return; if (ret === undefined) { return Promise.resolve({ value: value, done: true }); } return AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, throw: function _throw(value) { var thr = this.s.return; if (thr === undefined) return Promise.reject(value); return AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }; function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) { return Promise.reject(new TypeError(r + " is not an object.")); } var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return new AsyncFromSyncIterator(s); }

var _require = require('events'),
    EventEmitter = _require.EventEmitter;

var parseSax = require('../../utils/parse-sax');

var _ = require('../../utils/under-dash');

var utils = require('../../utils/utils');

var colCache = require('../../utils/col-cache');

var Dimensions = require('../../doc/range');

var Row = require('../../doc/row');

var Column = require('../../doc/column');

var WorksheetReader = /*#__PURE__*/function (_EventEmitter, _Symbol$asyncIterator) {
  _inherits(WorksheetReader, _EventEmitter);

  var _super = _createSuper(WorksheetReader);

  function WorksheetReader(_ref) {
    var _this3;

    var workbook = _ref.workbook,
        id = _ref.id,
        iterator = _ref.iterator,
        options = _ref.options;

    _classCallCheck(this, WorksheetReader);

    _this3 = _super.call(this);
    _this3.workbook = workbook;
    _this3.id = id;
    _this3.iterator = iterator;
    _this3.options = options || {}; // and a name

    _this3.name = "Sheet".concat(_this3.id); // column definitions

    _this3._columns = null;
    _this3._keys = {}; // keep a record of dimensions

    _this3._dimensions = new Dimensions();
    return _this3;
  } // destroy - not a valid operation for a streaming writer
  // even though some streamers might be able to, it's a bad idea.


  _createClass(WorksheetReader, [{
    key: "destroy",
    value: function destroy() {
      throw new Error('Invalid Operation: destroy');
    } // return the current dimensions of the writer

  }, {
    key: "dimensions",
    get: function get() {
      return this._dimensions;
    } // =========================================================================
    // Columns
    // get the current columns array.

  }, {
    key: "columns",
    get: function get() {
      return this._columns;
    } // get a single column by col number. If it doesn't exist, it and any gaps before it
    // are created.

  }, {
    key: "getColumn",
    value: function getColumn(c) {
      if (typeof c === 'string') {
        // if it matches a key'd column, return that
        var col = this._keys[c];

        if (col) {
          return col;
        } // otherise, assume letter


        c = colCache.l2n(c);
      }

      if (!this._columns) {
        this._columns = [];
      }

      if (c > this._columns.length) {
        var n = this._columns.length + 1;

        while (n <= c) {
          this._columns.push(new Column(this, n++));
        }
      }

      return this._columns[c - 1];
    }
  }, {
    key: "getColumnKey",
    value: function getColumnKey(key) {
      return this._keys[key];
    }
  }, {
    key: "setColumnKey",
    value: function setColumnKey(key, value) {
      this._keys[key] = value;
    }
  }, {
    key: "deleteColumnKey",
    value: function deleteColumnKey(key) {
      delete this._keys[key];
    }
  }, {
    key: "eachColumnKey",
    value: function eachColumnKey(f) {
      _.each(this._keys, f);
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, events, _iterator4, _step4, _step4$value, eventType, value;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context.prev = 3;
                _iterator = _asyncIterator(this.parse());

              case 5:
                _context.next = 7;
                return _iterator.next();

              case 7:
                if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                  _context.next = 14;
                  break;
                }

                events = _step.value;
                _iterator4 = _createForOfIteratorHelper(events);

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    _step4$value = _step4.value, eventType = _step4$value.eventType, value = _step4$value.value;
                    this.emit(eventType, value);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

              case 11:
                _iteratorAbruptCompletion = false;
                _context.next = 5;
                break;

              case 14:
                _context.next = 20;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 20:
                _context.prev = 20;
                _context.prev = 21;

                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context.next = 25;
                  break;
                }

                _context.next = 25;
                return _iterator.return();

              case 25:
                _context.prev = 25;

                if (!_didIteratorError) {
                  _context.next = 28;
                  break;
                }

                throw _iteratorError;

              case 28:
                return _context.finish(25);

              case 29:
                return _context.finish(20);

              case 30:
                this.emit('finished');
                _context.next = 36;
                break;

              case 33:
                _context.prev = 33;
                _context.t1 = _context["catch"](0);
                this.emit('error', _context.t1);

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 33], [3, 16, 20, 30], [21,, 25, 29]]);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: _Symbol$asyncIterator,
    value: function value() {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, events, _iterator5, _step5, _step5$value, eventType, value;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _iteratorAbruptCompletion2 = false;
                _didIteratorError2 = false;
                _context2.prev = 2;
                _iterator2 = _asyncIterator(_this.parse());

              case 4:
                _context2.next = 6;
                return _awaitAsyncGenerator(_iterator2.next());

              case 6:
                if (!(_iteratorAbruptCompletion2 = !(_step2 = _context2.sent).done)) {
                  _context2.next = 29;
                  break;
                }

                events = _step2.value;
                _iterator5 = _createForOfIteratorHelper(events);
                _context2.prev = 9;

                _iterator5.s();

              case 11:
                if ((_step5 = _iterator5.n()).done) {
                  _context2.next = 18;
                  break;
                }

                _step5$value = _step5.value, eventType = _step5$value.eventType, value = _step5$value.value;

                if (!(eventType === 'row')) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 16;
                return value;

              case 16:
                _context2.next = 11;
                break;

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](9);

                _iterator5.e(_context2.t0);

              case 23:
                _context2.prev = 23;

                _iterator5.f();

                return _context2.finish(23);

              case 26:
                _iteratorAbruptCompletion2 = false;
                _context2.next = 4;
                break;

              case 29:
                _context2.next = 35;
                break;

              case 31:
                _context2.prev = 31;
                _context2.t1 = _context2["catch"](2);
                _didIteratorError2 = true;
                _iteratorError2 = _context2.t1;

              case 35:
                _context2.prev = 35;
                _context2.prev = 36;

                if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                  _context2.next = 40;
                  break;
                }

                _context2.next = 40;
                return _awaitAsyncGenerator(_iterator2.return());

              case 40:
                _context2.prev = 40;

                if (!_didIteratorError2) {
                  _context2.next = 43;
                  break;
                }

                throw _iteratorError2;

              case 43:
                return _context2.finish(40);

              case 44:
                return _context2.finish(35);

              case 45:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 31, 35, 45], [9, 20, 23, 26], [36,, 40, 44]]);
      }))();
    }
  }, {
    key: "parse",
    value: function parse() {
      var _this2 = this;

      return _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var iterator, options, emitSheet, emitHyperlinks, hyperlinks, _this2$workbook, sharedStrings, styles, properties, inCols, inRows, inHyperlinks, cols, row, c, current, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, events, worksheetEvents, _iterator6, _step6, _step6$value, eventType, value, node, r, styleId, style, hyperlink, _node, address, cell, _style, cellValue, index, _hyperlink;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                iterator = _this2.iterator, options = _this2.options;
                emitSheet = false;
                emitHyperlinks = false;
                hyperlinks = null;
                _context3.t0 = options.worksheets;
                _context3.next = _context3.t0 === 'emit' ? 7 : _context3.t0 === 'prep' ? 9 : 10;
                break;

              case 7:
                emitSheet = true;
                return _context3.abrupt("break", 11);

              case 9:
                return _context3.abrupt("break", 11);

              case 10:
                return _context3.abrupt("break", 11);

              case 11:
                _context3.t1 = options.hyperlinks;
                _context3.next = _context3.t1 === 'emit' ? 14 : _context3.t1 === 'cache' ? 16 : 18;
                break;

              case 14:
                emitHyperlinks = true;
                return _context3.abrupt("break", 19);

              case 16:
                _this2.hyperlinks = hyperlinks = {};
                return _context3.abrupt("break", 19);

              case 18:
                return _context3.abrupt("break", 19);

              case 19:
                if (!(!emitSheet && !emitHyperlinks && !hyperlinks)) {
                  _context3.next = 21;
                  break;
                }

                return _context3.abrupt("return");

              case 21:
                // references
                _this2$workbook = _this2.workbook, sharedStrings = _this2$workbook.sharedStrings, styles = _this2$workbook.styles, properties = _this2$workbook.properties; // xml position

                inCols = false;
                inRows = false;
                inHyperlinks = false; // parse state

                cols = null;
                row = null;
                c = null;
                current = null;
                _iteratorAbruptCompletion3 = false;
                _didIteratorError3 = false;
                _context3.prev = 31;
                _iterator3 = _asyncIterator(parseSax(iterator));

              case 33:
                _context3.next = 35;
                return _awaitAsyncGenerator(_iterator3.next());

              case 35:
                if (!(_iteratorAbruptCompletion3 = !(_step3 = _context3.sent).done)) {
                  _context3.next = 150;
                  break;
                }

                events = _step3.value;
                worksheetEvents = [];
                _iterator6 = _createForOfIteratorHelper(events);
                _context3.prev = 39;

                _iterator6.s();

              case 41:
                if ((_step6 = _iterator6.n()).done) {
                  _context3.next = 136;
                  break;
                }

                _step6$value = _step6.value, eventType = _step6$value.eventType, value = _step6$value.value;

                if (!(eventType === 'opentag')) {
                  _context3.next = 79;
                  break;
                }

                node = value;

                if (!emitSheet) {
                  _context3.next = 68;
                  break;
                }

                _context3.t2 = node.name;
                _context3.next = _context3.t2 === 'cols' ? 49 : _context3.t2 === 'sheetData' ? 52 : _context3.t2 === 'col' ? 54 : _context3.t2 === 'row' ? 56 : _context3.t2 === 'c' ? 58 : _context3.t2 === 'f' ? 60 : _context3.t2 === 'v' ? 62 : _context3.t2 === 'is' ? 64 : _context3.t2 === 't' ? 64 : _context3.t2 === 'mergeCell' ? 66 : 67;
                break;

              case 49:
                inCols = true;
                cols = [];
                return _context3.abrupt("break", 68);

              case 52:
                inRows = true;
                return _context3.abrupt("break", 68);

              case 54:
                if (inCols) {
                  cols.push({
                    min: parseInt(node.attributes.min, 10),
                    max: parseInt(node.attributes.max, 10),
                    width: parseFloat(node.attributes.width),
                    styleId: parseInt(node.attributes.style || '0', 10)
                  });
                }

                return _context3.abrupt("break", 68);

              case 56:
                if (inRows) {
                  r = parseInt(node.attributes.r, 10);
                  row = new Row(_this2, r);

                  if (node.attributes.ht) {
                    row.height = parseFloat(node.attributes.ht);
                  }

                  if (node.attributes.s) {
                    styleId = parseInt(node.attributes.s, 10);
                    style = styles.getStyleModel(styleId);

                    if (style) {
                      row.style = style;
                    }
                  }
                }

                return _context3.abrupt("break", 68);

              case 58:
                if (row) {
                  c = {
                    ref: node.attributes.r,
                    s: parseInt(node.attributes.s, 10),
                    t: node.attributes.t
                  };
                }

                return _context3.abrupt("break", 68);

              case 60:
                if (c) {
                  current = c.f = {
                    text: ''
                  };
                }

                return _context3.abrupt("break", 68);

              case 62:
                if (c) {
                  current = c.v = {
                    text: ''
                  };
                }

                return _context3.abrupt("break", 68);

              case 64:
                if (c) {
                  current = c.v = {
                    text: ''
                  };
                }

                return _context3.abrupt("break", 68);

              case 66:
                return _context3.abrupt("break", 68);

              case 67:
                return _context3.abrupt("break", 68);

              case 68:
                if (!(emitHyperlinks || hyperlinks)) {
                  _context3.next = 77;
                  break;
                }

                _context3.t3 = node.name;
                _context3.next = _context3.t3 === 'hyperlinks' ? 72 : _context3.t3 === 'hyperlink' ? 74 : 76;
                break;

              case 72:
                inHyperlinks = true;
                return _context3.abrupt("break", 77);

              case 74:
                if (inHyperlinks) {
                  hyperlink = {
                    ref: node.attributes.ref,
                    rId: node.attributes['r:id']
                  };

                  if (emitHyperlinks) {
                    worksheetEvents.push({
                      eventType: 'hyperlink',
                      value: hyperlink
                    });
                  } else {
                    hyperlinks[hyperlink.ref] = hyperlink;
                  }
                }

                return _context3.abrupt("break", 77);

              case 76:
                return _context3.abrupt("break", 77);

              case 77:
                _context3.next = 134;
                break;

              case 79:
                if (!(eventType === 'text')) {
                  _context3.next = 83;
                  break;
                }

                // only text data is for sheet values
                if (emitSheet) {
                  if (current) {
                    current.text += value;
                  }
                }

                _context3.next = 134;
                break;

              case 83:
                if (!(eventType === 'closetag')) {
                  _context3.next = 134;
                  break;
                }

                _node = value;

                if (!emitSheet) {
                  _context3.next = 127;
                  break;
                }

                _context3.t4 = _node.name;
                _context3.next = _context3.t4 === 'cols' ? 89 : _context3.t4 === 'sheetData' ? 92 : _context3.t4 === 'row' ? 94 : _context3.t4 === 'c' ? 98 : 126;
                break;

              case 89:
                inCols = false;
                _this2._columns = Column.fromModel(cols);
                return _context3.abrupt("break", 127);

              case 92:
                inRows = false;
                return _context3.abrupt("break", 127);

              case 94:
                _this2._dimensions.expandRow(row);

                worksheetEvents.push({
                  eventType: 'row',
                  value: row
                });
                row = null;
                return _context3.abrupt("break", 127);

              case 98:
                if (!(row && c)) {
                  _context3.next = 125;
                  break;
                }

                address = colCache.decodeAddress(c.ref);
                cell = row.getCell(address.col);

                if (c.s) {
                  _style = styles.getStyleModel(c.s);

                  if (_style) {
                    cell.style = _style;
                  }
                }

                if (!c.f) {
                  _context3.next = 108;
                  break;
                }

                cellValue = {
                  formula: c.f.text
                };

                if (c.v) {
                  if (c.t === 'str') {
                    cellValue.result = utils.xmlDecode(c.v.text);
                  } else {
                    cellValue.result = parseFloat(c.v.text);
                  }
                }

                cell.value = cellValue;
                _context3.next = 123;
                break;

              case 108:
                if (!c.v) {
                  _context3.next = 123;
                  break;
                }

                _context3.t5 = c.t;
                _context3.next = _context3.t5 === 's' ? 112 : _context3.t5 === 'inlineStr' ? 115 : _context3.t5 === 'str' ? 115 : _context3.t5 === 'e' ? 117 : _context3.t5 === 'b' ? 119 : 121;
                break;

              case 112:
                index = parseInt(c.v.text, 10);

                if (sharedStrings) {
                  cell.value = sharedStrings[index];
                } else {
                  cell.value = {
                    sharedString: index
                  };
                }

                return _context3.abrupt("break", 123);

              case 115:
                cell.value = utils.xmlDecode(c.v.text);
                return _context3.abrupt("break", 123);

              case 117:
                cell.value = {
                  error: c.v.text
                };
                return _context3.abrupt("break", 123);

              case 119:
                cell.value = parseInt(c.v.text, 10) !== 0;
                return _context3.abrupt("break", 123);

              case 121:
                if (utils.isDateFmt(cell.numFmt)) {
                  cell.value = utils.excelToDate(parseFloat(c.v.text), properties.model && properties.model.date1904);
                } else {
                  cell.value = parseFloat(c.v.text);
                }

                return _context3.abrupt("break", 123);

              case 123:
                if (hyperlinks) {
                  _hyperlink = hyperlinks[c.ref];

                  if (_hyperlink) {
                    cell.text = cell.value;
                    cell.value = undefined;
                    cell.hyperlink = _hyperlink;
                  }
                }

                c = null;

              case 125:
                return _context3.abrupt("break", 127);

              case 126:
                return _context3.abrupt("break", 127);

              case 127:
                if (!(emitHyperlinks || hyperlinks)) {
                  _context3.next = 134;
                  break;
                }

                _context3.t6 = _node.name;
                _context3.next = _context3.t6 === 'hyperlinks' ? 131 : 133;
                break;

              case 131:
                inHyperlinks = false;
                return _context3.abrupt("break", 134);

              case 133:
                return _context3.abrupt("break", 134);

              case 134:
                _context3.next = 41;
                break;

              case 136:
                _context3.next = 141;
                break;

              case 138:
                _context3.prev = 138;
                _context3.t7 = _context3["catch"](39);

                _iterator6.e(_context3.t7);

              case 141:
                _context3.prev = 141;

                _iterator6.f();

                return _context3.finish(141);

              case 144:
                if (!(worksheetEvents.length > 0)) {
                  _context3.next = 147;
                  break;
                }

                _context3.next = 147;
                return worksheetEvents;

              case 147:
                _iteratorAbruptCompletion3 = false;
                _context3.next = 33;
                break;

              case 150:
                _context3.next = 156;
                break;

              case 152:
                _context3.prev = 152;
                _context3.t8 = _context3["catch"](31);
                _didIteratorError3 = true;
                _iteratorError3 = _context3.t8;

              case 156:
                _context3.prev = 156;
                _context3.prev = 157;

                if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {
                  _context3.next = 161;
                  break;
                }

                _context3.next = 161;
                return _awaitAsyncGenerator(_iterator3.return());

              case 161:
                _context3.prev = 161;

                if (!_didIteratorError3) {
                  _context3.next = 164;
                  break;
                }

                throw _iteratorError3;

              case 164:
                return _context3.finish(161);

              case 165:
                return _context3.finish(156);

              case 166:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[31, 152, 156, 166], [39, 138, 141, 144], [157,, 161, 165]]);
      }))();
    }
  }]);

  return WorksheetReader;
}(EventEmitter, Symbol.asyncIterator);

module.exports = WorksheetReader;
//# sourceMappingURL=worksheet-reader.js.map
