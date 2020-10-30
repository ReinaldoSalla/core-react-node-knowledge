import React from 'react';
import { useSpring, config } from 'react-spring';
import {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText
} from './Footer.styles';
import './Footer.css';

const Footer = ({
  isSidebarActive
}) => {
  const spring = useSpring({
    config: config.molasses,
    from: { 
      opacity: isSidebarActive ? 0.5 : 1
    },
    to: async (next) => {
      await next({
        opacity: isSidebarActive ? 0.5 : 1
      });
    },
  });
  return (
    <FooterWrapper>
      <FooterContainer style={spring} disabled={isSidebarActive}>
        <FooterLink to='/contact'> Contact </FooterLink>
        <FooterLink to='/philosohpy'> Philosophy </FooterLink>
        <FooterText>
          Copyright © {new Date().getFullYear()} JavaScriptTemporal
        </FooterText>
        <FooterText>
          All the code in this website in MIT licensed
        </FooterText>
        <FooterText italic>
          Always bet on JS
        </FooterText>        
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
