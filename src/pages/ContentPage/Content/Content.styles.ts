import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: ${(props) => props.theme.topbarHeight} 20px 0 20px;
  display: flex;
`;

const ContentParagraph = styled.p`
  line-height: 1.7;
`;

const ContentLink = styled.a`
  font-weight: 600;
  color: red;
  transition: color 250ms;

  &:hover {
    color: orange;
  }
`;

const ContentCommandsWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  border-radius: 10px;
`;

const ContentCommand = styled.span`
  display: inline-block;
  color: white;
  word-spacing: 2px;
  margin: 20px 20px 0 20px;
`;

const ContentSidebar = styled.div`
  position: sticky;
  top: 100px;
  right: 20px;
  height: 300px;
  width: 150px;
  border: 1px solid black;
`

export {
  ContentWrapper,
  ContentParagraph,
  ContentLink,
  ContentCommandsWrapper,
  ContentCommand,
  ContentSidebar
}

