import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import VideoBackground from '../../components/VideoBackground';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../custom-hooks/scroll-to-element';

const HomePage = () => { 
  const scrollToElement = useScrollToElement(500);
  return (
    <Route path='/' exact>
      <VideoBackground />
      <Courosel />
      <Categories />
    </Route>    
  );
};

export default HomePage;