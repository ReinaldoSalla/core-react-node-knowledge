import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import { FooterTextProps, FooterLinkProps } from './Footer.types';

const FooterWrapper = styled.footer`
  height: calc(100% - var(--topbar-height));
  background: var(--bg-color);
`;

const FooterContainer = styled(animated.div)<FooterLinkProps>`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none' : 'auto'};

  @media only screen and (max-height: 400px) {
    display: none;
  }
`;

const FooterLink = styled(Link)<FooterLinkProps>`
  font-size: 32px;
  color: white;
  border-bottom: 1px solid white;
  transition: color 250ms, border 250ms;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    border-bottom: 1px solid ${(props) => props.theme.hoverColor};
  }

  ${(props) => props.theme.breakpoints.small} {
    font-size: 24px
  }
`;


const FooterText = styled.span<FooterTextProps>`
  margin: 0 1rem;
  font-size: 32px;
  text-align: center;
  color: white;
  font-style: ${(props) => props.italic ? 'italic' : 'normal'};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 24px
  }
`;

export {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText
};