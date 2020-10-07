import React, { FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CouroselInputWrapper,
  CouroselInputArea,
  CouroselInputButton,
  CouroselInputText,
  CouroselInputTimer,
  CouroselInputRow
} from './CouroselInput.styles';
import { couroselInputAnimation, offset } from './CouroselInput.animations';
import CouroselInputProps from './CouroselInput.types';

const CouroselInput: FunctionComponent<CouroselInputProps> = ({
  handleFirstClick,
  handleSecondClick,
  handleThirdClick
}): JSX.Element => {
  const { width, opacity }: any = useSpring(couroselInputAnimation);
  return (
    <CouroselInputWrapper>
      <CouroselInputArea>
        <CouroselInputButton onClick={handleFirstClick}>
          <CouroselInputText>
            JavaScript
          </CouroselInputText>
        </CouroselInputButton>
        <CouroselInputButton onClick={handleSecondClick}>
          <CouroselInputText>
            React
          </CouroselInputText>
        </CouroselInputButton>
        <CouroselInputButton onClick={handleThirdClick}>
          <CouroselInputText>
            Node
          </CouroselInputText>
        </CouroselInputButton>
      </CouroselInputArea>
      <CouroselInputTimer>
        <CouroselInputRow 
          style={{
            width: width.interpolate((width) => (
              width < offset ? 0 : `${width}%`
            )),
            opacity: opacity.interpolate((opacity) => (
              opacity < offset / 100 ? 0 : opacity - offset / 100
            ))
          }}
        />
      </CouroselInputTimer>
    </CouroselInputWrapper>
  );
};

export default CouroselInput;