import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.aside)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background: ${(props): string => props.theme.topbarBgColor};
`;

export default SearchWrapper;