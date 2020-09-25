import React from 'react';
import CategoriesContents from '../CategoriesContents';
import './CategoriesItem.css';

const CategoriesItem = ({
  title,
  description,
  contents
}) => (
  <>
    <h2 className='categories-title'>
      {title}
    </h2>
    <h3>
      {description}
    </h3>
    {contents.map((content, index) => (
      <CategoriesContents 
        key={index}
        title={content.title}
        description={content.description}
        path={content.path}
      />
    ))}
  </>
);

export default CategoriesItem;

