import React, { FunctionComponent } from 'react';
import { Wrapper, Input, Element } from './TopbarSearchInput.styles';
import TopbarSearchInputMatch from '../TopbarSearchInputMatch';

const TopbarSearchInput: FunctionComponent<any> = ({
  style, toggleTopbarSearch, text, setText,
}): JSX.Element => {
  const handleChange = (event): void => {
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