import React, { FunctionComponent } from 'react';
import {
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
  ContentCoreHighlight
} from './ContentCore.styles';
import { ContentCoreProps } from './ContentCore.types';

const ContentCore: FunctionComponent<ContentCoreProps> = ({ 
  introDomNode,
  setupDomNode,
  jsxDomNode,
  stylingDomNode,
  useStateDomNode,
  useReducerDomNode,
  finalCodeDomNode 
}): JSX.Element => {
  return (
    <>
      <div ref={introDomNode}>
        <h2>1. Intro</h2>
        <ContentCoreText>
          The idea of this guide is to explore JSX, styling and state management in React, by creating a resposive and interactive webpage. We'll use create-react-app to setup the project.
        </ContentCoreText>
      </div>
      <div ref={setupDomNode}>
        <h2>2. Setup</h2>
        <ContentCoreText>
          Install the latest recommended version of <ContentCoreLink href='https://nodejs.org/en/' target='_blank'  rel="noopener noreferrer"> Node.js </ContentCoreLink>
        </ContentCoreText>
        <ContentCoreText>
          To start the project, type in your terminal
        </ContentCoreText>
        <ContentCoreContainer>
          <ContentCoreCommand>
            $ npx create-react-app jsexpert-rendering
          </ContentCoreCommand>
          <ContentCoreCommand>
            $ cd jsexpert-rendering
          </ContentCoreCommand>
          <ContentCoreCommand>
            $ npm run start
          </ContentCoreCommand>
        </ContentCoreContainer>
        <ContentCoreText>
          After <ContentCoreHighlight> npm run start </ContentCoreHighlight>is finished, React will lauch the app in <ContentCoreLink href='http://localhost:3000' target='_blank' rel="noopener noreferrer">localhost:3000</ContentCoreLink>. There are some files which are unnecessary for this guide. You can leave them if you want, but if you're interested in cleaning up, you may do the following.
        </ContentCoreText>
        <ContentCoreText>
          Inside the src folder, delete App.test.js, index.css, logo.svg, serviceWorker.js and setupTests.js
        </ContentCoreText>
        <ContentCoreText>
          White this code in index.js
        </ContentCoreText>
        <ContentCoreText>
          And this code in App.js
        </ContentCoreText>
        <ContentCoreText>
          If you find yourself deleting these files too often, you can alternatively clone this <a  href='https://google.com' target='_blank' rel="noopener noreferrer">repository</a>. Service workers and testes are important for projects in production, but for guides like this one, they can be removed.
        </ContentCoreText>
        <ContentCoreText>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
      </div>
      <div ref={jsxDomNode}>
        <h2>3. JSX</h2>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
      </div>

      <div ref={stylingDomNode}>
        <h2>4. Styling</h2>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
      </div>

      <div ref={useStateDomNode}>
        <h2>5. useState</h2>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
      </div>

      <div ref={useReducerDomNode}>
        <h2>6. useReducer</h2>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
      </div>

      <div ref={finalCodeDomNode}>
        <h2>7. Final Code</h2>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
        <ContentCoreText >
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </ContentCoreText>
      </div>
    </>
  );
};

export default ContentCore;