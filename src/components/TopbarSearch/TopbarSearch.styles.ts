import styled from 'styled-components';
import { animated } from 'react-spring';
import { SearchWrapperProps } from './TopbarSearch.types';

const SearchWrapper = styled(animated.aside)<SearchWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background: ${(props): string => props.theme.topbarBgColor};
  overflow-y: ${({ $scroll }): string => ($scroll ? 'scroll' : 'hidden')};
`;

export default SearchWrapper;