import React from 'react';
import { useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { getTopbarAnimation } from './Topbar.animations';
import useIsInTop from '../../hooks/useIsInTop';
import { ReactComponent as JavascriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ContentsSvg } from '../../assets/icons/contents.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import {
  TopbarWrapper,
  TopbarFiller
} from './Topbar.styles';
import TopbarButton from '../TopbarButton';

const Topbar = () => {
  const isInTop = useIsInTop(50);

  const topbarFillerAnimation = useSpring(getTopbarAnimation(isInTop));

  return (
    <header>
      <TopbarWrapper>
        <TopbarButton 
          Svg={JavascriptSvg} 
          text='ProgrGuides'
          title='Navigate to the home page'
          tag={Link}
          adjustSvg
        />
        <TopbarButton 
          Svg={ContentsSvg} 
          text='Contents'
          title='Acess all contents'
          tag={Link}
        />
        <TopbarButton 
          Svg={SearchSvg} 
          text='Search'
          title='Search all contents'
          tag={Link}
          adjustSvg
        />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarWrapper>
    </header>
  );
};

export default Topbar;