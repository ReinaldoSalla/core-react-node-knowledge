import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopbarButton from './Topbar-subcomponents/TopbarButton';
import { ReactComponent as ContentsSvg } from '../../assets/icons/contents.svg'
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';
import './Topbar.css';

const Topbar = () => {
  const [isInTop, setIsInTop] = useState(window.pageYOffset <= 50);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsInTop(window.pageYOffset <= 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <header>
      <nav className='topbar'>
        <TopbarButton Svg={ContentsSvg} text='Contents' />
        <TopbarButton Svg={JavaScriptSvg} text='Home' large/>
        <TopbarButton Svg={SearchSvg} text='Search' large/>
        <TopbarButton Svg={ProfileSvg} text='Profile' />
        <div className={`topbar-filler${isInTop && pathname === '/' ? '' : ' topbar-filler-transition'}`} />
      </nav>
    </header>
  );
};

export default Topbar;


