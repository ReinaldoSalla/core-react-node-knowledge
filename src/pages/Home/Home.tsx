import React, { useEffect, useRef, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import HomeProps from './Home.types';
import Container from './Home.styles';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import scrollToElement from '../../utils/scrollToElement';
import CarouselBackground from '../../components/CarouselBackground';
import { getOpacitySpring } from '../../shared/animations';

const Home: FunctionComponent<HomeProps> = ({ 
  isSidebarVisible,
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

  const nCalls = useRef<number>(0);
  
  useEffect(() => {
    nCalls.current++;
    console.log(`Home re-render #${nCalls.current}`);
  });

  const spring = useSpring(getOpacitySpring(isSidebarVisible));

  return (
    <>
      <Container style={spring}>
        <CarouselBackground />
        <Carousel 
          scrollToJavascript={scrollToJavascript}
          scrollToReact={scrollToReact}
          scrollToNode={scrollToNode}
          isSidebarVisible={isSidebarVisible}
        />
      </Container>
      <animated.div style={spring}>
        <Categories 
          javascriptRef={javascriptRef}
          reactRef={reactRef}
          nodeRef={nodeRef}
          isSidebarVisible={isSidebarVisible}
        />
      </animated.div>
    </>
  );
};

export default Home;