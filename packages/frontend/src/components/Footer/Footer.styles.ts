import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import { FooterTextProps, FooterLinkProps } from './Footer.types';

const FooterWrapper = styled.footer`
  height: calc(100% - ${(props): string => props.theme.topbarHeight});
  background: ${(props): string => props.theme.topbarBgColor};
`;

const FooterContainer = styled(animated.div)<FooterLinkProps>`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  pointer-events: ${(props): string => (props.$isTopbarSidebarVisible
    ? 'none'
    : 'auto'
  )};

  @media only screen and (max-height: 400px) {
    display: none;
  }
`;

const FooterLink = styled(Link)`
  font-size: 32px;
  color: white;
  border-bottom: 1px solid white;
  transition: color 250ms, border 250ms;

  &:hover {
    color: ${(props): string => props.theme.hoverColor};
    border-bottom: 1px solid ${(props): string => props.theme.hoverColor};
  }

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 24px
  }
  
  @media only screen and (max-width: 300px) {
    font-size: calc(16px + 2vmin);
  }
`;

const FooterText = styled.span<FooterTextProps>`
  margin: 0 16px;
  font-size: 32px;
  text-align: center;
  color: white;
  font-style: ${(props): string => (props.italic ? 'italic' : 'normal')};

  ${(props): string => props.theme.breakpoints.small} {
    font-size: 24px
  }

  @media only screen and (max-width: 300px) {
    font-size: calc(16px + 2vmin);
  }
`;

export {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText
};