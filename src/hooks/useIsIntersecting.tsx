import {
  useState, useEffect, useRef,
} from 'react';

const useIsIntersecting = (
  domNode: any,
  rootMargin = '-200px',
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html
    const getObserver = (): IntersectionObserver | null => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
        }, { root: null, rootMargin, threshold: 0 });
        return observerRef.current;
      }
      return null;
    };

    const observer = getObserver();
    const localDomNode = domNode.current;
    if (observer !== null) {
      observer.observe(localDomNode);
      return (): void => {
        observer.unobserve(localDomNode);
      };
    }
    return undefined;
  }, [domNode, rootMargin]);

  return isIntersecting;
};

export default useIsIntersecting;