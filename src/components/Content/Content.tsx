import React, { 
  useState, 
  useEffect, 
  useRef,
  MutableRefObject 
} from 'react';
import { useSpring } from 'react-spring';
import {
  ContentWrapper,
  ContentContainer
} from './Content.styles';
import { getSpring } from './Content.animations';
import ContentCore from '../ContentCore';
import ContentNavigation from '../ContentNavigation';
import useScrollToElement from '../../hooks/useScrollToElement';

const useIntersectionObserver = (
  domNode: MutableRefObject<HTMLDivElement>, 
  rootMargin: string = '-200px'
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
  }, [domNode]);

  return isIntersecting;
};

const Content = ({ isSidebarVisible }) => {
  const introDomNode = useRef<HTMLDivElement>(null!);
  const setupDomNode = useRef<HTMLDivElement>(null!);
  const jsxDomNode = useRef<HTMLDivElement>(null!);
  const stylingDomNode = useRef<HTMLDivElement>(null!);
  const useStateDomNode = useRef<HTMLDivElement>(null!);
  const useReducerDomNode = useRef<HTMLDivElement>(null!);
  const finalCodeDomNode = useRef<HTMLDivElement>(null!);

  const scrollToIntro = useScrollToElement(introDomNode);
  const scrollToSetup = useScrollToElement(setupDomNode);
  const scrollToJsx = useScrollToElement(jsxDomNode);
  const scrollToStyling = useScrollToElement(stylingDomNode);
  const scrollToUseState = useScrollToElement(useStateDomNode);
  const scrollToUseReducer = useScrollToElement(useReducerDomNode);
  const scrollToFinalCode = useScrollToElement(finalCodeDomNode);

  const isIntroIntersecting = useIntersectionObserver(introDomNode, '-100px');
  const isSetupIntersecting = useIntersectionObserver(setupDomNode);
  const isJsxIntersecting = useIntersectionObserver(jsxDomNode);
  const isStylingIntersecting = useIntersectionObserver(stylingDomNode);
  const isUseStateIntersecting = useIntersectionObserver(useStateDomNode);
  const isUseReducerIntersecting = useIntersectionObserver(useReducerDomNode);
  const isFinalCodeIntersecting = useIntersectionObserver(finalCodeDomNode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const spring = useSpring(getSpring(isSidebarVisible));
  
  return (
    <main>
      <ContentWrapper style={spring} disabled={isSidebarVisible}>
        <h1>React - Rendering</h1>
        <ContentContainer>
          <section>
            <ContentCore 
              introDomNode={introDomNode}
              setupDomNode={setupDomNode}
              jsxDomNode={jsxDomNode}
              stylingDomNode={stylingDomNode}
              useStateDomNode={useStateDomNode}
              useReducerDomNode={useReducerDomNode}
              finalCodeDomNode={finalCodeDomNode}
            />
          </section>
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
          />
        </ContentContainer>
      </ContentWrapper>
    </main>
  );
};

export default Content;