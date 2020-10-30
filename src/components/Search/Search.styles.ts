import styled from 'styled-components';

const SearchWrapper = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 80px;
  z-index: 3;
  width: 100%;
  height: 500px;
  background: ${(props) => props.theme.secondaryBgColor};
`;

const SearchContainer = styled.div`
  position: absolute;
  flex-direction: column;
  width: calc(100% - 256px);
  height: 100%;
`;

const SearchTitle = styled.span`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  width: 100%;
  margin-top: 32px;
  color: white;
`;

const SearchInput = styled.input`
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