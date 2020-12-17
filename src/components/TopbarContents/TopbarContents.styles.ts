import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as TopbarSidebarSvg } from '../../assets/icons/contents.svg';

const TopbarContentsWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid red;     
  }

  &:active {
    outline: none;
  }
`;

const TopbarContentsNormalizer = styled.div`
  z-index: 2;
  height: 32px;
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
`;

const TopbarContentsSvg = styled(animated(TopbarSidebarSvg))`
  width: 100%;
  height: 100%;
  color: white;
`;

const TopbarContentsText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarContentsFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarContentsWrapper,
  TopbarContentsNormalizer,
  TopbarContentsSvg,
  TopbarContentsText,
  TopbarContentsFiller,
};