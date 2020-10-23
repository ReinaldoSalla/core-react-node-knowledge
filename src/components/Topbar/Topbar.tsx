import React from 'react';
import { useSpring } from 'react-spring';
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  const topbarFillerAnimation = useSpring(getTopbarAnimation(isInTop));

  const handleClickHome = () => {
    pathname === '/'
      ? window.scroll({ top: 0, left: 0, behavior: 'smooth'})
      : window.scroll({ top: 0, left: 0});
  };

  return (
    <header>
      <TopbarWrapper>
        <TopbarButton 
          Svg={JavascriptSvg} 
          text='ProgrGuides'
          title='Navigate to the home page'
          tag={Link}
          handleClick={handleClickHome}
          adjustSvg
        />
        <TopbarButton 
          Svg={ContentsSvg} 
          text='Contents'
          title='Acess all contents'
          tag={'button'}
          handleClick={() => console.log('click contents')}
        />
        <TopbarButton 
          Svg={SearchSvg} 
          text='Search'
          title='Search all contents'
          tag={'button'}
          handleClick={() => console.log('click search')}
          adjustSvg
        />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarWrapper>
    </header>
  );
};

export default Topbar;