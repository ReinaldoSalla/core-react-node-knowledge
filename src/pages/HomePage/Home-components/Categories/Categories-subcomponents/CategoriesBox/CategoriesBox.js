import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesBox.css'

const CategoriesBox = ({ 
  title, 
  description, 
  path,
  Svg 
}) => (
  <Link className='categoriescontent' to={path}>
    <div className='categoriescontent-iconwrapper'>
      <Svg className='categoriescontent-iconwrapper-icon'/>
    </div>
    <h4 className='categoriescontent-title'>
      {title}
    </h4>
    <div className='categoriescontent-descriptionwrapper'>
      <p className='categoriescontent-descriptionwrapper-description'>
        {description}
      </p>
    </div>
    <div className='categoriescontent-checkwrapper'>
      <span className='categoriescontent-checkwrapper-text'>
        Check {title} →
      </span>
    </div>
  </Link>
);

export default CategoriesBox;