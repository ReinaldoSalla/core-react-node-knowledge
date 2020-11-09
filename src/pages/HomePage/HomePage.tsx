import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../hooks/useScrollToElement';

const Home = ({ isSidebarVisible }) => { 
  const javascriptRef = useRef<HTMLElement>(null!);
  const reactRef = useRef<HTMLElement>(null!);
  const nodeRef = useRef<HTMLElement>(null!);
  const scrollToJavascript = useScrollToElement(javascriptRef, -100);
  const scrollToReact = useScrollToElement(reactRef, -100);
  const scrollToNode = useScrollToElement(nodeRef, -100);

  return (
    <Route path='/' exact>
      <Courosel 
        scrollToJavascript={scrollToJavascript}
        scrollToReact={scrollToReact}
        scrollToNode={scrollToNode}
        isSidebarVisible={isSidebarVisible}
      />
      <Categories 
        javascriptRef={javascriptRef}
        reactRef={reactRef}
        nodeRef={nodeRef}
        isSidebarVisible={isSidebarVisible}
      />
    </Route>    
  );
};

export default Home;