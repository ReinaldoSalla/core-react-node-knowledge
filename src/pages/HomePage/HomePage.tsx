import React, { FunctionComponent, useRef } from 'react';
import { Route } from 'react-router-dom';
import HomeProps from './Home.types';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import useScrollToElement from '../../hooks/useScrollToElement';

const Home: FunctionComponent<HomeProps> = ({ 
  isSidebarVisible,
  closeSidebar 
}): JSX.Element => { 
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
        closeSidebar={closeSidebar}
      />
    </Route>    
  );
};

export default Home;