import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  /* width: 100vw; */
  height: 100vh;
  padding-top: 200px;
  box-sizing: border-box;
  border: 10px solid red;
`;

const Label = styled.label`
  color: white;
`;

export {
  Container,
  Label
};