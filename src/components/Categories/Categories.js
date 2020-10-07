import React from 'react';
import CategoriesItem from './Categories-subcomponents/CategoriesItem';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import categories from '../../utils/categories-data';
import './Categories.css';

const Categories = ({
  javascriptRef,
  reactRef,
  nodeRef
}) => (
	<div className='categories'>
		<CategoriesItem
			title={categories.javascript.title}
			description={categories.javascript.description}
      contents={categories.javascript.contents}
      Svg={JavaScriptSvg}
      elementRef={javascriptRef}
		/>
    <CategoriesItem
      title={categories.react.title}
      description={categories.react.description}
      contents={categories.react.contents}
      Svg={ReactSvg}
      elementRef={reactRef}
    />
    <CategoriesItem 
      title={categories.node.title}
      description={categories.node.description}
      contents={categories.node.contents}
      Svg={ServerSvg}
      elementRef={nodeRef}
    />
	</div>
);

export default Categories;