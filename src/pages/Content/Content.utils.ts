const getDelimiters = (target: any): Array<string> => (
  target.text.map((item: any) => item.subtitle)
);

export default getDelimiters;