import React, { useContext } from 'react';
import { useSpring, config } from 'react-spring';
import { Container, Title, Text } from './About.styles';
import { ModalsState } from '../../shared/context/ModalsContext';

function About() {
  const { isTopbarSidebarVisible } = useContext(ModalsState);
  const spring = useSpring({
    config: config.molasses,
    from: {
      opacity: isTopbarSidebarVisible ? 0.2 : 1
    },
    to: async (next: any) => {
      await next({
        opacity: isTopbarSidebarVisible ? 0.2 : 1
      });
    }
  });
  return (
    <Container style={spring}>
      <Title>About ProgrTmp</Title>
      <Text>
        Hello, my name is Reinaldo Salla and I am a Software Developer.
      </Text>
      <Text>
        I created this website as a portfolio App.
      </Text>
      <Text>
        If you have any complains/comments/suggestions about
        this application, fell free to email me at reinaldosalla95@gmail.com.
      </Text>
    </Container>
  );
}

export default About;