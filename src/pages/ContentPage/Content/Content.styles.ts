import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: ${(props) => props.theme.topbarHeight} 0 0 64px;
`;

const ContentArea = styled.div`
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

const ContentSidebar = styled.ul`
  margin: 0 16px 0 64px;
  position: sticky;
  top: 100px;
  right: 20px;
  height: 300px;
  width: 150px;
  /* border: 1px solid black; */
`;

const ContentSidebarItem = styled.li`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`;

const ContentSidebarText = styled.span`
  display: inline-block;
  width: 100px;
  line-height: 0.7;
  /* border: 1px solid black; */
`;

const ContentSidebarCircle = styled.div`

  z-index: 2;
  margin-top: 2px;
  margin-right: 8px;
  width: 8px;
  height: 8px;
  border: 1px solid black;
  border-radius: 50%;
`;

const ContentSidebarLine = styled.div`
  z-index: -1;
  position: absolute;
  top: 12px;
  left: 5px;
  height: 260px;
  border-right: 1px solid black;
`;

export {
  ContentWrapper,
  ContentArea,
  ContentParagraph,
  ContentLink,
  ContentCommandsWrapper,
  ContentCommand,
  ContentSidebar,
  ContentSidebarItem,
  ContentSidebarText,
  ContentSidebarCircle,
  ContentSidebarLine
}