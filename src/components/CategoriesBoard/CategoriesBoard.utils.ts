const getIndexArr = (length: number): Array<number> => (
  new Array(length).fill(0).map((_, index) => index)
);

export default getIndexArr;
