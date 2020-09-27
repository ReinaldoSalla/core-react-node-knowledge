import React from 'react';
import CategoriesItem from '../CategoriesItem';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import categories from '../../general-utils/categories';
import './Categories.css';

const Categories = () => (
	<div className='categories'>
		<CategoriesItem
			title={categories.javascript.title}
			description={categories.javascript.description}
      contents={categories.javascript.contents}
      Svg={JavaScriptSvg}
		/>
    <CategoriesItem
      title={categories.react.title}
      description={categories.react.description}
      contents={categories.react.contents}
      Svg={ReactSvg}
    />
    <CategoriesItem 
      title={categories.node.title}
      description={categories.node.description}
      contents={categories.node.contents}
      Svg={ServerSvg}
    />
	</div>
);

export default Categories;