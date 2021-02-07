function rgbToYIQ({ r, g, b }) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
}

export function contrast(colorHex, threshold = 128) {
  if (!colorHex) return '#000';
  const rgb = hexToRgb(colorHex);
  if (!rgb) return '#000';
  return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
}

export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
