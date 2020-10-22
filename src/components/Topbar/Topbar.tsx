import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring, config } from 'react-spring';
import useIsInTop from '../../hooks/useIsInTop';
import TopbarButton from '../TopbarButton';
import { ReactComponent as ContentsSvg } from '../../assets/icons/contents.svg';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';
import { getTopbarAnimation } from './Topbar.animations';
import {
  TopbarWrapper,
  TopbarFiller
} from './Topbar.styles';

const Topbar = () => {
  const isInTop = useIsInTop(50);
  const { pathname } = useLocation();

  const topbarFillerAnimation = useSpring(getTopbarAnimation(isInTop));

  return (
    <header>
      <TopbarWrapper>
        <TopbarButton Svg={ContentsSvg} text='Contents' />
        <TopbarButton Svg={JavaScriptSvg} text='Home' large/>
        <TopbarButton Svg={SearchSvg} text='Search' large/>
        <TopbarButton Svg={ProfileSvg} text='Profile' />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarWrapper>
    </header>
  );
};

export default Topbar;