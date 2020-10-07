import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import VideoBackground from '../../components/VideoBackground';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../custom-hooks/scroll-to-element';

const HomePage = () => { 
  const javascriptRef: any = useRef(null);
  const reactRef: any = useRef(null);
  const nodeRef: any = useRef(null);
  const scrollToJavascript = useScrollToElement(500);
  const scrollToReact = useScrollToElement(1000);
  const scrollToNode = useScrollToElement(2000);
  return (
    <Route path='/' exact>
      <VideoBackground />
      <Courosel 
        scrollToJavascript={scrollToJavascript}
        scrollToReact={scrollToReact}
        scrollToNode={scrollToNode}
      />
      <Categories />
    </Route>    
  );
};

export default HomePage;