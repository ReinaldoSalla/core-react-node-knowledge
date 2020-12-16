const scrollToElement = (elRef, offset) => {
  window.scrollTo(0, elRef.current?.offsetTop + offset);
};

export default scrollToElement;
