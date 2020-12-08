import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeSvg } from '../../assets/icons/home.svg';

const TopbarButtonHomeWrapper = styled(Link)`
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

const TopbarButtonHomeNormalizer = styled.div`
  z-index: 2;
  margin-bottom: 8px;
  height: 32px;
  width: 32px;
  color: white;
`;

const TopbarButtonHomeSvg = styled(animated(HomeSvg))`
  width: 112%;
  height: 112%;
  color: white;
  transform: translate3d(-5%, -5%, 0);
  /* border: 1px solid blue; */
`;


const TopbarButtonHomeText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarButtonHomeFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarButtonHomeWrapper,
  TopbarButtonHomeNormalizer,
  TopbarButtonHomeSvg,
  TopbarButtonHomeText,
  TopbarButtonHomeFiller
};

