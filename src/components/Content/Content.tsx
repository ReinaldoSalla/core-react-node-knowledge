import React, { 
  useState, 
  useEffect, 
  useRef,
  MutableRefObject 
} from 'react';
import { 
  computeContentSidebarCircleCN,
  computeContentSidebarTextCN 
} from './Content.names';
import {
  ContentWrapper,
  ContentContainer
} from './Content.styles';
import ContentCore from '../ContentCore';
import useScrollToElement from '../../hooks/useScrollToElement';
import './Content.css';

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

const Content = () => {
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

  const introContentSidebarCircleCN = computeContentSidebarCircleCN(isIntroIntersecting);
  const introContentSidebarTextCN = computeContentSidebarTextCN(isIntroIntersecting);

  const setupContentSidebarCircleCN = computeContentSidebarCircleCN(isSetupIntersecting, isIntroIntersecting);
  const setupContentSidebarTextCN = computeContentSidebarTextCN(isSetupIntersecting, isIntroIntersecting)

  const jsxContentSidebarCircleCN = computeContentSidebarCircleCN(isJsxIntersecting, isSetupIntersecting);
  const jsxContentSidebarTextCN = computeContentSidebarTextCN(isJsxIntersecting, isSetupIntersecting);

  const stylingContentSidebarCircleCN = computeContentSidebarCircleCN(isStylingIntersecting, isJsxIntersecting);
  const stylingContentSidebarTextCN = computeContentSidebarTextCN(isStylingIntersecting, isJsxIntersecting)

  const useStateContentSidebarCircleCN = computeContentSidebarCircleCN(isUseStateIntersecting, isStylingIntersecting);
  const useStateContentSidebarTextCN = computeContentSidebarTextCN(isUseStateIntersecting, isStylingIntersecting);

  const useReducerContentSidebarCircleCN = computeContentSidebarCircleCN(isUseReducerIntersecting, isUseStateIntersecting);
  const useReducerContentSidebarTextCN = computeContentSidebarTextCN(isUseReducerIntersecting, isUseStateIntersecting);

  const finalCodeContentSidebarCircleCN = computeContentSidebarCircleCN(isFinalCodeIntersecting, isUseReducerIntersecting);
  const finalCodeContentSidebarTextCN = computeContentSidebarTextCN(isFinalCodeIntersecting, isUseReducerIntersecting)

  return (
    <ContentWrapper>
      <h1>React - Rendering</h1>
      <ContentContainer>
        <div>
          <ContentCore 
            introDomNode={introDomNode}
            setupDomNode={setupDomNode}
            jsxDomNode={jsxDomNode}
            stylingDomNode={stylingDomNode}
            useStateDomNode={useStateDomNode}
            useReducerDomNode={useReducerDomNode}
            finalCodeDomNode={finalCodeDomNode}
          />
        </div>;

        <ul className='content_sidebar'>

          <li className='content_sidebar-item'>
            <div className={introContentSidebarCircleCN} />
            <span 
              className={introContentSidebarTextCN}
              onClick={scrollToIntro}  
            >  
              1. Intro
            </span>
          </li>

          <li className='content_sidebar-item'>
            <div className={setupContentSidebarCircleCN} />              
            <span 
              className={setupContentSidebarTextCN}
              onClick={scrollToSetup}  
            >
              2. Setup
            </span>
          </li>
          <li className='content_sidebar-item'>
            <div className={jsxContentSidebarCircleCN}/>
            <span 
              className={jsxContentSidebarTextCN}
              onClick={scrollToJsx}  
            >
              3. JSX
            </span>
          </li>
          <li className='content_sidebar-item'>
            <div className={stylingContentSidebarCircleCN}/>
            <span 
              className={stylingContentSidebarTextCN}
              onClick={scrollToStyling}  
            >
              4. Styling
            </span>
          </li>
          <li className='content_sidebar-item'>
            <div className={useStateContentSidebarCircleCN}/>
            <span 
              className={useStateContentSidebarTextCN}
              onClick={scrollToUseState}  
            >
              5. useState
            </span>
          </li>
          <li className='content_sidebar-item'>
            <div className={useReducerContentSidebarCircleCN}/>
            <span 
              className={useReducerContentSidebarTextCN}
              onClick={scrollToUseReducer}  
            >
              6. useReducer
            </span>
          </li>
          <li className='content_sidebar-item'>
            <div className={finalCodeContentSidebarCircleCN}/>
            <span 
              className={finalCodeContentSidebarTextCN}
              onClick={scrollToFinalCode}  
            >
              7. Final Code
            </span>
          </li>
        </ul >
      </ContentContainer>
    </ContentWrapper>
  );
};

export default Content;