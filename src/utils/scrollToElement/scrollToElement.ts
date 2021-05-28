const scrollToElement = (elRef: any, offset: number): void => {
  window.scrollTo(0, elRef.current?.offsetTop + offset);
};

export default scrollToElement;
