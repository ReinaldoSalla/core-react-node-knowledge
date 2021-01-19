/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */

import React, { useEffect, FunctionComponent } from 'react';
import { animated, useSpring } from 'react-spring';
import Prism from 'prismjs';
import {
  Article,
  ContentCoreHeading,
  ContentCoreTitle,
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand
} from './ContentCore.styles';
import { ContentCoreProps } from './ContentCore.types';
import { getTitleSpring, getSectionSpring } from './ContentCore.animations';
import 'prismjs/components/prism-typescript.min.js';
// import 'prismjs/components/prism-javascript.min.js';
// import 'prismjs/components/prism-jsx.min.js';
// import './prism.css';
import 'prismjs/themes/prism-tomorrow.css';

const ContentCore: FunctionComponent<ContentCoreProps> = ({
  domNodes,
  target
}): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const titleSpring = useSpring(getTitleSpring());

  const sectionSpring = useSpring(getSectionSpring());

  return (
    <Article>
      <ContentCoreHeading
        style={titleSpring}
      >
        {target.title}
      </ContentCoreHeading>
      {target.text.map((element: any, index: any) => (
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
          {element.paragraphsCommandsCode.map((innerElement: any, index: number) => {
            if (
              Object.prototype.hasOwnProperty.call(innerElement, 'paragraph')
            ) {
              return (
                <ContentCoreText key={index}>
                  {innerElement.paragraph}
                </ContentCoreText>
              );
            } if (
              Object.prototype.hasOwnProperty.call(innerElement, 'command')
            ) {
              return (
                <ContentCoreContainer key={index}>
                  {innerElement.command.map((innerInnerElement: any, index: number) => (
                    <ContentCoreCommand key={index}>
                      {innerInnerElement}
                    </ContentCoreCommand>
                  ))}
                </ContentCoreContainer>
              );
            } if (
              Object.prototype.hasOwnProperty.call(innerElement, 'code')
            ) {
              return (
                <pre key={index} className='language-typescript'>
                  <code
                    className='language-typescript'
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {innerElement.code}
                  </code>
                </pre>
              );
            } if (
              Object.prototype.hasOwnProperty.call(
                innerElement,
                'paragraphWithMiddleLink'
              )
            ) {
              const blocks = innerElement.paragraphWithMiddleLink.split('*');
              return (
                <ContentCoreText key={index}>
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
                'paragraphWithEndLink'
              )
            ) {
              const blocks = innerElement.paragraphWithEndLink.split('*');
              return (
                <ContentCoreText key={index}>
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
    </Article>
  );
};

export default ContentCore;