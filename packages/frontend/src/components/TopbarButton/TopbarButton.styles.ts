import styled from 'styled-components';
import { animated } from 'react-spring';
import SvgProps from './TopbarButton.types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;

  &:focus {
    outline: 1px solid red;    
  }

  &:hover {
    cursor: pointer;
  }
`;

const Normalizer = styled(animated.div)`
  z-index: 2;
  margin-bottom: 8px;
  height: 32px;
  width: 32px;
  color: white;
`;

const Svg = styled.div<SvgProps>`
  width: ${(props): string => props.width};
  height: ${(props): string => props.height};
  color: white;
  transform: ${(props): string => props.$transform};
`;

const Text = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const Filler = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: ${(props): string => props.theme.hoverColor};
`;

export {
  Container,
  Normalizer,
  Svg,
  Text,
  Filler
};