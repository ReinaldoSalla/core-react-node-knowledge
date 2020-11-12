import React, { useState } from 'react';
import { Wrapper, Input, Element, Text } from './SearchInput.styles';

const data = [
  'React - JSX',
  'JavaScript - Functions',
  'Node - Authentication'
];

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
          React - JSX 
        </Text>
      </Element>
    </>
  );
};

export default SearchInput;