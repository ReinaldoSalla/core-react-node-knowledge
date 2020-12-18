const getDelimiters = (target): Array<string> => target.text.map((item) => (
  item.subtitle
));

export default getDelimiters;