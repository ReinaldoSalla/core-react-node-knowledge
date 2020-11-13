import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Match = ({ text, toggleSearch }) => {
  const firstMatch = specificTargets.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return <Link onClick={toggleSearch} to='/rendering'>{firstMatch}</Link>
  }
  const secondMatch = broadTargets.find((target) => {
    const isolatedTarget = target.split('-')[0];
    return isolatedTarget.slice(0, text.length).toLowerCase() === text.toLowerCase();
  })
  if (secondMatch) {
    return <Link onClick={toggleSearch} to='/'>{secondMatch}</Link>
  }
  return <span>"{text}" not found</span>
}

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
        <Text>
          {text ? <Match text={text} toggleSearch={toggleSearch} /> : null}
        </Text>
      </Element>
    </>
  );
};

export default SearchInput;