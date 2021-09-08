const arrUnitCss = ['px', 'rem', 'em', 'vh', 'vw', '%'];

export const toCssUnitSize = size => {
  if (typeof size === 'string') {
    return arrUnitCss.some(unit => size.endsWith(unit)) && size;
  }
  if (typeof size === 'number') {
    return size === 0 ? size : (size += 'px');
  }
  return false;
};

export const kebabize = str => {
  return str
    .split('')
    .map((letter, index) => {
      return letter.toUpperCase() === letter
        ? `${index !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};
