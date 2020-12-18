import React, { FunctionComponent } from 'react';
import CategoriesBox from '../CategoriesBox';
import {
  Wrapper,
  CategoriesBoardTitle,
  CategoriesBoardDescription,
  CategoriesBoardContents,
  CategoriesBoardEmpty
} from './CategoriesBoard.styles';
import getIndexArr from './CategoriesBoard.utils';

const CategoriesBoard: FunctionComponent<any> = ({
  title,
  description,
  contents,
  Svg,
  elementRef
}): JSX.Element => (
  <Wrapper>
    <CategoriesBoardTitle ref={elementRef}>
      {title}
    </CategoriesBoardTitle>
    <CategoriesBoardDescription>
      {description}
    </CategoriesBoardDescription>
    <CategoriesBoardContents>
      {contents.map((content: any) => (
        <CategoriesBox
          key={content.title}
          title={content.title}
          description={content.description}
          path={content.path}
          Svg={Svg}
        />
      ))}
      {getIndexArr(contents + 1).map((number) => (
        <CategoriesBoardEmpty key={number} />
      ))}
    </CategoriesBoardContents>
  </Wrapper>
);

export default CategoriesBoard;