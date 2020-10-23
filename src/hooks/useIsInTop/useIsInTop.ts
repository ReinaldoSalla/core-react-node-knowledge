import { useState, useEffect } from 'react';

const useIsInTop = (offset: number): boolean => {
  const [isInTop, setIsInTop] = useState(window.pageYOffset <= offset);

  useEffect(() => {
    const onScroll = () => {
      setIsInTop(window.pageYOffset <= offset);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isInTop, offset]);

  return isInTop;
};

export default useIsInTop;