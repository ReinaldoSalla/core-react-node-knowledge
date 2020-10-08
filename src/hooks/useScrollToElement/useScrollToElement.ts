const useScrollToElement = (elRef) => {
  const scrollToElement = () => {
    window.scrollTo(0, elRef.current?.offsetTop - 100);
  }
  return scrollToElement;
};

export default useScrollToElement;