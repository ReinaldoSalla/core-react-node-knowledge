import React, { useState } from 'react';
import { Wrapper, Input, Element, Text } from './SearchInput.styles';

const specificTargets = [
  'Functions - JavaScript',
  'JSX - React',
  'Authentication - Node',
];

const broadTargets = [
  'JavaScript - 5 tutorials',
  'React - 8 tutorials',
  'Node - 3 tutorials'
];

const renderMatch = (text: string): string => {
  const firstMatch = specificTargets.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return firstMatch;
  }
  const secondMatch = broadTargets.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  return secondMatch ? secondMatch : `"${text}" not found`;
};

const SearchInput = ({ style }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>    
      <Wrapper> 
        <Input 
          style={style} 
          type='text' 
          placeholder='e.g. GraphQL' 
          value={text}
          onChange={handleChange}
        /> 
      </Wrapper>
      <Element>
        <Text>
          {text ? renderMatch(text) : null}
        </Text>
      </Element>
    </>
  );
};

export default SearchInput;