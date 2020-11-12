import React, { useState } from 'react';
import { Wrapper, Input } from './SearchInput.styles';

const SearchInput = ({ style }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Wrapper> 
      <Input 
        style={style} 
        type='text' 
        placeholder='e.g. GraphQL' 
        value={text}
        onChange={handleChange}
      /> 
    </Wrapper>
  );
};

export default SearchInput;