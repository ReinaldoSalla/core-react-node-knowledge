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
  // const data = getContent(id);
  // data needs to have the title, subtitles, text and code
  // maybe a markdown file

  // const introDomNode = useRef<HTMLElement>(null!);
  // const setupDomNode = useRef<HTMLElement>(null!);
  // const jsxDomNode = useRef<HTMLElement>(null!);
  // const stylingDomNode = useRef<HTMLElement>(null!);
  // const useStateDomNode = useRef<HTMLElement>(null!);
  // const useReducerDomNode = useRef<HTMLElement>(null!);
  // const finalCodeDomNode = useRef<HTMLElement>(null!);
  
  // const scrollToIntro = () => scrollToElement(introDomNode, -10);
  // const scrollToSetup = () => scrollToElement(setupDomNode, -10);
  // const scrollToJsx = () => scrollToElement(jsxDomNode, -10);
  // const scrollToStyling = () => scrollToElement(stylingDomNode, -10);
  // const scrollToUseState = () => scrollToElement(useStateDomNode, -10);
  // const scrollToUseReducer = () => scrollToElement(useReducerDomNode, -10);
  // const scrollToFinalCode = () => scrollToElement(finalCodeDomNode, -10);
  
  // const isIntroIntersecting = useIntersectionObserver(introDomNode, '-100px');
  // const isSetupIntersecting = useIntersectionObserver(setupDomNode);
  // const isJsxIntersecting = useIntersectionObserver(jsxDomNode);
  // const isStylingIntersecting = useIntersectionObserver(stylingDomNode);
  // const isUseStateIntersecting = useIntersectionObserver(useStateDomNode);
  // const isUseReducerIntersecting = useIntersectionObserver(useReducerDomNode);
  // const isFinalCodeIntersecting = useIntersectionObserver(finalCodeDomNode);

  // const domNodes = new Array(delimiters.length).fill(0).map((_) => {
  //   return useRef<HTMLElement>(null!);
  // });

  // const scrolls = new Array(delimiters.length).fill(0).map((_, index) => {
  //   return () => scrollToElement(domNodes[index], -10);
  // });

  // const isIntersecting = new Array(delimiters.length).fill(0).map((_, index) => {
  //   return useIntersectionObserver(domNodes[index]);
  // });

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

  // useEffect(() => {
  //   if (hash === '#intro') {
  //     scrollToIntro();
  //   } else if (hash === '#setup') {
  //     scrollToSetup();
  //   } else if (hash === '#jsx') {
  //     scrollToJsx();
  //   } else if (hash === '#styling') {
  //     scrollToStyling();
  //   } else if (hash === '#useState') {
  //     scrollToUseState();
  //   } else if (hash === '#useReducer') {
  //     scrollToUseReducer();
  //   } else if (hash === '#final-code') {
  //     scrollToFinalCode();
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [hash]);  

  return (
    // <main>
    //   <h1>{data.simpleStateManagement.title}</h1>
    //   {data.simpleStateManagement.text.map((element) => (
    //     <React.Fragment key={element.subtitle}>
    //       <h2 style={{ color: 'white' }}>{element.subtitle}</h2>
    //       {element.paragraphsCommandsCode.map((innerElement, innerIndex) => {
    //         if (innerElement.hasOwnProperty('paragraph')) {
    //           return <p key={innerIndex} style={{color:'white'}}>{innerElement.paragraph}</p>
    //         } else if (innerElement.hasOwnProperty('code')) {
    //           return <p key={innerIndex} style={{color:'white',border:'1px solid red'}}>{innerElement.code}</p>
    //         }
    //       })}          
    //     </React.Fragment>     
    //   ))}
    <main>
      <ContentWrapper 
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
      >
        <ContentContainer>
          <ContentCore 
            // introDomNode={introDomNode}
            // setupDomNode={setupDomNode}
            // jsxDomNode={jsxDomNode}
            // stylingDomNode={stylingDomNode}
            // useStateDomNode={useStateDomNode}
            // useReducerDomNode={useReducerDomNode}
            // finalCodeDomNode={finalCodeDomNode}
            domNodes={domNodes}
            data={data}
          />
          <ContentNavigation 
            // isIntroIntersecting={isIntroIntersecting}
            // isSetupIntersecting={isSetupIntersecting}
            // isJsxIntersecting={isJsxIntersecting}
            // isStylingIntersecting={isStylingIntersecting}
            // isUseStateIntersecting={isUseStateIntersecting}
            // isUseReducerIntersecting={isUseReducerIntersecting}
            // isFinalCodeIntersecting={isFinalCodeIntersecting}
            // scrollToIntro={scrollToIntro}
            // scrollToSetup={scrollToSetup}
            // scrollToJsx={scrollToJsx}
            // scrollToStyling={scrollToStyling}
            // scrollToUseState={scrollToUseState}
            // scrollToUseReducer={scrollToUseReducer}
            // scrollToFinalCode={scrollToFinalCode}
            isIntersecting={isIntersecting}
            scrolls={scrolls}
            delimiters={delimiters}
          />
        </ContentContainer>
      </ContentWrapper>
    </main>
  );
};

export default Content;