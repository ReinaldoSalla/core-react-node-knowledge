import React from 'react';
import { ReactComponent as RightArrowSvg } from '../../assets/icons/arrow.right.svg';
import './CategoriesContent.css'

const CategoriesContents = ({ 
  title, 
  description, 
  path,
  Svg 
}) => (
  <div className='categoriescontent'>
    <div className='categoriescontent-iconwrapper'>
      <Svg />
    </div>
    <h4 className='categoriescontent-title'>
      {title} {description} {path}
    </h4>
  </div>
);

export default CategoriesContents;