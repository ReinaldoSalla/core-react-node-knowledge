import React, { useContext, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CarouselInputWrapper,
  CarouselInputArea,
  CarouselInputButton,
  CarouselInputText,
  CarouselInputInner,
  CarouselInputTimer,
  CarouselInputRow
} from './CarouselInput.styles';
import {
  getTextProps,
  getInnerProps
} from './CarouselInput.animations';
import { CarouselInputProps } from './CarouselInput.types';
import { ModalsState } from '../../shared/context/ModalsContext';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';

const CarouselInput: FunctionComponent<CarouselInputProps> = ({
  index,
  handleFirstClick,
  handleSecondClick,
  handleThirdClick
}): JSX.Element => {
  const isDocumentVisible = useDocumentVisibility();

  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const firstTextAnimation = useSpring(getTextProps(index, 0));

  const secondTextAnimation = useSpring(getTextProps(index, 1));

  const thirdTextAnimation = useSpring(getTextProps(index, 2));

  const firstInnerAnimation = useSpring(getInnerProps(index, 0));

  const secondInnerAnimation = useSpring(getInnerProps(index, 1));

  const thirdInnerAnimation = useSpring(getInnerProps(index, 2));

  return (
    <CarouselInputWrapper>
      <CarouselInputArea>
        <CarouselInputButton onClick={handleFirstClick}>
          <CarouselInputText style={firstTextAnimation}>
            Async
          </CarouselInputText>
          <CarouselInputInner style={firstInnerAnimation} />
        </CarouselInputButton>
        <CarouselInputButton onClick={handleSecondClick}>
          <CarouselInputText style={secondTextAnimation}>
            Objects
          </CarouselInputText>
          <CarouselInputInner style={secondInnerAnimation} />
        </CarouselInputButton>
        <CarouselInputButton onClick={handleThirdClick}>
          <CarouselInputText style={thirdTextAnimation}>
            React
          </CarouselInputText>
          <CarouselInputInner style={thirdInnerAnimation} />
        </CarouselInputButton>
      </CarouselInputArea>
      <CarouselInputTimer>
        {!isTopbarSidebarVisible && isDocumentVisible && (
          <CarouselInputRow key={index} />
        )}
      </CarouselInputTimer>
    </CarouselInputWrapper>
  );
};

export default CarouselInput;