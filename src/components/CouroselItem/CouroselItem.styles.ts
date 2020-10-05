import styled from 'styled-components';
import { animated } from 'react-spring';

const CouroselItemSharedWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
`;

const CouroselItemWrapper = styled(CouroselItemSharedWrapper)`
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100% - var(--topbar-height) - 20px);
  position: absolute;
  overflow: hidden;
  padding-bottom: 20px;
`;

const CouroselItemTitle = styled.h1`
  padding: 0;
  margin: 0 16px;
  font-size: 46px;
  color: white;
  text-align: center;
`;

const CouroselItemDescription = styled.h2`
  padding: 0;
  margin: 0 16px;
  font-size: 32px;
  color: white;
  text-align: center;
`;

const CouroselItemCheckWrapper = styled(CouroselItemSharedWrapper)`
  justify-content: center;
  width: 150px;
  height: 130px;
  border: 1px solid white;
  border-radius: 20px;
`;

const CouroselItemCheck = styled.span`
  padding-bottom: 4px;
  font-size: 28px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

export {
  CouroselItemWrapper,
  CouroselItemTitle,
  CouroselItemDescription,
  CouroselItemCheckWrapper,
  CouroselItemCheck
}
