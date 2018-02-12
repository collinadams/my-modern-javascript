import { hexToRgb as h2rgb, rgbToHex as r2g } from './color-utils';

export let color = { r: 255, g: 0, b: 0 };
// define the hex property here

Object.defineProperty(color, 'hex', {
  get() {
    return r2g(this.r, this.g, this.b);
  },
  set(hex) {
    let { r, g, b } = h2rgb(hex);
    this.r = r;
    this.g = g;
    this.b = b;
  }
});
