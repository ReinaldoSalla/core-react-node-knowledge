import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.aside)`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 500px;
  background: ${(props) => props.theme.topbarBgColor};
`;

export default SearchWrapper;