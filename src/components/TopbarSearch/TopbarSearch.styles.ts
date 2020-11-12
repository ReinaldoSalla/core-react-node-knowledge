import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';

const TopbarSearchWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  z-index: 4;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    /* outline: 1px solid red;     */
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

const TopbarSearchNormalizer = styled(animated.div)`
  z-index: 2;
  height: 32px;
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  /* border: 1px solid red; */
`;

const TopbarSearchSvg = styled(SearchSvg)`
  width: 112%;
  height: 112%;
  color: white;
  transform: translate3d(-5%, -5%, 0);
`;

const TopbarSearchText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarSearchFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarSearchWrapper,
  TopbarSearchNormalizer,
  TopbarSearchSvg,
  TopbarSearchText,
  TopbarSearchFiller
};

