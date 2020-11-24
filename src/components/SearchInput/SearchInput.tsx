import React, { useState } from 'react';
import { Wrapper, Input, Element } from './SearchInput.styles';
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
          id='search'
        /> 
      </Wrapper>
      <Element style={style}>
        {/* {text ? <SearchInputMatch text={text} toggleSearch={toggleSearch} /> : <div style={{height: 'calc(59vh - 80px)'}}></div>} */}
        {text ? <SearchInputMatch text={text} toggleSearch={toggleSearch} /> : null}
      </Element>
    </>
  );
};

export default SearchInput;