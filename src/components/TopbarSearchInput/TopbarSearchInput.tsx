import React, { useState, FunctionComponent } from 'react';
import { Wrapper, Input, Element } from './TopbarSearchInput.styles';
import TopbarSearchInputMatch from '../TopbarSearchInputMatch';

const TopbarSearchInput: FunctionComponent<any> = ({
  style
}): JSX.Element => {
  const [text, setText] = useState('');

  const handleChange = (event: any): void => {
    setText(event.target.value);
  };

  return (
    <>
      <Wrapper>
        <Input
          style={style}
          type='text'
          placeholder='e.g. React'
          value={text}
          onChange={handleChange}
          id='TopbarSearch'
          autoComplete='off'
        />
      </Wrapper>
      <Element style={style}>
        {text && (
          <TopbarSearchInputMatch
            text={text}
          />
        )}
      </Element>
    </>
  );
};

export default TopbarSearchInput;