import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.span`
  padding-right: 3rem;
  text-align: center;
  font-size: 80px;
  color: white;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 60px;
  }

  ${(props): string => props.theme.breakpoints.extraSmall} {
    font-size: 40px;
  }

  @media only screen and (max-width: 280px) {
    font-size: 32px;
    padding: 0;
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

const Spinner = styled.span`
  border: 10px solid white;
  border-top: 10px solid transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;

  ${(props): string => props.theme.breakpoints.small} {
    border: 8px solid white;
    border-top: 8px solid transparent;
    width: 75px;
    height: 75px;
  }

  ${(props): string => props.theme.breakpoints.extraSmall} {
    border: 5px solid white;
    border-top: 5px solid transparent;
    width: 50px;
    height: 50px;
  }

  @media only screen and (max-width: 280px) {
    display: none;
  }
`;

export { Container, Text, Spinner };