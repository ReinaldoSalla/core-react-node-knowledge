import React from 'react';
import CategoriesItem from '../CategoriesItem';
import categories from '../../general-utils/categories';
import './Categories.css';

const Categories = () => (
	<>
		<CategoriesItem
			title={categories.javascript.title}
			description={categories.javascript.description}
			contents={categories.javascript.contents}
		/>
	</>
);

export default Categories;
