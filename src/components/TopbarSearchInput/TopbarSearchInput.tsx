import React from 'react';
import { Wrapper, Input, Element } from './TopbarSearchInput.styles';
import TopbarSearchInputMatch from '../TopbarSearchInputMatch';

const TopbarSearchInput = ({
  style, toggleTopbarSearch, text, setText,
}) => {
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
          id='TopbarSearch'
        />
      </Wrapper>
      <Element style={style}>
        {text ? <TopbarSearchInputMatch text={text} toggleTopbarSearch={toggleTopbarSearch} /> : null}
      </Element>
    </>
  );
};

export default TopbarSearchInput;