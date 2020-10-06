import React, { FunctionComponent } from 'react';
import {
  CouroselInputWrapper,
  CouroselInputArea,
  CouroselInputButton,
  CouroselInputText,
  CouroselInputTimer,
  CouroselInputRow
} from './CouroselInput.styles';

const CouroselInput: FunctionComponent = (): JSX.Element => {
  return (
    <CouroselInputWrapper>
      <CouroselInputArea>
        <CouroselInputButton>
          <CouroselInputText>
            JavaScript
          </CouroselInputText>
        </CouroselInputButton>
        <CouroselInputButton>
          <CouroselInputText>
            React
          </CouroselInputText>
        </CouroselInputButton>
        <CouroselInputButton>
          <CouroselInputText>
            Node
          </CouroselInputText>
        </CouroselInputButton>
      </CouroselInputArea>
      <CouroselInputTimer>
        <CouroselInputRow />
      </CouroselInputTimer>
    </CouroselInputWrapper>
  );
};

export default CouroselInput;