import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import Courosel from '../Home-components/Courosel/Courosel-component';
import Categories from '../Home-components/Categories/Categories-component';
import useScrollToElement from '../../../hooks/useScrollToElement';

const Home = () => { 
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
      />
      <Categories 
        javascriptRef={javascriptRef}
        reactRef={reactRef}
        nodeRef={nodeRef}
      />
    </Route>    
  );
};

export default Home;