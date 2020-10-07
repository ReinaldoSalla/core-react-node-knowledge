import React, { FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CouroselInputWrapper,
  CouroselInputArea,
  CouroselInputButton,
  CouroselInputText,
  CouroselInputInner,
  CouroselInputTimer,
  CouroselInputRow
} from './CouroselInput.styles';
import { 
  couroselTimerAnimation, 
  couroselTimerOffset,
  getTextProps,
  getInnerProps 
} from './CouroselInput.animations';
import CouroselInputProps from './CouroselInput.types';

const CouroselInput: FunctionComponent<CouroselInputProps> = ({
  index,
  handleFirstClick,
  handleSecondClick,
  handleThirdClick
}): JSX.Element => {
  const { width, opacity }: any = useSpring(couroselTimerAnimation);

  const firstTextAnimation = useSpring(getTextProps(index, 0));

  const secondTextAnimation = useSpring(getTextProps(index, 1));

  const thirdTextAnimation = useSpring(getTextProps(index, 2));

  const firstInnerAnimation = useSpring(getInnerProps(index, 0));

  const secondInnerAnimation = useSpring(getInnerProps(index, 1));

  const thirdInnerAnimation = useSpring(getInnerProps(index, 2));

  return (
    <CouroselInputWrapper>
      <CouroselInputArea>
        <CouroselInputButton onClick={handleFirstClick}>
          <CouroselInputText style={firstTextAnimation}>
            JavaScript
          </CouroselInputText>
          <CouroselInputInner style={firstInnerAnimation} />
        </CouroselInputButton>
        <CouroselInputButton onClick={handleSecondClick}>
          <CouroselInputText style={secondTextAnimation}>
            React
          </CouroselInputText>
          <CouroselInputInner style={secondInnerAnimation} />
        </CouroselInputButton>
        <CouroselInputButton onClick={handleThirdClick}>
          <CouroselInputText style={thirdTextAnimation}>
            Node
          </CouroselInputText>
          <CouroselInputInner style={thirdInnerAnimation} />
        </CouroselInputButton>
      </CouroselInputArea>
      <CouroselInputTimer>
        <CouroselInputRow 
          style={{
            width: width.interpolate((width) => (
              width < couroselTimerOffset ? 0 : `${width}%`
            )),
            opacity: opacity.interpolate((opacity) => (
              opacity < couroselTimerOffset / 100 ? 0 : opacity - couroselTimerOffset / 100
            ))
          }}
        />
      </CouroselInputTimer>
    </CouroselInputWrapper>
  );
};

export default CouroselInput;