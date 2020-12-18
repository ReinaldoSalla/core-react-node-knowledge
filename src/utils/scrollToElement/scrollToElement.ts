const scrollToElement = (elRef, offset): void => {
  window.scrollTo(0, elRef.current?.offsetTop + offset);
};

export default scrollToElement;