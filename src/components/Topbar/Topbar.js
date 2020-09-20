import React from 'react';
import TopbarButton from '../TopbarButton';
import { ReactComponent as ContentsSvg } from '../../assets/icons/contents.svg'
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';
import { ReactComponent as ProfileSvg } from '../../assets/icons/profile.svg';
import './Topbar.css';

const Topbar = () => {
  return (
    <header>
      <nav className='topbar'>
        <TopbarButton Svg={ContentsSvg} text='Contents' />
        <TopbarButton Svg={JavaScriptSvg} text='Home' large/>
        <TopbarButton Svg={SearchSvg} text='Search' large/>
        <TopbarButton Svg={ProfileSvg} text='Profile' />
      </nav>
    </header>
  );
};

export default Topbar;


