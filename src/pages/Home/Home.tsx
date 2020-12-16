import React, {
  useEffect,
  useContext,
  useRef,
  useCallback,
  FunctionComponent
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring';
import Container from './Home.styles';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import scrollToElement from '../../utils/scrollToElement';
import CarouselBackground from '../../components/CarouselBackground';
import { getOpacitySpring } from '../../shared/animations';
import { ModalsState } from '../../shared/context/ModalsContext';

const Home: FunctionComponent = (): JSX.Element => {
  // const javascriptRef = useRef<HTMLElement>(null!);
  // const reactRef = useRef<HTMLElement>(null!);
  // const nodeRef = useRef<HTMLElement>(null!);
  const domNodes = [
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!),
    useRef<HTMLElement>(null!)
  ];

  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const scrollToJavascript = useCallback(() => {
    scrollToElement(domNodes[0], -100);
  }, [domNodes]);

  const scrollToReact = useCallback(() => {
    scrollToElement(domNodes[1], -100);
  }, [domNodes]);

  const scrollToNode = useCallback(() => {
    scrollToElement(domNodes[2], -100);
  }, [domNodes]);

  const { hash } = useLocation();

  useEffect(() => {
    window.onbeforeunload = (): void => {
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
  }, [hash, scrollToJavascript, scrollToNode, scrollToReact]);

  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

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
        <Categories domNodes={domNodes} />
      </Container>
    </>
  );
};

export default Home;
