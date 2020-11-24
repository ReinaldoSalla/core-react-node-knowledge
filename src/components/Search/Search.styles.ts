import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.aside)`
  position: fixed;
  z-index: 1;
  width: 100%;
  /* height: 500px; */
  /* min-height: 500px; */
  /* height: 250px; */
  background: ${(props) => props.theme.topbarBgColor};
  /* overflow-y: scroll; */
  /* overflow-y: hidden; */
  overflow-y: auto;
  border: 1px solid green;
`;

export default SearchWrapper;