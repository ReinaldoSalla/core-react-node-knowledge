import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Input, Element, Text } from './SearchInput.styles';
import SearchInputMatch from '../SearchInputMatch';

const SearchInput = ({ style, toggleSearch }) => {
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
      <Element style={style}>
        {text ? <SearchInputMatch text={text} toggleSearch={toggleSearch} /> : null}
      </Element>
    </>
  );
};

export default SearchInput;