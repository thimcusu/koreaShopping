export const categories = [
  { id: 1, name: 'Iphone', slug: 'iphone' },
  { id: 2, name: 'Headphone', slug: 'headphone' },
  { id: 3, name: 'Ipad', slug: 'ipad' },
  { id: 4, name: 'Others', slug: 'others' },
];

export const filterCategories = [
  {
    id: 'Apple',
    label: 'Apple',
    name: 'Apple',
    childrens: [
      {
        id: 'Iphone',
        label: 'Iphone',
        name: 'Iphone',
        childrens: [],
      },
      {
        id: 'Ipad',
        label: 'Ipad',
        name: 'Ipad',
        childrens: [],
      },
      {
        id: 'Ipod',
        label: 'Ipod',
        name: 'Ipod',
        childrens: [],
      },
      {
        id: 'Mac',
        label: 'Mac',
        name: 'Mac',
        childrens: [],
      },
    ],
  },
  {
    id: 'Technology',
    label: 'Technology',
    name: 'Technology',
    childrens: [
      {
        id: 'Headphone',
        label: 'Headphone',
        name: 'Headphone',
        childrens: [],
      },
      {
        id: 'TV',
        label: 'TV',
        name: 'TV',
        childrens: [],
      },
    ],
  },
];

export const catsToListFilter = (filters) => {
  let arr = [];
  const arrFilters = filters || [];
  for (let cats of filters) {
    arr.push(cats);
    const arrSmallCat = cats.childrens || [];
    if (arrSmallCat.length > 0) {
      for (let cat of arrSmallCat) {
        arr.push(cat);
      }
    }
  }
  arr.unshift({ id: undefined });
  return arr;
};
