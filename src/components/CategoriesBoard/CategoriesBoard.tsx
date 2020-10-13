import React from 'react';
import CategoriesBox from '../CategoriesBox';
import './CategoriesBoard.css';

const CategoriesBoard = ({
  title,
  description,
  contents,
  Svg,
  elementRef
}) => (
  <>
    <h2 ref={elementRef} className='categoriesitem-title'>
      {title}
    </h2>
    <h3 className='categoriesitem-description'>
      {description}
    </h3>
    <section className='categoriesitem-contents'>
      {contents.map((content, index) => (
        <CategoriesBox 
          key={index}
          title={content.title}
          description={content.description}
          path={content.path}
          Svg={Svg}
        />
      ))}
      {new Array(4).fill(0).map((_, index) => (
        <div key={index} className='categoriesitem-contents-empty' />
      ))}
    </section>
  </>
);

export default CategoriesBoard;

