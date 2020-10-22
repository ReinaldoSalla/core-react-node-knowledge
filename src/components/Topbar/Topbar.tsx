import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { getTopbarAnimation } from './Topbar.animations';
import useIsInTop from '../../hooks/useIsInTop';
import TopbarButton from '../TopbarButton';
import { ReactComponent as ContentsSvg } from '../../assets/icons/contents.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';
import {
  TopbarWrapper,
  TopbarFiller
} from './Topbar.styles';
import TopbarHome from '../TopbarHome';

const Topbar = () => {
  const isInTop = useIsInTop(50);

  const topbarFillerAnimation = useSpring(getTopbarAnimation(isInTop));

  return (
    <header>
      <TopbarWrapper>
        <TopbarHome />
        <TopbarButton Svg={ContentsSvg} text='Contents' />
        <TopbarButton Svg={SearchSvg} text='Search' large/>
        <TopbarButton Svg={ProfileSvg} text='Profile' />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarWrapper>
    </header>
  );
};

export default Topbar;