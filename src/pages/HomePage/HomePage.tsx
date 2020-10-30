import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../hooks/useScrollToElement';

const Home = ({ isSidebarActive }) => { 
  const javascriptRef = useRef(null);
  const reactRef = useRef(null);
  const nodeRef = useRef(null);
  const scrollToJavascript = useScrollToElement(javascriptRef);
  const scrollToReact = useScrollToElement(reactRef);
  const scrollToNode = useScrollToElement(nodeRef);

  return (
    <Route path='/' exact>
      <Courosel 
        scrollToJavascript={scrollToJavascript}
        scrollToReact={scrollToReact}
        scrollToNode={scrollToNode}
        isSidebarActive={isSidebarActive}
      />
      <Categories 
        javascriptRef={javascriptRef}
        reactRef={reactRef}
        nodeRef={nodeRef}
        isSidebarActive={isSidebarActive}
      />
    </Route>    
  );
};

export default Home;