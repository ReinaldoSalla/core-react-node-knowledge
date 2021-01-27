import styled from 'styled-components';
import { Link } from 'react-router-dom';
import genericButton from './genericButton.styles';

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${genericButton};
`;

export default ButtonLink;