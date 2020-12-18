import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: calc(${(props): string => props.theme.topbarHeight} + 100px);
`;

const Text = styled.div`
  font-size: 80px;
  padding-right: 3rem;
  color: white;

  ${(props): string => props.theme.breakpoints.extraSmall} {
    font-size: 40px;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 10px solid white;
  border-top: 10px solid transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;

  ${(props): string => props.theme.breakpoints.extraSmall} {
    border: 5px solid white;
    border-top: 5px solid transparent;
    width: 50px;
    height: 50px;
  }
`;

export { Container, Text, Spinner };