const getDelimiters = (target) => {
  return target.text.map((item) => {
    return item.subtitle;
  });
};

export default getDelimiters;
