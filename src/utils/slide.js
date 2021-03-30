export const interval = 10000;
export const transitionTime = 1200;
export const delayTime = 100;

function importAll(r) {
  return r.keys().map(r);
}

export const source = importAll(
  require.context("../assets/images/homeSliders", false, /\.(png|jpe?g|svg)$/)
);

const contentImages = [
  {
    title: "A new Online Shop experience",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima fugiat illo et cum! Rerum ut excepturi eaque. Autem, non laboriosam esse perspiciatis culpa ducimus distinctio? Dolore neque natus assumenda",
  },
  {
    title: "Amazing",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima fugiat illo et cum! Rerum ut excepturi eaque. Autem, non laboriosam esse perspiciatis culpa ducimus distinctio? Dolore neque natus assumenda",
  },
  {
    title: "Amazing",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima fugiat illo et cum! Rerum ut excepturi eaque. Autem, non laboriosam esse perspiciatis culpa ducimus distinctio? Dolore neque natus assumenda",
  },
  {
    title: "Slide 4",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima fugiat illo et cum! Rerum ut excepturi eaque. Autem, non laboriosam esse perspiciatis culpa ducimus distinctio? Dolore neque natus assumenda",
  },
  {
    title: "Slide 5",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima fugiat illo et cum! Rerum ut excepturi eaque. Autem, non laboriosam esse perspiciatis culpa ducimus distinctio? Dolore neque natus assumenda",
  },
  {
    title: "Slide 6",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima fugiat illo et cum! Rerum ut excepturi eaque. Autem, non laboriosam esse perspiciatis culpa ducimus distinctio? Dolore neque natus assumenda",
  },
];

export const images = source.map((image, index) => ({
  src: image.default,
  title: contentImages[index].title,
  details: contentImages[index].details,
}));
