import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.aside)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  /* top: 40px; */
  z-index: 1;
  width: 100%;
  height: 500px;
  background: ${(props) => props.theme.bgColor};
`;

const SearchContainer = styled.div`
  position: absolute;
  flex-direction: column;
  width: calc(100% - 256px);
  height: 100%;
`;

const SearchTitle = styled(animated.span)`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  width: 100%;
  margin-top: 128px;
  color: white;
`;

const SearchInput = styled(animated.input)`
  height: 60px;
  width: calc(100% - 32px);
  margin-top: 32px;
  border-radius: 20px;
  font-size: 24px;
  padding: 0 16px;
`;

export { 
  SearchWrapper, 
  SearchContainer,
  SearchTitle,
  SearchInput 
};