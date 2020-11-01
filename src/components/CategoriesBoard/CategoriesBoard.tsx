import React from 'react';
import CategoriesBox from '../CategoriesBox';
import {
  CategoriesBoardTitle,
  CategoriesBoardDescription,
  CategoriesBoardContents,
  CategoriesBoardEmpty
} from './CategoriesBoard.styles';

const CategoriesBoard = ({
  title,
  description,
  contents,
  Svg,
  elementRef
}) => (
  <>
    <CategoriesBoardTitle ref={elementRef}>
      {title}
    </CategoriesBoardTitle>
    <CategoriesBoardDescription>
      {description}
    </CategoriesBoardDescription>
    <CategoriesBoardContents>
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
        <CategoriesBoardEmpty key={index} />
      ))}
    </CategoriesBoardContents>
  </>
);

export default CategoriesBoard;

