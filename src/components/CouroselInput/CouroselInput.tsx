import React, { FunctionComponent } from 'react';
import {
  CouroselInputWrapper,
  CouroselInputArea,
  CouroselInputButton,
  CouroselInputText
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
    </CouroselInputWrapper>
  );
};

export default CouroselInput;