import React, { 
  useState, 
  useEffect, 
  useRef,
  MutableRefObject 
} from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
import {
  ContentWrapper,
  ContentContainer
} from './Content.styles';
import { getSpring } from './Content.animations';
import ContentCore from '../../components/ContentCore';
import ContentNavigation from '../../components/ContentNavigation';
import scrollToElement from '../../utils/scrollToElement';

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

const Content = ({ isSidebarVisible, closeSidebar }) => {
  const introDomNode = useRef<HTMLElement>(null!);
  const setupDomNode = useRef<HTMLElement>(null!);
  const jsxDomNode = useRef<HTMLElement>(null!);
  const stylingDomNode = useRef<HTMLElement>(null!);
  const useStateDomNode = useRef<HTMLElement>(null!);
  const useReducerDomNode = useRef<HTMLElement>(null!);
  const finalCodeDomNode = useRef<HTMLElement>(null!);
  
  const scrollToIntro = () => scrollToElement(introDomNode, -10);
  const scrollToSetup = () => scrollToElement(setupDomNode, -10);
  const scrollToJsx = () => scrollToElement(jsxDomNode, -10);
  const scrollToStyling = () => scrollToElement(stylingDomNode, -10);
  const scrollToUseState = () => scrollToElement(useStateDomNode, -10);
  const scrollToUseReducer = () => scrollToElement(useReducerDomNode, -10);
  const scrollToFinalCode = () => scrollToElement(finalCodeDomNode, -10);

  const isIntroIntersecting = useIntersectionObserver(introDomNode, '-100px');
  const isSetupIntersecting = useIntersectionObserver(setupDomNode);
  const isJsxIntersecting = useIntersectionObserver(jsxDomNode);
  const isStylingIntersecting = useIntersectionObserver(stylingDomNode);
  const isUseStateIntersecting = useIntersectionObserver(useStateDomNode);
  const isUseReducerIntersecting = useIntersectionObserver(useReducerDomNode);
  const isFinalCodeIntersecting = useIntersectionObserver(finalCodeDomNode);

  const spring = useSpring(getSpring(isSidebarVisible));

  const { hash } = useLocation();

  useEffect(() => {
    window.onbeforeunload = () => {
      if (!hash) {
        window.scroll(0, 0);
      }
    };
  }, [hash]);

  useEffect(() => {
    if (hash === '#intro') {
      scrollToIntro();
    } else if (hash === '#setup') {
      scrollToSetup();
    } else if (hash === '#jsx') {
      scrollToJsx();
    } else if (hash === '#styling') {
      scrollToStyling();
    } else if (hash === '#useState') {
      scrollToUseState();
    } else if (hash === '#useReducer') {
      scrollToUseReducer();
    } else if (hash === '#final-code') {
      scrollToFinalCode();
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);  

  return (
    <main>
      <ContentWrapper 
        style={spring} 
        $isSidebarVisible={isSidebarVisible}
        onClick={closeSidebar}  
      >
        <ContentContainer>
          <ContentCore 
            introDomNode={introDomNode}
            setupDomNode={setupDomNode}
            jsxDomNode={jsxDomNode}
            stylingDomNode={stylingDomNode}
            useStateDomNode={useStateDomNode}
            useReducerDomNode={useReducerDomNode}
            finalCodeDomNode={finalCodeDomNode}
            isSidebarVisible={isSidebarVisible}
          />
          <ContentNavigation 
            isIntroIntersecting={isIntroIntersecting}
            isSetupIntersecting={isSetupIntersecting}
            isJsxIntersecting={isJsxIntersecting}
            isStylingIntersecting={isStylingIntersecting}
            isUseStateIntersecting={isUseStateIntersecting}
            isUseReducerIntersecting={isUseReducerIntersecting}
            isFinalCodeIntersecting={isFinalCodeIntersecting}
            scrollToIntro={scrollToIntro}
            scrollToSetup={scrollToSetup}
            scrollToJsx={scrollToJsx}
            scrollToStyling={scrollToStyling}
            scrollToUseState={scrollToUseState}
            scrollToUseReducer={scrollToUseReducer}
            scrollToFinalCode={scrollToFinalCode}
            isSidebarVisible={isSidebarVisible}
          />
        </ContentContainer>
      </ContentWrapper>
    </main>
  );
};

export default Content;