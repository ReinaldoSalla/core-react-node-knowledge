const useScrollToElement = (elRef) => {
  const scrollToElement = () => {
    window.scrollTo(0, elRef);
  }
  return scrollToElement;
};

export default useScrollToElement;