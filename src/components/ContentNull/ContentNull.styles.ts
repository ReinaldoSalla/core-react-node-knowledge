import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 200px);
  padding-top: 200px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  color: white;
`;

const Button = styled.button`
  width: 12rem;
  height: 4rem;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #263238;
  color: white;
  transition: background-color 500ms;

  &:hover {
    background-color: #26323894;
    cursor: pointer;
  }

  &:active {
    transition: background-color 250ms;
    background-color: #26323861;
  }

  @media only screen and (max-height: 680px) {
    height: 3.5rem;
  }
`;

export { Container, Text, Button };
