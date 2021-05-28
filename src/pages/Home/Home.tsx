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

  const asyncNode = useRef<HTMLElement>(null);
  const collectionsNode = useRef<HTMLElement>(null);
  const reactNode = useRef<HTMLElement>(null);
  const domNodes = [asyncNode, collectionsNode, reactNode];

  const scrollToAsync = useCallback(() => {
    scrollToElement(asyncNode, -100);
  }, [asyncNode]);

  const scrollToCollections = useCallback(() => {
    scrollToElement(collectionsNode, -100);
  }, [collectionsNode]);

  const scrollToReact = useCallback(() => {
    scrollToElement(reactNode, -100);
  }, [reactNode]);

  const scrolls = [scrollToAsync, scrollToCollections, scrollToReact];

  const { hash } = useLocation();

  // useEffect(() => {
  //   window.onbeforeunload = (): void => {
  //     if (!hash) {
  //       window.scroll(0, 0);
  //     }
  //   };
  // }, [hash]);

  useEffect(() => {
    if (hash === '#asynchronous') {
      scrollToAsync();
    } else if (hash === '#collections') {
      scrollToCollections();
    } else if (hash === '#react') {
      scrollToReact();
    }
  }, [hash, scrollToAsync, scrollToCollections, scrollToReact]);

  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

  return (
    <>
      <Helmet>
        <title>
          ProgrTmp - Interview Questions for JavaScript, Node.js and React.js
        </title>
        <meta
          name='description'
          content={
            'Interview questions, solutions, tutorials, guidesfor JavaScript, '
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
