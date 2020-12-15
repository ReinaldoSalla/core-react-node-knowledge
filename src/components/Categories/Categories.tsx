import React from 'react';
import { CategoriesWrapper } from './Categories.styles';
import CategoriesBoard from '../CategoriesBoard';
import { processedContents, icons } from './Categories.utils';

const Categories = ({
  domNodes
}) => {
  return (
    <main>
      <CategoriesWrapper>
        {processedContents.map((item, index) => (
          <CategoriesBoard 
            key={item.title}
            title={item.title}
            description={item.description}
            contents={item.subcontents}
            Svg={icons[index]}   
            elementRef={domNodes[index]}
          />
        ))}
      </CategoriesWrapper>
    </main>
  );
};

export default Categories;