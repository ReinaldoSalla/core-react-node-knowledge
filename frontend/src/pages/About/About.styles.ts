import styled from 'styled-components';

const Container = styled.section`
  padding-top: calc(${(props): string => props.theme.topbarHeight} + 100px);
  height: 100%;
`;

const Title = styled.h1`
  color: white;
`;

const Text = styled.p`
  color: white;
`;

export { Container, Title, Text };