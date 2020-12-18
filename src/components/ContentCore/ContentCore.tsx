import React, { useEffect, FunctionComponent } from 'react';
import { animated, useSpring } from 'react-spring';
import Prism from 'prismjs';
import {
  ContentCoreHeading,
  ContentCoreTitle,
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
} from './ContentCore.styles';
import { ContentCoreProps } from './ContentCore.types';
import { getTitleSpring, getSectionSpring } from './ContentCore.animations';
import 'prismjs/components/prism-jsx.min.js';
import './prism.css';

const ContentCore: FunctionComponent<ContentCoreProps> = ({
  domNodes,
  target,
}): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const titleSpring = useSpring(getTitleSpring());

  const sectionSpring = useSpring(getSectionSpring());

  return (
    <article>
      <ContentCoreHeading
        style={titleSpring}
      >
        {target.title}
      </ContentCoreHeading>
      {target.text.map((element, index) => (
        <animated.section
          style={sectionSpring}
          key={element.subtitle}
          ref={domNodes[index]}
        >
          <ContentCoreTitle>
            {index + 1}
            .
            {' '}
            {element.subtitle}
          </ContentCoreTitle>
          {element.paragraphsCommandsCode.map((innerElement) => {
            if (
              Object.prototype.hasOwnProperty.call(innerElement, 'paragraph')
            ) {
              return (
                <ContentCoreText key={element.subtitle}>
                  {innerElement.paragraph}
                </ContentCoreText>
              );
            } if (
              Object.prototype.hasOwnProperty.call(innerElement, 'command')
            ) {
              return (
                <ContentCoreContainer key={innerElement}>
                  {innerElement.command.map((innerInnerElement) => (
                    <ContentCoreCommand key={element.subtitle}>
                      {innerInnerElement}
                    </ContentCoreCommand>
                  ))}
                </ContentCoreContainer>
              );
            } if (
              Object.prototype.hasOwnProperty.call(innerElement, 'code')
            ) {
              return (
                <pre key={element.subtitle} className='language-jsx'>
                  <code
                    className='language-jsx'
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {innerElement.code}
                  </code>
                </pre>
              );
            } if (
              Object.prototype.hasOwnProperty.call(
                innerElement,
                'paragraphWithMiddleLink',
              )
            ) {
              const blocks = innerElement.paragraphWithMiddleLink.split('*');
              return (
                <ContentCoreText key={blocks[0]}>
                  {blocks[0]}
                  <ContentCoreLink
                    href='https://nodejs.org/en/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {blocks[1]}
                  </ContentCoreLink>
                  {blocks[2]}
                </ContentCoreText>
              );
            } if (
              Object.prototype.hasOwnProperty.call(
                innerElement,
                'paragraphWithEndLink',
              )
            ) {
              const blocks = innerElement.paragraphWithEndLink.split('*');
              return (
                <ContentCoreText key={blocks[0]}>
                  {blocks[0]}
                  <ContentCoreLink
                    href='https://nodejs.org/en/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {blocks[1]}
                  </ContentCoreLink>
                </ContentCoreText>
              );
            }
            return null;
          })}
        </animated.section>
      ))}
    </article>
  );
};

export default ContentCore;