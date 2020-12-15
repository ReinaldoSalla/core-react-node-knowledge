import React, { 
  useState, 
  useEffect, 
  useRef,
  MutableRefObject,
  useContext
} from 'react';
import { useSpring } from 'react-spring';
import { useLocation, useParams } from 'react-router-dom';
import {
  ContentWrapper,
  ContentContainer
} from './Content.styles';
import ContentCore from '../../components/ContentCore';
import ContentNavigation from '../../components/ContentNavigation';
import scrollToElement from '../../utils/scrollToElement';
import { getOpacitySpring } from '../../shared/animations';
import { ModalsState } from '../../shared/context/ModalsContext';
import { data, delimiters } from './Content.data';
import texts from '../../constants/texts';
import getDelimiters from './Content.utils';

const useIntersectionObserver = (
  domNode: MutableRefObject<HTMLElement>, 
  rootMargin = '-200px'
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html
    const getObserver= () => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
        }, { root: null, rootMargin: rootMargin, threshold: 0 });
        return observerRef.current;
      }
      return null;
    };

    const observer = getObserver();
    const localDomNode = domNode.current;
    if (observer !== null) {
      observer.observe(localDomNode);
      return () => observer.unobserve(localDomNode);
    }
  }, [domNode, rootMargin]);

  return isIntersecting;
};

const Content = () => {
  const { hash } = useLocation();
  const { id } = useParams();
  const target = texts[id];
  const tmpDelimiters = getDelimiters(target);

  const domNodes = [
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!),
  ];

  const scrolls = [
    () => scrollToElement(domNodes[0], -10),
    () => scrollToElement(domNodes[1], -10),
    () => scrollToElement(domNodes[2], -10),
    () => scrollToElement(domNodes[3], -10),
    () => scrollToElement(domNodes[4], -10),
    () => scrollToElement(domNodes[5], -10),
  ];

  const isIntersecting = [
    useIntersectionObserver(domNodes[0], '-100px'),
    useIntersectionObserver(domNodes[1]),
    useIntersectionObserver(domNodes[2]),
    useIntersectionObserver(domNodes[3]),
    useIntersectionObserver(domNodes[4]),
    useIntersectionObserver(domNodes[5]),
  ];
  
  const { isTopbarSidebarVisible } = useContext(ModalsState);
  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

  useEffect(() => {
    window.onbeforeunload = () => {
      if (!hash) {
        window.scroll(0, 0);
      }
    };
  }, [hash]);

  useEffect(() => {
    if (hash) {
      for (const [index, delimiter] of delimiters.entries()) {
        if (hash === `#${delimiter.trim()}`) {
          scrolls[index]();
          break;
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <ContentWrapper 
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
      >
        <ContentContainer>
          <ContentCore 
            domNodes={domNodes}
            data={target}
          />
          <ContentNavigation 
            isIntersecting={isIntersecting}
            scrolls={scrolls}
            delimiters={tmpDelimiters}
          />
        </ContentContainer>
      </ContentWrapper>
    </main>
  );
};

export default Content;