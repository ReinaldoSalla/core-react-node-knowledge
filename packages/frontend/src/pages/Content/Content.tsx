import React, {
  useRef,
  useContext,
  useMemo
} from 'react';
import { useSpring } from 'react-spring';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ContentWrapper,
  ContentContainer
} from './Content.styles';
import ContentCore from '../../components/ContentCore';
import ContentNavigation from '../../components/ContentNavigation';
import ContentNull from '../../components/ContentNull';
import scrollToElement from '../../utils/scrollToElement';
import getOpacitySpring from '../../shared/animations';
import { ModalsState } from '../../shared/context/ModalsContext';
import texts from '../../constants/texts';
import getDelimiters from './Content.utils';
import useIsIntersecting from '../../hooks/useIsIntersecting';
import { hifenToCamel } from '../../utils/textManipulation';

const Content = (): JSX.Element | null => {
  const { id }: any = useParams();
  const target: any = texts[hifenToCamel(id)];

  const delimiters = useMemo(() => getDelimiters(target), [target]);

  const domNodes = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null)
  ];

  const scrolls = [
    (): void => scrollToElement(domNodes[0], -10),
    (): void => scrollToElement(domNodes[1], -10),
    (): void => scrollToElement(domNodes[2], -10),
    (): void => scrollToElement(domNodes[3], -10),
    (): void => scrollToElement(domNodes[4], -10),
    (): void => scrollToElement(domNodes[5], -10)
  ];

  const isIntersecting = [
    useIsIntersecting(domNodes[0], '-100px'),
    useIsIntersecting(domNodes[1]),
    useIsIntersecting(domNodes[2]),
    useIsIntersecting(domNodes[3]),
    useIsIntersecting(domNodes[4]),
    useIsIntersecting(domNodes[5])
  ];

  const { isTopbarSidebarVisible } = useContext(ModalsState);
  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

  // useEffect(() => {
  //   window.onbeforeunload = (): void => {
  //     if (!hash) {
  //       window.scroll(0, 0);
  //     }
  //   };
  // }, [hash, delimiters]);

  if (!target) {
    return <ContentNull id={id} />;
  }

  return (
    <main>
      <Helmet>
        <title>
          {target.title}
          {' '}
          - ProgrTmp
        </title>
        <meta
          name='description'
          content={target.seo}
        />
      </Helmet>
      <ContentWrapper
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
      >
        <ContentContainer>
          <ContentCore
            domNodes={domNodes}
            target={target}
          />
          <ContentNavigation
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