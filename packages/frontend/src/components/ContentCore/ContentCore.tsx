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
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-twilight.css';
import './wrap.css';

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
              Object.prototype.hasOwnProperty.call(innerElement, 'filePath')
            ) {
              return (
                <pre key={index}>
                  <code
                    className='language-typescript'
                    style={{
                      wordBreak: 'break-word'
                    }}
                  >
                    {innerElement.filePath.trim()}
                  </code>
                </pre>
              );
            } if (
              Object.prototype.hasOwnProperty.call(innerElement, 'code')
            ) {
              // testing typescript
              // return (
              //   <pre
              //     key={index}
              //     className='line-numbers code-scrollbar'
              //   >
              //     <code
              //       className='language-typescript font-mobile'
              //       style={{
              //         // whiteSpace: 'pre-wrap',
              //         // padding: '16px'
              //         // paddingRight: '48px'
              //         wordBreak: 'break-word'
              //       }}
              //     >
              //       {innerElement.code.trim()}
              //     </code>
              //   </pre>
              // );

              // testing tsx return (
              return (
                <pre
                  key={index}
                  className='line-numbers code-scrollbar'
                >
                  <code
                    className='language-tsx font-mobile'
                    style={{
                      wordBreak: 'break-word'
                    }}
                  >
                    {innerElement.code.trim()}
                  </code>
                </pre>
              );
            } if (
              Object.prototype.hasOwnProperty.call(
                innerElement,
                'paragraphWithLink'
              )
            ) {
              const blocks = innerElement.paragraphWithLink.split('*');
              return (
                <ContentCoreText key={index}>
                  {blocks.map((block: any) => {
                    if (block[0] === '#') {
                      const withoutHash = block.replace('#', '');
                      const [text, link] = withoutHash.split('(');
                      const processedLink = link.replace(')', '');
                      return (
                        <ContentCoreLink
                          href={processedLink}
                          target='_blank'
                          rel='nofollow noopener noreferrer'
                          key={link}
                        >
                          {' '}
                          {text}
                        </ContentCoreLink>
                      );
                    }
                    return (
                      String(block.trim())
                    );
                  })}
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