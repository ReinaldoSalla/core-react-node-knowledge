import styled from 'styled-components';
import { animated } from 'react-spring';

const Article = styled.article`
  border: 1px solid transparent;
`;

const ContentCoreHeading = styled(animated.h1)`
  font-size: 2em;
  padding: 0.5em 0;
  color: ${(props): string => props.theme.primaryTextColor};
`;

const ContentCoreTitle = styled.h2`
  color: ${(props): string => props.theme.primaryTextColor};
`;

const ContentCoreText = styled.p`
  line-height: 1.7;
  color: ${(props): string => props.theme.secondaryTextColor};
  font-size: 1rem;
`;

const ContentCoreLink = styled.a`
  display: inline-block;
  margin: 0 4px;
  padding-bottom: 2px;
  border-bottom: 1px solid red;
  line-height: 1;
  color: red;
  transition: color 250ms, border 250ms;

  &:hover {
    color: orange;
    border-bottom: 1px solid orange;
  }
`;

const ContentCoreContainer = styled.ul`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: rgb(35, 38, 43);
  border-radius: 10px;
`;

const ContentCoreCommand = styled.li`
  display: inline-block;
  color: white;
  word-spacing: 2px;
  margin: 20px 20px 0 20px;
`;

const ContentCoreHighlight = styled.span`
  background: rgba(255, 0, 0, 0.1);
`;

const FilePath = styled.span`
  display: flex;
  align-items: center;
  padding: 20px;
  border: .3em solid hsl(0, 0%, 33%);
  border-radius: 10px;
  background: hsl(0, 0%, 8%);
  color: white;
  letter-spacing: 0.5px;
  word-break: break-word;
`;

export {
  Article,
  ContentCoreHeading,
  ContentCoreTitle,
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
  ContentCoreHighlight,
  FilePath
};