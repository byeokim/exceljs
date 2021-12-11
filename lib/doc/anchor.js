'use strict';

const colCache = require('../utils/col-cache');
const {EMU_PER_PIXEL_AT_96_DPI} = require('../xlsx/xform/drawing/ext-xform');

class Anchor {
  constructor(worksheet, address, offset = 0) {
    this.worksheet = worksheet;

    if (!address) {
      this.nativeCol = 0;
      this.nativeColOff = 0;
      this.nativeRow = 0;
      this.nativeRowOff = 0;
    } else if (typeof address === 'string') {
      const decoded = colCache.decodeAddress(address);
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

  static asInstance(model) {
    return model instanceof Anchor || model == null ? model : new Anchor(model);
  }

  get col() {
    return this.nativeCol + (Math.min(this.colWidth - 1, this.nativeColOff) / this.colWidth);
  }

  set col(v) {
    this.nativeCol = Math.floor(v);
    this.nativeColOff = Math.floor((v - this.nativeCol) * this.colWidth);
  }

  get row() {
    return this.nativeRow + (Math.min(this.rowHeight - 1, this.nativeRowOff) / this.rowHeight);
  }

  set row(v) {
    this.nativeRow = Math.floor(v);
    this.nativeRowOff = Math.floor((v - this.nativeRow) * this.rowHeight);
  }

  get colWidth() {
    return this.worksheet &&
      this.worksheet.getColumn(this.nativeCol + 1) &&
      this.worksheet.getColumn(this.nativeCol + 1).isCustomWidth
      // https://github.com/qax-os/excelize/blob/60b13affbda954261888a7829c88a32993edb5b2/col.go#L24-L31
      ? Math.floor(this.worksheet.getColumn(this.nativeCol + 1).width * EMU_PER_PIXEL_AT_96_DPI * 8)
      : 9.140625 * EMU_PER_PIXEL_AT_96_DPI * (8);
  }

  get rowHeight() {
    return this.worksheet &&
      this.worksheet.getRow(this.nativeRow + 1) &&
      this.worksheet.getRow(this.nativeRow + 1).height
      // https://github.com/qax-os/excelize/blob/60b13affbda954261888a7829c88a32993edb5b2/col.go#L24-L31
      ? Math.floor(this.worksheet.getRow(this.nativeRow + 1).height * EMU_PER_PIXEL_AT_96_DPI * (20 / 15))
      : 15 * EMU_PER_PIXEL_AT_96_DPI * (20 / 15);
  }

  get model() {
    return {
      nativeCol: this.nativeCol,
      nativeColOff: this.nativeColOff,
      nativeRow: this.nativeRow,
      nativeRowOff: this.nativeRowOff,
    };
  }

  set model(value) {
    this.nativeCol = value.nativeCol;
    this.nativeColOff = value.nativeColOff;
    this.nativeRow = value.nativeRow;
    this.nativeRowOff = value.nativeRowOff;
  }
}

module.exports = Anchor;
