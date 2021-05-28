const getDelimiters = (target: any): Array<string> | null => (
  target ? target.text.map((item: any) => item.subtitle) : null
);

export default getDelimiters;
