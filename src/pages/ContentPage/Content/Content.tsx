import React, { useEffect } from 'react';
import {
  ContentWrapper,
  ContentArea,
  ContentParagraph,
  ContentLink,
  ContentCommandsWrapper,
  ContentCommand,
  ContentSidebar
} from './Content.styles';
import './Content.css';

const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContentWrapper>
      <h1>React - Rendering</h1>
      <ContentArea>
        <div>
          <h2>1. Intro</h2>
          <ContentParagraph>
            The idea of this guide is to explore JSX, styling and state management in React, by creating a resposive and interactive webpage. We'll use create-react-app to setup the project.
          </ContentParagraph>
          <h2>2. Setup</h2>
          <ContentParagraph>
            Install the latest recommended version of <ContentLink href='https://nodejs.org/en/' target='_blank'>Node.js </ContentLink>
          </ContentParagraph>
          <ContentParagraph>
            To start the project, type in your terminal
          </ContentParagraph>
          <ContentCommandsWrapper>
            <ContentCommand>
              $ npx create-react-app jsexpert-rendering 
            </ContentCommand>
            <ContentCommand>
              $ cd jsexpert-rendering
            </ContentCommand>
            <ContentCommand>
              $ npm run start
            </ContentCommand>
          </ContentCommandsWrapper>
          <ContentParagraph>
            After {' '} npm run start is finished, React will lauch the app in <ContentLink className='basecontentpage-link' href='http://localhost:3000' target='_blank'>localhost:3000</ContentLink>. There are some files which are unnecessary for this guide. You can leave them if you want, but if you're interested in cleaning up, you may do the following.
          </ContentParagraph>
          <ContentParagraph>
            Inside the src folder, delete App.test.js, index.css, logo.svg, serviceWorker.js and setupTests.js
          </ContentParagraph>
          <ContentParagraph>
            Write this code in index.js
          </ContentParagraph>
          <ContentParagraph>
            And this code in App.js
          </ContentParagraph>
          <ContentParagraph>
            If you find yourself deleting these files too often, you can alternatively clone this <ContentLink href='https://google.com' target='_blank'>repository</ContentLink>. Service workers and testes are important for projects in production, but for guides like this one, they can be removed.
          </ContentParagraph>
        </div>
        <ContentSidebar/>
      </ContentArea>
    </ContentWrapper>
  );
};

export default Content;