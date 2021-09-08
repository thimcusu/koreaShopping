export const sortByAlphabet = (list, desc = true, key) => {
  return list.sort((a, b) => {
    return desc
      ? !a[key]
        ? 1
        : !b[key]
        ? -1
        : a[key].localeCompare(b[key])
      : !b[key]
      ? 1
      : !a[key]
      ? -1
      : b[key].localeCompare(a[key]);
  });
};

export const sortByLevel = (list, desc = true) => {
  return list.sort((a, b) => (desc ? a.level > b.level : b.level > a.level));
};
