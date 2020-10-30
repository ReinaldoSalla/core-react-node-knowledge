import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../hooks/useScrollToElement';

const Home = ({ isSidebarVisible }) => { 
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