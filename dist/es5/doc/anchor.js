'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var colCache = require('../utils/col-cache');

var _require = require('../xlsx/xform/drawing/ext-xform'),
    EMU_PER_PIXEL_AT_96_DPI = _require.EMU_PER_PIXEL_AT_96_DPI;

var Anchor = /*#__PURE__*/function () {
  function Anchor(worksheet, address) {
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Anchor);

    this.worksheet = worksheet;

    if (!address) {
      this.nativeCol = 0;
      this.nativeColOff = 0;
      this.nativeRow = 0;
      this.nativeRowOff = 0;
    } else if (typeof address === 'string') {
      var decoded = colCache.decodeAddress(address);
      this.nativeCol = decoded.col + offset;
      this.nativeColOff = 0;
      this.nativeRow = decoded.row + offset;
      this.nativeRowOff = 0;
    } else if (address.nativeCol !== undefined) {
      this.nativeCol = address.nativeCol || 0;
      this.nativeColOff = address.nativeColOff || 0;
      this.nativeRow = address.nativeRow || 0;
      this.nativeRowOff = address.nativeRowOff || 0;
    } else if (address.col !== undefined) {
      this.col = address.col + offset;
      this.row = address.row + offset;
    } else {
      this.nativeCol = 0;
      this.nativeColOff = 0;
      this.nativeRow = 0;
      this.nativeRowOff = 0;
    }
  }

  _createClass(Anchor, [{
    key: "col",
    get: function get() {
      return this.nativeCol + Math.min(this.colWidth - 1, this.nativeColOff) / this.colWidth;
    },
    set: function set(v) {
      this.nativeCol = Math.floor(v);
      this.nativeColOff = Math.floor((v - this.nativeCol) * this.colWidth);
    }
  }, {
    key: "row",
    get: function get() {
      return this.nativeRow + Math.min(this.rowHeight - 1, this.nativeRowOff) / this.rowHeight;
    },
    set: function set(v) {
      this.nativeRow = Math.floor(v);
      this.nativeRowOff = Math.floor((v - this.nativeRow) * this.rowHeight);
    }
  }, {
    key: "colWidth",
    get: function get() {
      return this.worksheet && this.worksheet.getColumn(this.nativeCol + 1) && this.worksheet.getColumn(this.nativeCol + 1).isCustomWidth // https://github.com/qax-os/excelize/blob/60b13affbda954261888a7829c88a32993edb5b2/col.go#L24-L31
      ? Math.floor(this.worksheet.getColumn(this.nativeCol + 1).width * EMU_PER_PIXEL_AT_96_DPI * 8) : 9.140625 * EMU_PER_PIXEL_AT_96_DPI * 8;
    }
  }, {
    key: "rowHeight",
    get: function get() {
      return this.worksheet && this.worksheet.getRow(this.nativeRow + 1) && this.worksheet.getRow(this.nativeRow + 1).height // https://github.com/qax-os/excelize/blob/60b13affbda954261888a7829c88a32993edb5b2/col.go#L24-L31
      ? Math.floor(this.worksheet.getRow(this.nativeRow + 1).height * EMU_PER_PIXEL_AT_96_DPI * (20 / 15)) : 15 * EMU_PER_PIXEL_AT_96_DPI * (20 / 15);
    }
  }, {
    key: "model",
    get: function get() {
      return {
        nativeCol: this.nativeCol,
        nativeColOff: this.nativeColOff,
        nativeRow: this.nativeRow,
        nativeRowOff: this.nativeRowOff
      };
    },
    set: function set(value) {
      this.nativeCol = value.nativeCol;
      this.nativeColOff = value.nativeColOff;
      this.nativeRow = value.nativeRow;
      this.nativeRowOff = value.nativeRowOff;
    }
  }], [{
    key: "asInstance",
    value: function asInstance(model) {
      return model instanceof Anchor || model == null ? model : new Anchor(model);
    }
  }]);

  return Anchor;
}();

module.exports = Anchor;
//# sourceMappingURL=anchor.js.map
