import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import VideoBackground from '../../components/VideoBackground';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../custom-hooks/scroll-to-element';

const HomePage = () => { 
  const javascriptRef = useRef(null);
  const reactRef = useRef(null);
  const nodeRef = useRef(null);
  const scrollToJavascript = useScrollToElement(javascriptRef);
  const scrollToReact = useScrollToElement(reactRef);
  const scrollToNode = useScrollToElement(nodeRef);

  return (
    <Route path='/' exact>
      <VideoBackground />
      <Courosel 
        scrollToJavascript={scrollToJavascript}
        scrollToReact={scrollToReact}
        scrollToNode={scrollToNode}
      />
      <Categories 
        javascriptRef={javascriptRef}
        reactRef={reactRef}
        nodeRef={nodeRef}
      />
    </Route>    
  );
};

export default HomePage;