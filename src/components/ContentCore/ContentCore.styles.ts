import styled from 'styled-components';

const ContentCoreText = styled.p`
  line-height: 1.7;
`;

const ContentCoreLink = styled.a`
  font-weight: 600;
  color: red;
  transition: color 250ms;

  &:hover {
    color: orange;
  }
`;

const ContentCoreContainer = styled.section`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  border-radius: 10px;
`;

const ContentCoreCommand = styled.span`
  display: inline-block;
  color: white;
  word-spacing: 2px;
  margin: 20px 20px 0 20px;
`;

const ContentCoreHighlight = styled.span`
  background: rgba(255, 0, 0, 0.1);
`;

export { 
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
  ContentCoreHighlight 
};