import styled from 'styled-components';

const CouroselInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  position: absolute;
  bottom: 10px;
  z-index: 1;
`;

const CouroselInputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const CouroselInputButton = styled.div`
  height: 30px;
  width: 100px;
  border: 1px solid white;
  border-radius: 5px;
`;

const CouroselInputText = styled.span`
  position: absolute;
  font-size: 20px;
  width: 100px;
  text-align: center;
  color: white;
  z-index: 2;
`;

const CouroselInputTimer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
`;

const CouroselInputRow = styled.div`
  height: 10px;
  border-top: 2px solid white;
  width: 50%;
`;

export {
  CouroselInputWrapper,
  CouroselInputArea,
  CouroselInputButton,
  CouroselInputText,
  CouroselInputTimer,
  CouroselInputRow
};