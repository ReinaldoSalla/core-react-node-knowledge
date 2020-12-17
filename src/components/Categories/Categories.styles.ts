import styled from 'styled-components';
import { animated } from 'react-spring';

const CategoriesWrapper = styled(animated.section)`
  padding-top: 48px;
  background: ${(props): string => props.theme.pageBgColor};
  padding-bottom: 2rem;
`;

export default CategoriesWrapper;