"use strict";

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

var _require = require('saxes'),
    SaxesParser = _require.SaxesParser;

var _require2 = require('readable-stream'),
    PassThrough = _require2.PassThrough;

var _require3 = require('./browser-buffer-decode'),
    bufferToString = _require3.bufferToString;

module.exports = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(iterable) {
    var saxesParser, error, events, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // TODO: Remove once node v8 is deprecated
            // Detect and upgrade old streams
            if (iterable.pipe && !iterable[Symbol.asyncIterator]) {
              iterable = iterable.pipe(new PassThrough());
            }

            saxesParser = new SaxesParser();
            saxesParser.on('error', function (err) {
              error = err;
            });
            events = [];
            saxesParser.on('opentag', function (value) {
              return events.push({
                eventType: 'opentag',
                value: value
              });
            });
            saxesParser.on('text', function (value) {
              return events.push({
                eventType: 'text',
                value: value
              });
            });
            saxesParser.on('closetag', function (value) {
              return events.push({
                eventType: 'closetag',
                value: value
              });
            });
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context.prev = 9;
            _iterator = _asyncIterator(iterable);

          case 11:
            _context.next = 13;
            return _awaitAsyncGenerator(_iterator.next());

          case 13:
            if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
              _context.next = 24;
              break;
            }

            chunk = _step.value;
            saxesParser.write(bufferToString(chunk)); // saxesParser.write and saxesParser.on() are synchronous,
            // so we can only reach the below line once all events have been emitted

            if (!error) {
              _context.next = 18;
              break;
            }

            throw error;

          case 18:
            _context.next = 20;
            return events;

          case 20:
            events = [];

          case 21:
            _iteratorAbruptCompletion = false;
            _context.next = 11;
            break;

          case 24:
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 30:
            _context.prev = 30;
            _context.prev = 31;

            if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
              _context.next = 35;
              break;
            }

            _context.next = 35;
            return _awaitAsyncGenerator(_iterator.return());

          case 35:
            _context.prev = 35;

            if (!_didIteratorError) {
              _context.next = 38;
              break;
            }

            throw _iteratorError;

          case 38:
            return _context.finish(35);

          case 39:
            return _context.finish(30);

          case 40:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 26, 30, 40], [31,, 35, 39]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=parse-sax.js.map
