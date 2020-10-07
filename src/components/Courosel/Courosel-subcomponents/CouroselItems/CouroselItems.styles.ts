import styled from 'styled-components';
import { animated } from 'react-spring';

const CouroselItemSharedWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
`;

const CouroselItemSharedText = styled.div`
  margin: 0 16px;
  color: white;
  text-align: center;
`;

const CouroselItemWrapper = styled(CouroselItemSharedWrapper)`
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100% - ${(props) => props.theme.topbarHeight} - 20px);
  position: absolute;
  overflow: hidden;
  padding-bottom: 20px;
`;

const CouroselItemTitle = styled(CouroselItemSharedText)`
  font-size: 46px;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 38px;
  }
`;

const CouroselItemDescription = styled(CouroselItemSharedText)`
  font-size: 32px;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 28px;
  }
`;

const CouroselItemCheckWrapper = styled(CouroselItemSharedWrapper)`
  justify-content: center;
  width: 150px;
  height: 130px;
  border: 1px solid white;
  border-radius: 20px;

  ${(props) => props.theme.breakpoints.small} {
    width: 130px;
    height: 110px;
  }
`;

const CouroselItemCheck = styled(CouroselItemSharedText)`
  padding-bottom: 4px;
  font-size: 28px;
  font-weight: 600;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 24;
  }
`;

export {
  CouroselItemWrapper,
  CouroselItemTitle,
  CouroselItemDescription,
  CouroselItemCheckWrapper,
  CouroselItemCheck
}
