import React, { useContext } from 'react';
import { useSpring, config } from 'react-spring';
import {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText,
} from './Footer.styles';
import { ModalsState } from '../../shared/context/ModalsContext';

const Footer = (): JSX.Element => {
  const { isTopbarSidebarVisible } = useContext(ModalsState);
  const spring = useSpring({
    config: config.molasses,
    from: {
      opacity: isTopbarSidebarVisible ? 0.2 : 1,
    },
    to: async (next) => {
      await next({
        opacity: isTopbarSidebarVisible ? 0.2 : 1,
      });
    },
  });
  return (
    <FooterWrapper>
      <FooterContainer
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
      >
        <FooterLink
          to='/contact'
          $isTopbarSidebarVisible={isTopbarSidebarVisible}
        >
          Contact
        </FooterLink>
        <FooterLink
          to='/philosohpy'
          $isTopbarSidebarVisible={isTopbarSidebarVisible}
        >
          Philosophy
        </FooterLink>
        <FooterText>
          Copyright ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          JavaScriptTemporal
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