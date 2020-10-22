import React from 'react';
import CategoriesBoard from '../CategoriesBoard';
import { ReactComponent as JavaScriptSvg } from  '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import categories from '../../utils/categories-data';
import './Categories.css';

const Categories = ({
  javascriptRef,
  reactRef,
  nodeRef
}) => (
  <main>
    <section className='categories'>
      <CategoriesBoard
        title={categories.javascript.title}
        description={categories.javascript.description}
        contents={categories.javascript.contents}
        Svg={JavaScriptSvg}
        elementRef={javascriptRef}
      />
      <CategoriesBoard
        title={categories.react.title}
        description={categories.react.description}
        contents={categories.react.contents}
        Svg={ReactSvg}
        elementRef={reactRef}
      />
      <CategoriesBoard 
        title={categories.node.title}
        description={categories.node.description}
        contents={categories.node.contents}
        Svg={ServerSvg}
        elementRef={nodeRef}
      />
    </section>
  </main>
);

export default Categories;