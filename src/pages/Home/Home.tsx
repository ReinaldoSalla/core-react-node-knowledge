import React, { useEffect, useContext, useRef, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { HomeProps } from './Home.types';
import Container from './Home.styles';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import scrollToElement from '../../utils/scrollToElement';
import CarouselBackground from '../../components/CarouselBackground';
import { getOpacitySpring } from '../../shared/animations';
import { ModalsState } from '../../shared/context/ModalsContext';

const Home: FunctionComponent = (): JSX.Element => { 
  const javascriptRef = useRef<HTMLElement>(null!);
  const reactRef = useRef<HTMLElement>(null!);
  const nodeRef = useRef<HTMLElement>(null!);

  const { isTopbarSidebarVisible } = useContext(ModalsState);

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
  
  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

  const numRenders =useRef<number>(0);

  useEffect(() => {
    console.log(`Home re-render #${numRenders.current++}`)
  })

  return (
    <>
      <Container style={spring} $isTopbarSidebarVisible={isTopbarSidebarVisible} $fixedHeight>
        <CarouselBackground />
        <Carousel 
          scrollToJavascript={scrollToJavascript}
          scrollToReact={scrollToReact}
          scrollToNode={scrollToNode}
        />
      </Container>
      <Container style={spring} $isTopbarSidebarVisible={isTopbarSidebarVisible}>
        <Categories 
          javascriptRef={javascriptRef}
          reactRef={reactRef}
          nodeRef={nodeRef}
        />
      </Container>
    </>
  );
};

export default Home;