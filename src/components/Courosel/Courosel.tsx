import React from 'react';
import { useTransition } from 'react-spring';
import { Wrapper } from './Courosel.styles';
import { transitionProps } from './Courosel.animations';
import CouroselItem from '../CouroselItem';
import texts from '../CouroselItem/CouroselItem.utils';

const Courosel = () => {

  const transitions = useTransition(0, null, {
    ...transitionProps,
    order: ['leave', 'enter', 'update']
  });

  const couroselItems = texts.map(({ name, title, description, check }) => {
    return ({ style }) => (
      <CouroselItem 
        style={style}
        name={name}
        title={title}
        description={description}
        check={check}
      />
    )
  })

  return (
    <Wrapper>
      {transitions.map(({ item, props, key }) => {
        const Item = couroselItems[item];
          return (
            <Item 
              key={key}
              style={props}
            />
          )
      })}
    </Wrapper>
  );
};

export default Courosel;