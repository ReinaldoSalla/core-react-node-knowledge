import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';

const TopbarMagnifierWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
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

const TopbarMagnifierNormalizer = styled(animated.div)`
  z-index: 2;
  height: 32px;
  width: 32px;
  margin-bottom: 8px;
`;

const TopbarMagnifierSvg = styled(SearchSvg)`
  width: 120%;
  height: 120%;
  color: white;
  transform: translate3d(-8%, -8%, 0);
`;

const TopbarMagnifierText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarMagnifierFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarMagnifierWrapper,
  TopbarMagnifierNormalizer,
  TopbarMagnifierSvg,
  TopbarMagnifierText,
  TopbarMagnifierFiller
};