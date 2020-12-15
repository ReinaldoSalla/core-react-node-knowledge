import React, { useEffect, FunctionComponent } from 'react';
import {
  ContentCoreWrapper,
  ContentCoreHeading,
  ContentCoreTitle,
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
} from './ContentCore.styles';
import { ContentCoreProps } from './ContentCore.types';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min.js';
import './prism.css';

const ContentCore: FunctionComponent<ContentCoreProps> = ({ 
  domNodes,
  data
}): JSX.Element => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ContentCoreWrapper>
      <ContentCoreHeading>{data.simpleStateManagement.title}</ContentCoreHeading>
      {data.simpleStateManagement.text.map((element, index) => (
        <section key={element.subtitle} ref={domNodes[index]}>
          <ContentCoreTitle>{index + 1}. {element.subtitle}</ContentCoreTitle>
          {element.paragraphsCommandsCode.map((innerElement, innerIndex) => {
            if (innerElement.hasOwnProperty('paragraph')) {
              return <ContentCoreText key={innerIndex}>{innerElement.paragraph}</ContentCoreText>
            } else if (innerElement.hasOwnProperty('command')) {
              return (
                <ContentCoreContainer key={innerElement}>
                  {innerElement.command.map((innerInnerElement, innerInnerIndex) => (
                    <ContentCoreCommand key={innerInnerIndex}>
                      {innerInnerElement}
                    </ContentCoreCommand>
                  ))}
                </ContentCoreContainer>
              );
            } else if (innerElement.hasOwnProperty('code')) {
              return (
                <pre key={index} className='language-jsx'>
                  <code className='language-jsx' 
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                   {innerElement.code} 
                  </code>
                </pre>
              );
            } else if (innerElement.hasOwnProperty('paragraphWithMiddleLink')) {
              const blocks = innerElement.paragraphWithMiddleLink.split('*');
              return (
                <ContentCoreText key={blocks[0]}>
                  {blocks[0]} 
                  <ContentCoreLink 
                    href='https://nodejs.org/en/' 
                    target='_blank'  
                    rel="noopener noreferrer"
                  >
                    {blocks[1]} 
                  </ContentCoreLink>
                  {blocks[2]}
                </ContentCoreText>
              );
            } else if (innerElement.hasOwnProperty('paragraphWithEndLink')) {
              const blocks = innerElement.paragraphWithEndLink.split('*');
              return (
                <ContentCoreText key={blocks[0]}>
                  {blocks[0]}
                  <ContentCoreLink 
                    href='https://nodejs.org/en/' 
                    target='_blank'  
                    rel="noopener noreferrer"
                  >
                    {blocks[1]}  
                  </ContentCoreLink>  
                </ContentCoreText>
              )
            }
          })} 
        </section>
      ))}
    </ContentCoreWrapper>
  );
};

export default ContentCore;