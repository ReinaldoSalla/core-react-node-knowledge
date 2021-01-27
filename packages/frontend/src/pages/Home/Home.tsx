import React, {
  useEffect,
  useContext,
  useRef,
  useCallback,
  FunctionComponent
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { Helmet } from 'react-helmet-async';
import Container from './Home.styles';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import scrollToElement from '../../utils/scrollToElement';
import getOpacitySpring from '../../shared/animations';
import { ModalsState } from '../../shared/context/ModalsContext';

const Home: FunctionComponent = (): JSX.Element => {
  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const javascriptNode = useRef<HTMLElement>(null);
  const reactNode = useRef<HTMLElement>(null);
  const fullstackNode = useRef<HTMLElement>(null);
  const domNodes = [javascriptNode, reactNode, fullstackNode];

  const scrollToJavascript = useCallback(() => {
    scrollToElement(javascriptNode, -100);
  }, [javascriptNode]);

  const scrollToReact = useCallback(() => {
    scrollToElement(reactNode, -100);
  }, [reactNode]);

  const scrollToNode = useCallback(() => {
    scrollToElement(fullstackNode, -100);
  }, [fullstackNode]);

  const scrolls = [scrollToJavascript, scrollToReact, scrollToNode];

  const { hash } = useLocation();

  // useEffect(() => {
  //   window.onbeforeunload = (): void => {
  //     if (!hash) {
  //       window.scroll(0, 0);
  //     }
  //   };
  // }, [hash]);

  useEffect(() => {
    if (hash === '#javascript') {
      scrollToJavascript();
    } else if (hash === '#react') {
      scrollToReact();
    } else if (hash === '#full-stack') {
      scrollToNode();
    }
  }, [hash, scrollToJavascript, scrollToReact, scrollToNode]);

  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

  return (
    <>
      <Helmet>
        <title>ProgrTmp</title>
        <meta
          name='description'
          content={
            'Interview questions, tutorials, guides for JavaScript, '
            + 'TypeScript and React'
          }
        />
      </Helmet>
      <Container
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
        $fixedHeight
      >
        <Carousel scrolls={scrolls} />
      </Container>
      <Container
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
      >
        <Categories domNodes={domNodes} />
      </Container>
    </>
  );
};

export default Home;