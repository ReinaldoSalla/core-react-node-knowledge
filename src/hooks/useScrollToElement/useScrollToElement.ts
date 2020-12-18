import { MutableRefObject } from 'react';

const useScrollToElement = (
  elRef: MutableRefObject<HTMLElement>,
  offset = 0,
): (
) => void => {
  const scrollToElement = (): void => {
    window.scrollTo(0, elRef.current?.offsetTop + offset);
  };
  return scrollToElement;
};

export default useScrollToElement;