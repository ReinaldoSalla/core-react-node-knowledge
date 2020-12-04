import React, { useEffect, useRef, FunctionComponent } from 'react';
import { Route, useLocation } from 'react-router-dom';
import HomeProps from './Home.types';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import scrollToElement from '../../utils/scrollToElement';

const Home: FunctionComponent<HomeProps> = ({ 
  isSidebarVisible,
  closeSidebar 
}): JSX.Element => { 
  const javascriptRef = useRef<HTMLElement>(null!);
  const reactRef = useRef<HTMLElement>(null!);
  const nodeRef = useRef<HTMLElement>(null!);

  const scrollToJavascript = () => scrollToElement(javascriptRef, -100);
  const scrollToReact = () => scrollToElement(reactRef, -100);
  const scrollToNode = () => scrollToElement(nodeRef, -100);

  const { hash } = useLocation();

  useEffect(() => {
    window.onbeforeunload = () => {
      if (!hash) {
        window.scroll(0, 0);
      }
    };
  }, [hash]);

  useEffect(() => {
    if (hash === '#javascript') {
      scrollToJavascript();
    } else if (hash === '#react') {
      scrollToReact();
    } else if (hash === '#node') {
      scrollToNode();
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Carousel 
        scrollToJavascript={scrollToJavascript}
        scrollToReact={scrollToReact}
        scrollToNode={scrollToNode}
        isSidebarVisible={isSidebarVisible}
        closeSidebar={closeSidebar}
      />
      <Categories 
        javascriptRef={javascriptRef}
        reactRef={reactRef}
        nodeRef={nodeRef}
        isSidebarVisible={isSidebarVisible}
        closeSidebar={closeSidebar}
      />
    </>
  );
};

export default Home;