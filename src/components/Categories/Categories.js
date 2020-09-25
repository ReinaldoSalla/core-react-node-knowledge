import React from 'react';
import CategoriesItem from '../CategoriesItem';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import categories from '../../general-utils/categories';
import './Categories.css';

const Categories = () => (
	<>
		<CategoriesItem
			title={categories.javascript.title}
			description={categories.javascript.description}
      contents={categories.javascript.contents}
      Svg={JavaScriptSvg}
		/>
	</>
);

export default Categories;
