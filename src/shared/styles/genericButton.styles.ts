import { css } from 'styled-components';

const genericButton = css`
  width: 12rem;
  height: 4rem;
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: #263238;
  color: white;
  transition: background-color 500ms;

  &:hover {
    background-color: #26323894;
    cursor: pointer;
  }

  &:active {
    transition: background-color 250ms;
    background-color: #26323861;
  }

  @media only screen and (max-height: 680px) {
    height: 3.5rem;
  }
`;

export default genericButton;